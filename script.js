document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent form submission for demo

  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let emailError = document.getElementById("emailError");
  let passwordError = document.getElementById("passwordError");

  let valid = true;

  // Reset errors
  emailError.textContent = "";
  passwordError.textContent = "";

  // Email validation
  if (!email.value.includes("@")) {
    emailError.textContent = "Please enter a valid email address.";
    valid = false;
  }

  // Password validation
  if (password.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters long.";
    valid = false;
  }

  if (valid) {
    alert("Login successful (demo)!");
    // Here you can redirect or handle real authentication
  }
});
