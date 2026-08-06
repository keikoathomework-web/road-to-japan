-- ============================================================
-- Road to Japan — Supabase schema
-- Run this in: Supabase Dashboard → SQL Editor → New query
-- ============================================================

-- Profile table (extends Supabase's built-in auth.users)
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text,
  name text default 'ADVENTURER',
  level text,                          -- zero / kana / kanji / advanced
  lang text default 'en',              -- en / es
  plan text default 'free',            -- free / premium
  streak int default 0,
  xp int default 0,
  mochi_coins int default 0,
  avatar_url text,
  -- ── Paddle billing (source of truth = paddle-webhook Edge Function) ──
  paddle_customer_id text,             -- ctm_...
  paddle_subscription_id text,         -- sub_...
  billing_cycle text,                  -- monthly / annual
  subscription_status text,            -- active / past_due / canceled
  premium_start timestamptz,
  premium_renew timestamptz,           -- current period end / next bill date
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Safe to re-run on an existing project: add the billing columns if missing
alter table public.profiles add column if not exists paddle_customer_id text;
alter table public.profiles add column if not exists paddle_subscription_id text;
alter table public.profiles add column if not exists billing_cycle text;
alter table public.profiles add column if not exists subscription_status text;
alter table public.profiles add column if not exists premium_start timestamptz;
alter table public.profiles add column if not exists premium_renew timestamptz;

-- Row Level Security: each user can only read/write their own row
alter table public.profiles enable row level security;

create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

create policy "Users can insert own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

-- Auto-create a profile row whenever a new auth user signs up
-- (covers both email/password signup AND Google OAuth signup)
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, name)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'name', split_part(new.email, '@', 1))
  )
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Storage bucket for profile photos (avatars)
insert into storage.buckets (id, name, public)
values ('avatars', 'avatars', true)
on conflict (id) do nothing;

create policy "Avatar images are publicly accessible"
  on storage.objects for select
  using (bucket_id = 'avatars');

create policy "Users can upload their own avatar"
  on storage.objects for insert
  with check (bucket_id = 'avatars' and auth.uid()::text = (storage.foldername(name))[1]);

create policy "Users can update their own avatar"
  on storage.objects for update
  using (bucket_id = 'avatars' and auth.uid()::text = (storage.foldername(name))[1]);
