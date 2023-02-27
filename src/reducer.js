export const getBasketTotal =(basket)=>
    basket?.reduce((amount,item)=> item.price + amount, 0);


export const initialState = {
    basket: [],
    user:null,
};


const reducer=(state,action)=>{
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            //logic for adding item tobasket
            return {
                ...state,
                basket: [...state.basket,action.item]
            }
            
        case 'REMOVE_FROM_BASKET':
            //Logicfor Removing item from basket
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem)=> basketItem.id ===action.id);

            if(index >=0){
                //items exists in basket, remove it...
                newBasket.splice(index,1);
            }else{
                console.warn(`Can't remove product (id: ${action.id}) as it is not in Basket`)
            }
            
            
            
            return {
                ...state,
                basket: newBasket,
            };
            
        default:
            return state;        
    }
}

export default reducer;