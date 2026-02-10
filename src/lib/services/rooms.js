import { API_BASE } from "$lib/api/config.js";

const API_URL = `${API_BASE}/rooms`;

/** Get all rooms (no filters, just a simple fetch) */
export async function getRooms() {
  try {
    const res = await fetch(API_URL); 
    if (!res.ok) throw new Error("Failed to fetch rooms");

    return await res.json();
  } catch (error) {
    console.error("Rooms API error:", error);
    throw error;
  }
}

/** Get a single room by ID */
export async function getRoomById(id) {
  try {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) throw new Error("Failed to fetch room");

    return await res.json();
  } catch (error) {
    console.error("Room API error:", error);
    throw error;
  }
}

/** Get available rooms for specific type + dates */
export async function getAvailableRooms(type, checkInDate, checkOutDate) {
  try {
    const params = new URLSearchParams({
      type,
      checkInDate,
      checkOutDate,
    });

    const res = await fetch(`${API_URL}/available?${params}`);
    if (!res.ok) throw new Error("No rooms available for the selected dates");

    return await res.json();
  } catch (error) {
    console.error("Available rooms error:", error);
    throw error;
  }
}
