document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  const toggleCheckbox = document.getElementById("toggle");
  const fontSelector = document.getElementById("fontSelector");
  const textInput = document.getElementById("textInput");
  const textToSpeechButton = document.getElementById("textToSpeech");
  const speechToTextButton = document.getElementById("speechToText");
  const contrastSlider = document.getElementById("contrastSlider");
  const filterSelect = document.getElementById("filterSelect");

  function convertTextToSpeech() {
    const textNodes = document.querySelectorAll(
      "p, h1, h2, h3, h4, h5, h6, span, li, a"
    );
    const textContent = Array.from(textNodes)
      .map((node) => node.textContent)
      .join(" ");

    const speechSynthesis = window.speechSynthesis;
    const speechUtterance = new SpeechSynthesisUtterance(textContent);
    speechSynthesis.speak(speechUtterance);
  }

  fontSelector.addEventListener("change", function () {
    const selectedFont = fontSelector.value;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { font: selectedFont });
    });
  });
  toggleCheckbox.addEventListener("change", function () {
    const isEnabled = toggleCheckbox.checked;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tabId = tabs[0].id;
      chrome.tabs.sendMessage(tabId, { isEnabled });
    });
  });
  textToSpeechButton.addEventListener("click", function () {
    const text = textInput.value;
    chrome.runtime.sendMessage({ type: "textToSpeech", text: text });
  });

  speechToTextButton.addEventListener("click", function () {
    chrome.runtime.sendMessage({ type: "speechToText" });
  });
});
contrastSlider.addEventListener("input", () => {
  const contrastValue = contrastSlider.value;
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { contrastValue });
  });
});
filterSelect.addEventListener("change", () => {
  const selectedFilter = filterSelect.value;
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { filter: selectedFilter });
  });
});
