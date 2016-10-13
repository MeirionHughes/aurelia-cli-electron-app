import { bindable } from 'aurelia-framework';

export class Page {
  constructor(public header: string = "", public content: string = "") {
  }

  canClose(): Promise<boolean> {
    return Promise.resolve(true);
  }
}
