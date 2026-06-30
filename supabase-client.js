/* ============================================================
   SUPABASE CLIENT — Road to Japan
   Loads the Supabase JS SDK from a CDN (no build step needed)
   and exposes a shared client + auth/profile helpers as `RTJAuth`.
   ============================================================ */

const SUPABASE_URL = 'https://bskvxjlbywangxdiqhfi.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJza3Z4amxieXdhbmd4ZGlxaGZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI3ODAwMTksImV4cCI6MjA5ODM1NjAxOX0.Y3HpuXvOI0YAx0LSyJibRehS3LQo9wjCEH-SKaL8gWc';

(function loadSupabase() {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js';
  script.onload = initRTJAuth;
  document.head.appendChild(script);
})();

function initRTJAuth() {
  const client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  window.RTJAuth = {
    client,

    isConfigured() {
      return !SUPABASE_URL.includes('YOUR-PROJECT-REF');
    },

    async signUpWithEmail(email, password) {
      const { data, error } = await client.auth.signUp({ email, password });
      if (error) throw error;
      return data;
    },

    async signInWithEmail(email, password) {
      const { data, error } = await client.auth.signInWithPassword({ email, password });
      if (error) throw error;
      return data;
    },

    async signInWithGoogle() {
      // Build the redirect from the current directory (not just origin) so this
      // still works under a GitHub Pages project path like /road-to-japan/.
      const dir = window.location.pathname.replace(/[^/]*$/, '');
      const { data, error } = await client.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: window.location.origin + dir + 'auth.html?signup=1' },
      });
      if (error) throw error;
      return data; // browser will redirect to Google, then back here
    },

    async signOut() {
      await client.auth.signOut();
    },

    async getSession() {
      const { data: { session } } = await client.auth.getSession();
      return session;
    },

    async getProfile() {
      const session = await this.getSession();
      if (!session) return null;
      const { data, error } = await client
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();
      if (error) { console.error('[RTJAuth] getProfile error:', error); return null; }
      return data;
    },

    async updateProfile(fields) {
      const session = await this.getSession();
      if (!session) throw new Error('Not signed in');
      const { error } = await client
        .from('profiles')
        .update({ ...fields, updated_at: new Date().toISOString() })
        .eq('id', session.user.id);
      if (error) throw error;
    },

    async uploadAvatar(file) {
      const session = await this.getSession();
      if (!session) throw new Error('Not signed in');
      const ext = file.name.split('.').pop();
      const path = `${session.user.id}/avatar.${ext}`;
      const { error: uploadError } = await client.storage
        .from('avatars')
        .upload(path, file, { upsert: true });
      if (uploadError) throw uploadError;
      const { data } = client.storage.from('avatars').getPublicUrl(path);
      const url = `${data.publicUrl}?t=${Date.now()}`;
      await this.updateProfile({ avatar_url: url });
      return url;
    },
  };

  window.dispatchEvent(new Event('rtjauth:ready'));
}
