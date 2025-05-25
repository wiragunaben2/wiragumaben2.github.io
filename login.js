document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent default page reload

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // Simple hardcoded "authentication"
    const validEmail = "test@visitswiss.com";
    const validPassword = "swiss123";

    if (email === validEmail && password === validPassword) {
      alert("Login successful! Redirecting...");
      // Simulate redirect
      window.location.href = "/Hotels/index.html";
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });
});