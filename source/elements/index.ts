import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources(['./window', './tab-control', './menu-control', './dock-panel']);
}
