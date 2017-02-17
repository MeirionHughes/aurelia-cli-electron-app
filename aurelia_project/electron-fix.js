define('electron', ['exports'], function (exports) {
  if (window.nodeRequire) {
    const electron = window.nodeRequire("electron");

    exports["default"] = electron;

    Object.keys(electron).forEach(function _eachElectronKey(electronKey) {
      exports[electronKey] = electron[electronKey];
    });
  }
});
