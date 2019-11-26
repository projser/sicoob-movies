export const LIST_GENRES_LOADING = 'LIST_GENRES_LOADING';
export const LIST_GENRES_COMPLETE = 'LIST_GENRES_COMPLETE';

export const listGenresLoading = () => ({
  type: LIST_GENRES_LOADING,
});

export const listGenresComplete = (genres) => ({
  type: LIST_GENRES_COMPLETE,
  genres,
});

export const listGenres = () => async (dispatch) => {
  dispatch(listGenresLoading());
  const response = await fetch(
    `http://api.themoviedb.org/3/genre/movie/list?api_key=85db0997e1f5569002d475f0f4ed9325`,
  );
  const result = await response.json();
  dispatch(listGenresComplete(result));
};
