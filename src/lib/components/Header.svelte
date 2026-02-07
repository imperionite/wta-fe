<script>
  import { user, isAuthenticated, accessToken } from '$lib/stores/auth';
  import LoginModal from '$lib/components/LoginModal.svelte';
  import RegisterModal from '$lib/components/RegisterModal.svelte';

  let showLogin = false;
  let showRegister = false;

  function handleLogout() {
    user.set(null);
    accessToken.set(null);
  }
</script>

<nav class="navbar navbar-expand-lg custom-glass-navbar">
  <div class="container navbar__container">
    <!-- Logo -->
    <a href="/" class="navbar__logo-link" aria-label="Skye Suites Home">
      <img
        src="/images/logo.png"
        alt="Skye Suites Logo"
        class="navbar__logo"
        loading="lazy"
      />
    </a>

    <!-- Hamburger -->
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasNav"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Desktop menu -->
    <div class="collapse navbar-collapse d-none d-lg-flex">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item"><a href="/" class="nav-link">Home</a></li>
        <li class="nav-item"><a href="/suites" class="nav-link">Suites</a></li>
        <li class="nav-item"><a href="/dining" class="nav-link">Dining</a></li>
        <li class="nav-item"><a href="/experience" class="nav-link">Experience</a></li>
        <li class="nav-item"><a href="/access" class="nav-link">Access</a></li>
      </ul>

      <!-- AUTH / BOOK -->
      <div class="ms-lg-3 d-flex align-items-center gap-2">
        {#if $isAuthenticated}
          <span class="text-light small d-none d-lg-inline">
            {$user.email}
          </span>
          <button class="btn btn-outline-light btn-sm" on:click={handleLogout}>
            Logout
          </button>
        {:else}
          <button
            class="btn btn-outline-light btn-sm"
            on:click={() => (showLogin = true)}
          >
            Login
          </button>
          <button
            class="btn btn-danger btn-sm"
            on:click={() => (showRegister = true)}
          >
            Register
          </button>
        {/if}

        <button
          class="btn btn-danger navbar__book-button"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#bookNowModal"
        >
          BOOK NOW
        </button>
      </div>
    </div>
  </div>
</nav>

<!-- Offcanvas (mobile) -->
<div
  class="offcanvas offcanvas-start"
  tabindex="-1"
  id="offcanvasNav"
>
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Menu</h5>
    <button class="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>

  <div class="offcanvas-body custom-vertical-center">
    <ul class="navbar-nav">
      <li class="nav-item"><a href="/" class="nav-link">Home</a></li>
      <li class="nav-item"><a href="/suites" class="nav-link">Suites</a></li>
      <li class="nav-item"><a href="/dining" class="nav-link">Dining</a></li>
      <li class="nav-item"><a href="/experience" class="nav-link">Experience</a></li>
      <li class="nav-item"><a href="/access" class="nav-link">Access</a></li>
    </ul>

    <div class="mt-3 d-grid gap-2">
      {#if !$isAuthenticated}
        <button class="btn btn-outline-secondary" on:click={() => showLogin = true}>
          Login
        </button>
        <button class="btn btn-danger" on:click={() => showRegister = true}>
          Register
        </button>
      {:else}
        <button class="btn btn-outline-danger" on:click={handleLogout}>
          Logout
        </button>
      {/if}

      <button
        class="btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target="#bookNowModal"
      >
        Book Now
      </button>
    </div>
  </div>
</div>

<!-- AUTH MODALS -->
{#if showLogin}
  <LoginModal on:close={() => (showLogin = false)} />
{/if}

{#if showRegister}
  <RegisterModal on:close={() => (showRegister = false)} />
{/if}
