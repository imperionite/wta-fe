<script>
  import { toast } from "$lib/stores/toast";
</script>

{#if $toast}
  <div class="toast-container position-fixed top-0 end-0 p-3">
    <div class="toast show text-bg-{$toast.variant} border-0">
      <div class="d-flex">
        <div class="toast-body">
          {$toast.message}
        </div>
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <button
          class="btn-close btn-close-white me-2 m-auto"
          on:click={() => toast.set(null)}
        ></button>
      </div>
    </div>
  </div>
{/if}
