const initialState = {
  todos: null,
  loading: true,
  error: null,
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todo: action.payload,
        loading: false,
      };

    case "TODO_ERROR":
      return {
        ...state,
        todo: null,
        loading: false,
        error: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}
