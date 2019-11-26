export const LIST_MOVIES_LOADING = 'LIST_MOVIES_LOADING';
export const LIST_MOVIES_COMPLETED = 'LIST_MOVIES_COMPLETED';
export const LIST_MOVIES_ERROR = 'LIST_MOVIES_ERROR';
export const ADD_MOVIE_PAGE = 'ADD_MOVIE_PAGE';

export const listMoviesLoading = () => ({
  type: LIST_MOVIES_LOADING,
});

export const listCompleted = (movies) => ({
  type: LIST_MOVIES_COMPLETED,
  movies,
});

export const addNewMovies = (currentPage, movies) => ({
  type: ADD_MOVIE_PAGE,
  movies,
  currentPage,
});

export const listMovies = () => async (dispatch) => {
  dispatch(listMoviesLoading());
  const response = await fetch(
    'http://api.themoviedb.org/3/movie/popular?api_key=85db0997e1f5569002d475f0f4ed9325',
  );
  const result = await response.json();
  dispatch(listCompleted(result.results));
};

export const addMovies = (oldPage) => async (dispatch) => {
  dispatch(listMoviesLoading());
  const page = oldPage + 1;
  const response = await fetch(
    `http://api.themoviedb.org/3/movie/popular?page=${page}&api_key=85db0997e1f5569002d475f0f4ed9325`,
  );
  const result = await response.json();
  dispatch(addNewMovies(page, result.results));
};
