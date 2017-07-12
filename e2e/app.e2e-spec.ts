import { ActivitiesPage } from './app.po';

describe('activities App', () => {
  let page: ActivitiesPage;

  beforeEach(() => {
    page = new ActivitiesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
