const textarea = document.querySelector(".contact-form-textarea");

const autosize = () => {
  const newTextAreaHeight = "height:" + textarea.scrollHeight + "px";
  // Timeout debounces it from being too jarring
  setTimeout(() => {
    textarea.style.cssText = newTextAreaHeight;
  }, 100);
};

textarea.addEventListener("keyup", autosize);
