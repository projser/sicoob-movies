import API_URL from '../../settings';

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
    `${API_URL}genres`,
  );
  const result = await response.json();
  dispatch(listGenresComplete(result));
};
