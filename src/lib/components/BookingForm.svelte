<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { user, accessToken } from "$lib/stores/auth";
  import { showToast } from "$lib/stores/toast";
  import { createBooking } from "$lib/services/bookings";
  import { get } from "svelte/store";

  export let roomId;
  export let roomName;

  const dispatch = createEventDispatcher();

  let form = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    checkInDate: "",
    checkOutDate: "",
    adults: 1,
    children: 0,
    boardType: "Breakfast",
    note: "",
  };

  // 🔒 HARD AUTH GUARD
  onMount(() => {
    const currentUser = get(user);
    const token = get(accessToken);

    if (!currentUser || !token) {
      showToast("Please login to book a room", "error");
      dispatch("close");
    }
  });

  async function submit() {
    const currentUser = get(user);
    const token = get(accessToken);

    if (!currentUser || !token) {
      showToast("Your session expired. Please login again.", "error");
      dispatch("close");
      return;
    }

    if (!form.checkInDate || !form.checkOutDate) {
      showToast("Please select check-in and check-out dates", "error");
      return;
    }

    const bookingData = {
      room: roomId,
      checkInDate: form.checkInDate,
      checkOutDate: form.checkOutDate,
      adults: Number(form.adults),
      children: Number(form.children),
      boardType: form.boardType,
      note: form.note,
      firstName: form.firstName,
      lastName: form.lastName,
      phone: form.phone,
      email: form.email,
    };

    try {
      const res = await createBooking(bookingData);

      if (res?.success) {
        showToast("Booking successful 🎉", "success");
        dispatch("close");
      } else {
        showToast(res?.message || "Booking failed. Please try again.", "error");
      }
    } catch (err) {
      showToast(err.message || "Something went wrong", "error");
    }
  }
</script>

<div class="modal-backdrop show"></div>

<div class="modal show d-block" role="dialog" aria-modal="true">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Book {roomName}</h5>
        <button
          class="btn-close"
          aria-label="Close"
          on:click={() => dispatch("close")}
        />
      </div>

      <div class="modal-body">
        <div class="row g-3">
          <div class="col-md-6">
            <input class="form-control" placeholder="First name" bind:value={form.firstName} />
          </div>
          <div class="col-md-6">
            <input class="form-control" placeholder="Last name" bind:value={form.lastName} />
          </div>
          <div class="col-md-6">
            <input class="form-control" placeholder="Phone" bind:value={form.phone} />
          </div>
          <div class="col-md-6">
            <input type="email" class="form-control" placeholder="Email" bind:value={form.email} />
          </div>
          <div class="col-md-6">
            <label class="form-label">Check-in</label>
            <input type="date" class="form-control" bind:value={form.checkInDate} />
          </div>
          <div class="col-md-6">
            <label class="form-label">Check-out</label>
            <input type="date" class="form-control" bind:value={form.checkOutDate} />
          </div>
          <div class="col-md-4">
            <label class="form-label">Adults</label>
            <input type="number" min="1" class="form-control" bind:value={form.adults} />
          </div>
          <div class="col-md-4">
            <label class="form-label">Children</label>
            <input type="number" min="0" class="form-control" bind:value={form.children} />
          </div>
          <div class="col-md-4">
            <label class="form-label">Board</label>
            <select class="form-select" bind:value={form.boardType}>
              <option>Breakfast</option>
              <option>Half-board</option>
            </select>
          </div>
          <div class="col-12">
            <textarea
              class="form-control"
              rows="3"
              placeholder="Special requests (optional)"
              bind:value={form.note}
            />
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button class="btn btn-secondary" on:click={() => dispatch("close")}>
          Cancel
        </button>
        <button class="btn btn-danger" on:click={submit}>
          Confirm Booking
        </button>
      </div>
    </div>
  </div>
</div>
