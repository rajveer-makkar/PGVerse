const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
if (isLoggedIn) {
  document.getElementById("login-out-btn").innerHTML = "Logout";
} else {
  // User is not logged in
  document.getElementById("login-out-btn").innerHTML = "Login";
}
