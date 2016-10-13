import { remote } from 'electron';
import { Page } from './models/page';

export class App {
  message = 'Hello World!';
  pages = [
    new Page("page 1", "pages/example-page"),
  ];

  sayHello() {
    remote.dialog.showMessageBox({
      message: this.message,
      buttons: ["OK"]
    });
  }
}
