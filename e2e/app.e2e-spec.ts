import { Angular4Lab1Page } from './app.po';

describe('angular4-lab1 App', () => {
  let page: Angular4Lab1Page;

  beforeEach(() => {
    page = new Angular4Lab1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
