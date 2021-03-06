// how the data layer looks initially, when we havent added anything.
export const initialState = {
    basket: [],
    user: null,
};

// get the price for the subtotal
// iterate through the basket (using the variable "basket"), get the item.price and keep adding it to the amount at each instance, starting with initial value=0;

export const getBasketTotaling = (basket) => (
    basket.reduce((amount, item) => item.price + amount, 0)
);

console.log("this is basketTotal", getBasketTotaling)

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_BASKET':
// you are returning the state as it was, and the basket also as it was initially along with the updated basket elements.
            return {
                ...state, 
                basket: [...state.basket, action.item],
            }
        case 'REMOVE_FROM_BASKET':
            console.log(action);
// cloning the basket!
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.item.id);
            if (index >= 0){
                // item exists in basket, remove it
                newBasket.splice(index, 1);
// splice basically goes to the "index" if found, and splices it by one, ie cuts just that index number and re returns the remaining
            }
            else{
                console.warn(`Cant remove product (id:${action.item.id}) as it is not in the basket`);
            }
            return { 
                ...state, 
                basket: newBasket,
            };
        case "SET_USER":
            return {
                ...state,
                user:action.user
            }
        default: 
            return state;
    }
}
export default reducer;