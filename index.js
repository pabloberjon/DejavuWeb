function startTyping() {
  const text = "Mishell Farinango";
  const typingText = document.getElementById("typing-text");
  let index = 0;

  function type() {
    typingText.textContent = text.slice(0, index);
    index++;
    if (index > text.length) {
      clearInterval(typingInterval);
      setTimeout(startTyping, 5000); // Repetir cada 3 segundos (ajusta el valor según tus necesidades)
    }
  }

  const typingInterval = setInterval(type, 150);
}

startTyping();

const rotateText = document.getElementById("rotate-text");
const texts = ["Portfolio", "Contacto", "Instagram", "Sobre mí"];
let index = 0;

function changeText() {
  rotateText.textContent = texts[index];
  index = (index + 1) % texts.length;
}

setInterval(changeText, 8000);

rotateText.addEventListener("click", function () {
  const currentText = rotateText.textContent;
  if (currentText === "Sobre mí") {
    rotateText.href = "sobreMi.html";
  } else if (currentText === "Portfolio") {
    rotateText.href = "portfolio.html";
  } else if (currentText === "Contacto") {
    rotateText.href = "contacto.html";
  } else if (currentText === "Instagram") {
    rotateText.href =
      "https://instagram.com/deja_vu_photographs?igshid=MTIyMzRjYmRlZg==";
    rotateText.target = "_blank";
  }
});
