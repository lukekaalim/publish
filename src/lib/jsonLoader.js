const loadAtUrl = (url) => (
  fetch(url).then(JSON.parse)
);
