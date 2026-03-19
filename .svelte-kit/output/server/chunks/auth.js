import { w as writable } from "./index.js";
const user = writable(null);
const accessToken = writable(null);
const isAuthenticated = writable(false);
const authUpdated = writable(0);
export {
  authUpdated as a,
  accessToken as b,
  isAuthenticated as i,
  user as u
};
