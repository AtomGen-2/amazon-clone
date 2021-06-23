// how the data layer looks initially, when we havent added anything.
export const initialState = {
    basket: [],
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
// you are returning the state as it was, and the basket also as it was initially along with the updated basket elements.
            return {
                ...state, 
                basket: [...state.basket, action.item],
            }
        case 'REMOVE_FROM_BASKET':
            return { ...state }
            // logic to remove from basket
        default: 
            return state;
    }
}
export default reducer;