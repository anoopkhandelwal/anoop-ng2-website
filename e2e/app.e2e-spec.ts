import { Ng2WebFbPage } from './app.po';

describe('ng2-web-fb App', function() {
  let page: Ng2WebFbPage;

  beforeEach(() => {
    page = new Ng2WebFbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
