export const initalItems = {
    items:[{
      description: "Play Video Games",
      completed: false,
      id: 123,
    },
    {
      description: "Tell off a 10 year old in game lobby",
      completed: false,
      id: 456,
    },
    {
      description: "Saviour the win",
      completed: false,
      id: 789,
    }]
}

export const todoReducer = (state, action) => {
    switch (action.type) {
    case "ADD_ITEM":
        return { ...state,  items: state.items.concat({ description: action.payload, completed: false, id: Date.now() })};
    case "CLEAR_COMPLETED":
    return {
      ...state,
      items: state.items.filter(({completed}) => !completed)
    };
      case "TOGGLE_TODO":
    return {
      ...state,
      items: state.items.map(item => (
        item.id === action.payload ? {...item, completed: !item.completed } : item
      ))
    };
      default:
        return state;
    }
  };