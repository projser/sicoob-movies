import reducer from './movies-reducer';
import * as actions from '../actions/movies-actions';

describe('Movies Reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        loading: true,
        loadingNewPage: false,
        loadingGetMovie: false,
        movies: [],
        error: null,
        currentPage: 1,
        shouldAddState: true,
        currentMovie: {},
      }
    )
  });

  it('should return an state where add new page is false and its loading a new page', () => {
    expect(
      reducer({}, {
        type: actions.MOVIES_LOADING_NEW_PAGE,
      })
    ).toEqual(
      {
        loadingNewPage: true,
        shouldAddState: false,
      }
    )
  });

  it('should return data of the movies', () => {
    const movies = [ 'data boes here' ];
    expect(
      reducer({
        movies: [],
      }, {
        type: actions.ADD_MOVIE_PAGE,
        currentPage: 1,
        movies,
      })
    ).toEqual(
      {
        loadingNewPage: false,
        currentPage: 1,
        movies,
        shouldAddState: true,
      }
    )
  });
});