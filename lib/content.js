window.addEventListener('requestProfile', function (e) {
  chrome.extension.sendRequest({types: e.detail, domain: location.host}, function(response) {
    var event = new CustomEvent('requestProfile.response', {detail: response});
    window.dispatchEvent(event);
  });
}, false);