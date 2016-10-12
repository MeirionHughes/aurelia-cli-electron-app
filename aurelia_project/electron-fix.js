define("electron", ['exports'], function (exports) {
  if (window.nodeRequire) {
    const electron = window.nodeRequire("electron");

    exports["default"] = electron;

    for (let key in electron) {
      exports[key] = electron[key];
    }
  }
});
