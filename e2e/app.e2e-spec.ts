import { Adv.Sess1assign2Page } from './app.po';

describe('adv.sess1assign2 App', () => {
  let page: Adv.Sess1assign2Page;

  beforeEach(() => {
    page = new Adv.Sess1assign2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
