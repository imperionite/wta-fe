import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const storedUser = browser ? localStorage.getItem('user') : null;
const storedToken = browser ? localStorage.getItem('access') : null;

export const user = writable(storedUser ? JSON.parse(storedUser) : null);
export const accessToken = writable(storedToken || null);
export const isAuthenticated = writable(!!storedToken);

// Persist only in browser
if (browser) {
  user.subscribe((value) => {
    if (value) {
      localStorage.setItem('user', JSON.stringify(value));
    } else {
      localStorage.removeItem('user');
    }
  });

  accessToken.subscribe((value) => {
    if (value) {
      localStorage.setItem('access', value);
      isAuthenticated.set(true);
    } else {
      localStorage.removeItem('access');
      isAuthenticated.set(false);
    }
  });
}
