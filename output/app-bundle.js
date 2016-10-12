define('app',["require", "exports", 'electron'], function (require, exports, electron_1) {
    "use strict";
    var App = (function () {
        function App() {
            this.message = 'Hello World!';
        }
        App.prototype.sayHello = function () {
            electron_1.remote.dialog.showMessageBox({
                message: "The file has been saved! :-)",
                buttons: ["OK"]
            });
        };
        return App;
    }());
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", './environment'], function (require, exports, environment_1) {
    "use strict";
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration();
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('components/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
    }
    exports.configure = configure;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"app.css\"></require>\n  <h1>${message}</h1>\n  <button click.delegate=\"sayHello()\"> Speak</button>\n</template>\n"; });
define('text!app.css', ['module'], function(module) { module.exports = "body {\n  background-color: navajowhite; }\n"; });
//# sourceMappingURL=app-bundle.js.map