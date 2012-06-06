if ( !navigator.requestProfile ) {
  navigator.requestProfile = function (types, success, error) {
    if ( !Array.isArray(types) ) throw new Error('types is not an array');
    if ( typeof success !== 'function' ) throw new Error('invalid success callback');

    var callback = function (e) {
      window.removeEventListener('requestProfile.response', callback);

      if (e.detail) {
        success(e.detail);
      } else {
        if (typeof error === 'function') error();
      }
    };

    window.addEventListener('requestProfile.response', callback, false);

    var event = new CustomEvent('requestProfile', {detail: types});
    window.dispatchEvent(event);
  };
}