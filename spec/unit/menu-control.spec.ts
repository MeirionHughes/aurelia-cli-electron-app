import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';

describe('MenuControl', () => {
  let component;
  let menu;

  beforeEach(() => {
    menu = [
      {
        title: "Edit",
        items: [
          {
            title: "Cut"
          },
          {
            title: "Copy"
          },
          {
            title: "Paste"
          }
        ]
      }
    ];
    component = StageComponent
      .withResources('elements/menu-control')
      .inView('<menu-control items.bind="menu"></menu-control>')
      .boundTo({ menu: menu });
  });

  it('should bind the entire menu', done => {
    component.create(bootstrap).then(() => {
      expect(component.viewModel.items).toBe(menu);
      done();
    });
  });

  afterEach(() => {
    component.dispose();
  });
});
