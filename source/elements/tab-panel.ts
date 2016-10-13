import {bindable} from 'aurelia-framework';

export class TabPanelCustomElement {
  @bindable pages = [];
  @bindable selectedIndex = 0;
}
