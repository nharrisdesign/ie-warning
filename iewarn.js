(function () {
  function detect_IE() {
    return window.navigator.userAgent.match(/MSIE|Trident/) !== null;
  }

  if (detect_IE()) {
    // Create the banner
    var warning = document.createElement('div');
    warning.id += 'ie-warning';
    // Add some styles
    warning.style.display = 'block';
    warning.style.position = 'fixed';
    warning.style.bottom = '0';
    warning.style.left = '0';
    warning.style.width = '100%';
    warning.style.padding = '20px';
    warning.style.background = '#f03e3e';
    warning.style.color = '#ffffff';
    warning.style.fontFamily = 'sans-serif';
    warning.style.textAlign = 'center';
    // Add the text
    warning.innerHTML =
      '<h2>Your browser is out of date and no longer supported by this website!</h2>';
    warning.innerHTML +=
      '<p>Please update to a modern broswer such as <a href="https://www.google.com/intl/en_us/chrome/">Chrome</a>, <a href="https://www.mozilla.org/en-GB/firefox/new/">Firefox</a>, or <a href="https://www.microsoft.com/en-us/edge">Edge</a>.</p>';

    // Append to the body
    document.body.appendChild(warning);
  }
})();
