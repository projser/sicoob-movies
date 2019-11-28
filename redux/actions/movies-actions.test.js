import * as actions from './movies-actions'

describe('actions', () => {
  it('should create an action of type loading new page', () => {
    const expectedAction = {
      type: actions.MOVIES_LOADING_NEW_PAGE,
    }
    expect(actions.listMoviesNewPage()).toEqual(expectedAction)
  })
});