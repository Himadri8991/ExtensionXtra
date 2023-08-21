chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.font) {
    document.body.style.fontFamily = request.font;
  }
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.isEnabled) {
    const elements = document.querySelectorAll('[style*="color: red"]');
    for (const element of elements) {
      element.style.color = "blue";
    }
  } else {
    const elements = document.querySelectorAll('[style*="color: blue"]');
    for (const element of elements) {
      element.style.color = "red";
    }
  }
});
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.contrastValue) {
    const contrastValue = request.contrastValue;
    document.body.style.filter = `contrast(${contrastValue}%)`;
  }
});
const filters = {
  normal: "",
  protanopia:
    'url("https://www.toptal.com/designers/colorfilter/?url=https://www.google.com&filter=protanopia")',
  deuteranopia:
    'url("https://www.toptal.com/designers/colorfilter/?url=https://www.google.com&filter=deuteranopia")',
  tritanopia:
    'url("https://www.toptal.com/designers/colorfilter/?url=https://www.google.com&filter=tritanopia")',
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const filter = filters[request.filter];
  if (filter !== undefined) {
    document.body.style.filter = filter;
  }
});
