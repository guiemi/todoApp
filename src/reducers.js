export const INITIAL_TODOS = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
  {
    id: 3,
    title: "Todo 3",
    complete: false,
  },
];

export const reducer = (state = INITIAL_TODOS, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    case "INPUT":
      return state;
    case "ADD":
      return [
        ...state,
        {
          id: state.length + 1,
          title: action.title,
          complete: false,
        },
      ];
    default:
      return state;
  }
};
