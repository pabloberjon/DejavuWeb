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
