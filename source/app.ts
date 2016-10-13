import { remote } from 'electron';

export class App {
  message = 'Hello World!';
  
  sayHello() {
    remote.dialog.showMessageBox({
      message: this.message,
      buttons: ["OK"]
    });
  }
}
