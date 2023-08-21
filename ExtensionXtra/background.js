chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type === "textToSpeech") {
    // Implement text-to-speech functionality using a TTS library or Web Speech API
  } else if (request.type === "speechToText") {
    // Implement speech-to-text functionality using the Web Speech API
  }
});
