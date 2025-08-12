function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("error-message");

  if (username === "" || password === "") {
    errorMessage.textContent = "Por favor, completa todos los campos.";
    errorMessage.style.color = "red";
    return;
  }

  // Ejemplo de validación simple
  if (username === "admin" && password === "1234") {
    errorMessage.style.color = "green";
    errorMessage.textContent = "Inicio de sesión exitoso ✅";
    setTimeout(() => {
      alert("Bienvenido " + username + "!");
      // Aquí puedes redirigir a otra página si quieres
      // window.location.href = "dashboard.html";
    }, 500);
  } else {
    errorMessage.style.color = "red";
    errorMessage.textContent = "Usuario o contraseña incorrectos ❌";
  }
}
