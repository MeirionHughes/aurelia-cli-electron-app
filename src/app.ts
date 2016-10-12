import { remote } from 'electron';

export class App {
  message = 'Hello World!';
  
  sayHello() {
    remote.dialog.showMessageBox({
      message: "The file has been saved! :-)",
      buttons: ["OK"]
    });
  }
}
