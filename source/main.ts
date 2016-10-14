import {Aurelia} from 'aurelia-framework'
import {I18N} from 'aurelia-i18n';
import {ValidationMessageProvider} from 'aurelia-validation';
import environment from './environment';
import * as Backend from 'i18next-xhr-backend';

//Configure Bluebird Promises.
//Note: You may want to use environment-specific configuration.
// Promise.config({
// 	warnings: {
// 		wForgottenReturn: false
// 	}
// });

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('elements');
  //aurelia.use.feature('resources');
  if (environment.debug) {
    aurelia.use.developmentLogging();
  }
  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }
  aurelia.use.plugin('aurelia-validation');
  // aurelia.use.plugin('aurelia-validatejs');
  aurelia.use.plugin('aurelia-i18n', (instance) => {
    // register backend plugin
    instance.i18next.use(Backend);

    // adapt options to your needs (see http://i18next.com/docs/options/)
    // make sure to return the promise of the setup method, in order to guarantee proper loading
    return instance.setup({
      backend: { // <-- configure backend settings
        loadPath: './locales/{{lng}}/{{ns}}.json' // <-- XHR settings for where to get the files from
      },
      //lng: 'es',
      attributes: ['t', 'i18n'],
      // ns: ['translation'],
      //defaultNS: 'translation',
      fallbackLng: 'en',
      debug: true
    });
  });

  const i18n = aurelia.container.get(I18N);
  ValidationMessageProvider.prototype.getMessage = function(key) {
    const translation = i18n.tr(`errorMessages.${key}`);
    return this.parser.parseMessage(translation);
  };

  ValidationMessageProvider.prototype.getDisplayName = function(propertyName) {
    return i18n.tr(propertyName);
  };

  aurelia.start().then(() => {return aurelia.setRoot()});
}
