(function () {
  function detect_IE() {
    return window.navigator.userAgent.match(/MSIE|Trident/) !== null;
  }

  // if (detect_IE()) {

  // Create the banner
  var warning = document.createElement('div');
  warning.id += 'ie-warning';
  // Append to the body
  document.body.appendChild(warning);

  // }
})();
