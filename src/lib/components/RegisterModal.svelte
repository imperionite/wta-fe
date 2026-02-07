<script>
  import { createEventDispatcher } from 'svelte';
  import { register } from '$lib/api/auth';
  import { user, accessToken } from '$lib/stores/auth';
  import { showToast } from '$lib/stores/toast';

  const dispatch = createEventDispatcher();
  let email = '';
  let password = '';
  let error = '';

  async function submit() {
    error = '';
    try {
      const data = await register(email, password);
      accessToken.set(data.access);
      user.set(data.user);
      dispatch('close');

      // Show success toast
      showToast(`Welcome ${data?.user?.email}`, "success");
    } catch (e) {
      error = e.message;

      showToast(error, 'error');
    }
  }
</script>

<div class="modal-backdrop show"></div>

<div class="modal show d-block">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-dark">Register</h5>
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <button class="btn-close" on:click={() => dispatch('close')}></button>
      </div>

      <div class="modal-body">
        <input
          class="form-control mb-2"
          placeholder="Email"
          bind:value={email}
        />
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          bind:value={password}
        />
      </div>

      <div class="modal-footer">
        <button class="btn btn-secondary" on:click={() => dispatch('close')}>
          Cancel
        </button>
        <button class="btn btn-danger" on:click={submit}>
          Register
        </button>
      </div>
    </div>
  </div>
</div>
