export const ADD_ITEM = "ADD_ITEM"
export const TOGGLE_ITEM = "TOGGLE_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const initialStates = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
};

export const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                item: action.payload, 
                completed: false, 
                id: Date.now()
            };
        case TOGGLE_ITEM:
            return(
              state.map(item => {
                if (item.id === action.payload){
                  return{...item, completed: !item.completed }
                }
                return todo;
              })
            )
        case REMOVE_ITEM:
            return (
                state.filter(item => {
                    item.id !== action.payload
                })
            );
        default:
            return state;
    };
};