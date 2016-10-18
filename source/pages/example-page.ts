import {bindable} from 'aurelia-framework';

export class ExamplePage
{  
  @bindable model;

  activate(model) {
    this.model = model;
  }  
}
