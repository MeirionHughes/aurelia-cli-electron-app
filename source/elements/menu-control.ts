import { customElement, bindable } from 'aurelia-framework';

@customElement("menu-control")
export class MenuControl
{
  @bindable items;
}
