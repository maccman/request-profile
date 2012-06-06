chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
  chrome.experimental.infobars.show({tabId: sender.tab.id, path: 'infobar.html', height: 35}, function () {
    var infobar = chrome.extension.getViews({type: 'infobar'})[0];

    infobar.requestProfile(request, function (allow) {
      if (allow) {
        var response = {};

        request.types.forEach(function (type) {
          response[type] = localStorage[type] || null;
        });

        sendResponse(response);
      } else {
        sendResponse(false);
      }

      infobar.close();
    });
  });
});