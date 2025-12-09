document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  if (username === "admin@admin.com" && password === "Test@123") {
    alert("Login successful!");
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "./home.html";
  } else {
    alert("Invalid username or password.");
    localStorage.setItem("isLoggedIn", "false");
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  }
});
