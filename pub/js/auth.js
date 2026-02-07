import { showToast } from "./toastHelper.js";
import { validateEmail } from "./validators.js";

const API_BASE = window.APP_CONFIG?.API_BASE;

// --- Token management ---
export const auth = {
  getToken: () => localStorage.getItem("authToken"),
  setToken: (token, user) => {
    localStorage.setItem("authToken", token);
    localStorage.setItem("userData", JSON.stringify(user));
  },
  clearToken: () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
  },
  isAuthenticated: () => {
    const token = localStorage.getItem("authToken");
    if (!token) return false;
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.exp * 1000 > Date.now();
    } catch {
      return false;
    }
  },
  getUser: () => {
    const user = localStorage.getItem("userData");
    return user ? JSON.parse(user) : null;
  },
};

// --- UI Updates ---
function updateUILoggedIn(user) {
  document.getElementById("userProfileNav")?.classList.remove("d-none");
  document.getElementById("loginNav")?.classList.add("d-none");
  document.getElementById("userEmailNav") && (document.getElementById("userEmailNav").textContent = user.email);
}

function updateUILoggedOut() {
  document.getElementById("userProfileNav")?.classList.add("d-none");
  document.getElementById("loginNav")?.classList.remove("d-none");
}

// --- Form Validation ---
function validateForm(form, isRegister = false) {
  const email = form.querySelector("input[name='email']").value.trim();
  const password = form.querySelector("input[name='password']").value.trim();
  //const confirm = form.querySelector("input[name='confirmPassword']")?.value.trim();

  // if (!validateEmail(email)) {
  //   showToast("Please enter a valid email", "error");
  //   return false;
  // }

  if (password.length < 6) {
    showToast("Password must be at least 6 characters", "error");
    return false;
  }

  // if (isRegister && password !== confirm) {
  //   showToast("Passwords do not match", "error");
  //   return false;
  // }

  return { email, password };
}

// --- Auth Handlers ---
async function handleLogin(form) {
  const values = validateForm(form);
  if (!values) return;

  try {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const data = await res.json();
    if (res.ok) {
      auth.setToken(data.token, data.user);
      updateUILoggedIn(data.user);
      bootstrap.Modal.getInstance(document.getElementById("authModal")).hide();
      showToast(`Welcome back, ${data.user.email}!`);
    } else {
      showToast(data.message || "Login failed", "error");
    }
  } catch {
    showToast("Network error. Please try again.", "error");
  }
}

async function handleRegister(form) {
  const values = validateForm(form, true);
  if (!values) return;

  try {
    const res = await fetch(`${API_BASE}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const data = await res.json();
    if (res.ok) {
      showToast("Registration successful! Please login.");
      switchToLogin();
    } else {
      showToast(data.message || "Registration failed", "error");
    }
  } catch {
    showToast("Network error. Please try again.", "error");
  }
}

// --- Toggle Forms ---
export function switchToLogin() {
  document.getElementById("loginForm").classList.remove("d-none");
  document.getElementById("registerForm").classList.add("d-none");
  document.getElementById("authModalLabel").textContent = "🔐 Login to Book";
}

export function switchToRegister() {
  document.getElementById("loginForm").classList.add("d-none");
  document.getElementById("registerForm").classList.remove("d-none");
  document.getElementById("authModalLabel").textContent = "👤 Create Account";
}

// --- DOM Events ---
document.addEventListener("DOMContentLoaded", () => {
  if (auth.isAuthenticated()) updateUILoggedIn(auth.getUser());

  document.getElementById("loginForm")?.addEventListener("submit", e => {
    e.preventDefault();
    handleLogin(e.target);
  });

  document.getElementById("registerForm")?.addEventListener("submit", e => {
    e.preventDefault();
    handleRegister(e.target);
  });

  document.getElementById("switchToLogin")?.addEventListener("click", switchToLogin);
  document.getElementById("switchToRegister")?.addEventListener("click", switchToRegister);

  document.getElementById("logoutBtn")?.addEventListener("click", () => {
    auth.clearToken();
    updateUILoggedOut();
    showToast("Logged out successfully");
  });
});

// Make global
window.auth = auth;
window.switchToLogin = switchToLogin;
window.switchToRegister = switchToRegister;
