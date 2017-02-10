import { MywinesPage } from './app.po';

describe('mywines App', function() {
  let page: MywinesPage;

  beforeEach(() => {
    page = new MywinesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
