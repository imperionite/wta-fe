import { showToast } from "./toastHelper.js";
import { validateEmail } from "./validators.js";

const API_BASE = window.APP_CONFIG?.API_BASE;

// Token management
export function getAuthToken() {
  return localStorage.getItem("authToken");
}

export function setAuthToken(token, user) {
  localStorage.setItem("authToken", token);
  localStorage.setItem("userData", JSON.stringify(user));
}

export function clearAuthToken() {
  localStorage.removeItem("authToken");
  localStorage.removeItem("userData");
}

export function isAuthenticated() {
  const token = getAuthToken();
  if (!token) return false;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.exp * 1000 > Date.now();
  } catch {
    return false;
  }
}

export function getUserData() {
  const userData = localStorage.getItem("userData");
  return userData ? JSON.parse(userData) : null;
}

// Update navbar UI
function updateUILoggedIn(user) {
  document.getElementById("userProfileNav")?.classList.remove("d-none");
  document.getElementById("loginNav")?.classList.add("d-none");
  document.getElementById("offcanvasUserProfile")?.classList.remove("d-none");
  document.getElementById("offcanvasLoginNav")?.classList.add("d-none");

  document.getElementById("userEmailNav").textContent = user.email;
  document.getElementById("offcanvasUserEmail").textContent = user.email;
}

function updateUILoggedOut() {
  document.getElementById("userProfileNav")?.classList.add("d-none");
  document.getElementById("loginNav")?.classList.remove("d-none");
  document.getElementById("offcanvasUserProfile")?.classList.add("d-none");
  document.getElementById("offcanvasLoginNav")?.classList.remove("d-none");
}

// Auth handlers
async function handleLogin(form) {
  const formData = new FormData(form);
  const email = formData.get("email");
  const password = formData.get("password");

  if (!validateEmail(email)) {
    showToast("Please enter a valid email.", "error");
    return false;
  }

  try {
    const response = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      setAuthToken(data.token, data.user);
      updateUILoggedIn(data.user);
      bootstrap.Modal.getInstance(document.getElementById("authModal")).hide();
      showToast(`Welcome back, ${data.user.email}!`);
      return true;
    } else {
      showToast(data.message || "Login failed", "error");
      return false;
    }
  } catch (error) {
    showToast("Network error. Please try again.", "error");
    return false;
  }
}

async function handleRegister(form) {
  const formData = new FormData(form);
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  if (password !== confirmPassword) {
    showToast("Passwords do not match.", "error");
    return false;
  }

  try {
    const response = await fetch(`${API_BASE}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      showToast("Registration successful! Please login.");
      // Switch to login tab
      document.getElementById("switchToLogin")?.click();
      return true;
    } else {
      showToast(data.message || "Registration failed", "error");
      return false;
    }
  } catch (error) {
    showToast("Network error. Please try again.", "error");
    return false;
  }
}

// Event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Initialize auth state
  if (isAuthenticated()) {
    const user = getUserData();
    updateUILoggedIn(user);
  }

  // Login form
  document
    .getElementById("loginForm")
    ?.addEventListener("submit", function (e) {
      e.preventDefault();
      handleLogin(this);
    });

  // Register form
  document
    .getElementById("registerForm")
    ?.addEventListener("submit", function (e) {
      e.preventDefault();
      handleRegister(this);
    });

  // Toggle between login/register
  document
    .getElementById("switchToLogin")
    ?.addEventListener("click", function () {
      document.getElementById("authModal").querySelector("form").id =
        "loginForm";
      document.querySelector("#authModalLabel").textContent =
        "🔐 Login to Book";
      document.getElementById("authPassword").required = true;
      document.getElementById("confirmPassword")?.remove();
      document.querySelector("#authModal .modal-footer .btn-link").textContent =
        "Create one here";
      document.querySelector("#authModal .modal-footer .btn-link").id =
        "switchToRegister";
    });

  document
    .getElementById("switchToRegister")
    ?.addEventListener("click", function () {
      const modal = document.getElementById("authModal");
      const form = modal.querySelector("form");
      form.id = "registerForm";

      // Add confirm password field
      let confirmField = document.getElementById("confirmPassword");
      if (!confirmField) {
        confirmField = document.createElement("div");
        confirmField.className = "mb-3";
        confirmField.innerHTML = `
        <label for="confirmPassword" class="form-label fw-semibold">Confirm Password</label>
        <input type="password" class="form-control" id="confirmPassword" name="confirmPassword" 
               placeholder="Repeat your password" required />
        <div class="invalid-feedback">Passwords do not match.</div>
      `;
        document
          .getElementById("authPassword")
          .parentNode.parentNode.insertAdjacentElement(
            "afterend",
            confirmField,
          );
      }

      document.querySelector("#authModalLabel").textContent =
        "👤 Create Account";
      document.querySelector("#authModal .modal-footer .btn-link").textContent =
        "Login here";
      document.querySelector("#authModal .modal-footer .btn-link").id =
        "switchToLogin";
    });

  // Logout buttons
  document.getElementById("logoutBtn")?.addEventListener("click", function () {
    clearAuthToken();
    updateUILoggedOut();
    showToast("Logged out successfully");
  });

  document
    .getElementById("offcanvasLogoutBtn")
    ?.addEventListener("click", function () {
      clearAuthToken();
      updateUILoggedOut();
      showToast("Logged out successfully");
      bootstrap.Offcanvas.getInstance(
        document.getElementById("offcanvasNav"),
      ).hide();
    });
});

// Global access
window.auth = { isAuthenticated, getAuthToken };
