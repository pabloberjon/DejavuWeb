const rotateText = document.getElementById("rotate-text");
const mainArticle = document.querySelector("body");
const texts = ["Portfolio", "Contacto", "Sobre mí"];
let index = 0;

function changeText() {
  rotateText.textContent = texts[index];
  const currentText = rotateText.textContent;

  if (currentText === "Sobre mí") {
    mainArticle.style.backgroundImage = "url('img/light1.jpeg')";
    rotateText.href = "sobreMi.html";
  } else if (currentText === "Portfolio") {
    mainArticle.style.backgroundImage = "url('img/PaisajePortada.jpeg')";
    rotateText.href = "portfolio.html";
  } else if (currentText === "Contacto") {
    mainArticle.style.backgroundImage = "url('img/LightpaintingPortada.jpeg')";
    rotateText.href = "contacto.html";
  }

  index = (index + 1) % texts.length;
}

function startTyping() {
  const text = "Mishell Farinango";
  const typingText = document.getElementById("typing-text");
  let index = 0;

  function type() {
    typingText.textContent = text.slice(0, index);
    index++;
    if (index > text.length) {
      clearInterval(typingInterval);
      setTimeout(startTyping, 8000); // Repetir cada 8 segundos (ajusta el valor según tus necesidades)
    }
  }

  const typingInterval = setInterval(type, 150);
}

startTyping();

setInterval(changeText, 8000); // Ajusta el intervalo de cambio de texto
