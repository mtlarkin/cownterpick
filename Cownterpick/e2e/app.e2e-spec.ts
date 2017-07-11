import { CownterpickPage } from './app.po';

describe('cownterpick App', () => {
  let page: CownterpickPage;

  beforeEach(() => {
    page = new CownterpickPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
