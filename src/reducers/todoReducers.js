const initialState = {
  data: null,
  loading: true,
  error: null,
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
      };

    case "GET_TODOS":
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case "CLEAR_GET_TODOS":
      return {
        ...state,
        data: null,
        loading: true,
      };

    case "TODO_ERROR":
      return {
        ...state,
        data: null,
        loading: false,
        error: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}
