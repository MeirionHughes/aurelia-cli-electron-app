# aurelia-cli-electron-app

requires:
  * nodejs 6
  * `npm install aurelia-cli -g`

run:
```
npm install
au run
```

test:

[The unit test require the app to be build](https://github.com/aurelia/cli/issues/370)
```
au build
```

Once the app is build, you may execute:

```
au test --watch
```
