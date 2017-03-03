import { PorfolioPage } from './app.po';

describe('porfolio App', function() {
  let page: PorfolioPage;

  beforeEach(() => {
    page = new PorfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
