<script>
  import { onMount, tick } from "svelte";
  import { goto } from "$app/navigation";
  import {
    accessToken,
    user,
    isAuthenticated,
    authUpdated,
  } from "$lib/stores/auth";

  onMount(async () => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (!token) {
      goto("/");
      return;
    }

    // Clean URL query
    window.history.replaceState({}, document.title, "/");

    try {
      // Persist token in store
      accessToken.set(token);
      isAuthenticated.set(true);

      // Fetch user profile
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE}/users/profile`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      if (!res.ok) throw new Error("Failed to fetch profile");

      const profile = await res.json();
      user.set(profile);
      
      // Redirect to home page with full refresh
      window.location.href = "/";
    } catch (err) {
      console.error("OAuth error:", err);

      accessToken.set(null);
      user.set(null);
      isAuthenticated.set(false);

      goto("/");
    }
  });
</script>
