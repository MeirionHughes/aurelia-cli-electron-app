import { remote } from 'electron';
import { I18N } from 'aurelia-i18n';
import { inject } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';


@inject(I18N)
export class App {
  private i18n: I18N;

  public pages = [
    {
      title: "page1",
      viewModel: "./pages/example-page",
      model: "hello"
    },
    {
      title: "page2",
      viewModel: "./pages/example-page",
      model: "world"
    }
  ]

  constructor(i18n: I18N) {
    this.i18n = i18n;
  }

  sayHello() {
    remote.dialog.showMessageBox({
      message: this.i18n.tr("test"),
      buttons: ["OK"]
    });
  }
}
