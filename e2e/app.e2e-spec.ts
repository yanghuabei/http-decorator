import { HttpDecoratorPage } from './app.po';

describe('http-decorator App', function() {
  let page: HttpDecoratorPage;

  beforeEach(() => {
    page = new HttpDecoratorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
