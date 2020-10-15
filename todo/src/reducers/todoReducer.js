export const TOGGLE_ITEM = "TOGGLE_ITEM";
export const UPDATE_TODO = "UPDATE_TODO";

export const initialStates = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
};

export const todoReducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_ITEM:
            return {...state,};
        case UPDATE_TODO:
            return state;
        default:
            return state;
    };
};