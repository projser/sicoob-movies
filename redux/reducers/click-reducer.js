const initialState = {
  newValue: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CLICK_UPDATE_VALUE':
      return {
        ...state,
        newValue: action.newValue,
      };
    default:
      return state;
  }
};
