document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "BSIT-2A" && password === "123456") {
      window.location.href = "index.html";
    } else {
      alert('Invalid username or password. Please try again.');
    }
  });

  function myFunction() {
    var p = document.getElementById("password");
    if (p.type === "password") {
      p.type = "text";
    } else {
      p.type = "password";
    }
  }