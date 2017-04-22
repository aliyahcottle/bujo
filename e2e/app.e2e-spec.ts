import { Angularattack2017BujoPage } from './app.po';

describe('angularattack2017-bujo App', () => {
  let page: Angularattack2017BujoPage;

  beforeEach(() => {
    page = new Angularattack2017BujoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
