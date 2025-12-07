document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  let loginChecked = false;
  const username = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "admin@admin.com" && password === "Test@123") {
    alert("Login successful!");
    loginChecked = true;
    window.location.href = "./home.html"; // redirect if needed
  } else {
    alert("Invalid username or password.");
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  }
});
export { loginChecked };
