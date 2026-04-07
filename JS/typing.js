if (!window.typingLoaded) {
  window.typingLoaded = true;

  const text = "GitPeek";
  const element = document.getElementById("typing-text");

  let index = 0;

  function type() {
    if (!element) return;

    if (index < text.length) {
      element.innerHTML += text[index];
      index++;
      setTimeout(type, 120);
    } else {
      // 👇 добавляем курсор
      const cursor = document.createElement("span");
      cursor.classList.add("cursor");
      cursor.textContent = "_";
      element.appendChild(cursor);
    }
  }

  type();
}