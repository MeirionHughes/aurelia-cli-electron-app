import { customElement, bindable } from 'aurelia-framework';

@customElement("tab-control")
export class TabControlCustomElement {
  @bindable items = [];
  @bindable selectedIndex = 0;
}
