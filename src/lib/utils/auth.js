import { get } from "svelte/store";
import { accessToken } from "$lib/stores/auth";

export function requireToken() {
  const token = get(accessToken);
  if (!token) throw new Error("Authentication required");
  return token;
}
