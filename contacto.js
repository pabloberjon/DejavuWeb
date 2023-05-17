const contactForm = document.getElementById("contact-form");
const emailInput = document.getElementById("email");

contactForm.addEventListener("submit", function (event) {
  if (!isEmailValid(emailInput.value)) {
    event.preventDefault(); // Evita enviar el formulario si el email no es válido
    alert("Por favor, introduce un correo electrónico válido.");
  }
});

function isEmailValid(email) {
  // Utiliza una expresión regular para validar el formato del correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
