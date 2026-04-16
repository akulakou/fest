(function () {
  "use strict";

  var BTN_ID = "download-app-btn";

  function setHref(url) {
    var el = document.getElementById(BTN_ID);
    if (!el) {
      return;
    }
    el.href = url;
  }

  function run() {
    setHref(window.AF_GENERATED_URL.clickURL);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
