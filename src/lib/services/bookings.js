// src/lib/services/bookings.js
import { get } from "svelte/store";
import { accessToken } from "$lib/stores/auth.js";
import { API_BASE } from "$lib/api/config.js";
import { requireToken } from "$lib/utils/auth";

const API_URL = `${API_BASE}/booking`;

/** Create booking with auth */
export async function createBooking(bookingData) {
  const token = requireToken()

  if (!token) {
    throw new Error("Authentication required");
  }

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(bookingData),
    });

    if (!res.ok) {
      let message = "Booking failed";
      try {
        const error = await res.json();
        message = error.message || message;
      } catch (_) {}
      throw new Error(message);
    }

    return await res.json();
  } catch (error) {
    console.error("Booking error:", error);
    throw error;
  }
}
