import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from '../StateProvider'
import  "./checkout.css";
import Subtotal from './Subtotal';

function Checkout() {
    const[{basket}] =useStateValue();


  return (
    <div className="checkout">
        <div className="checkout__left">
 
    {basket?.length===0?(
        <div>
            <h2>Your Shopping Basket is empty</h2>
            <p>
                You have no items in your basket. To buy click on "Add to Basket" next to the item
            </p>  
        </div>
        ):(
        <div>
            <h2 className="checkout__title">Your Shopping Basket</h2> 

            {/* List out all he checkout product */}
            {basket?.map((item) =>(
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                />    
            ))}

        </div>

        )}  
    
        </div>
        {basket.length>0 && (
            <div className="checkout_right">
                
                <Subtotal/>

            </div>


        )}
    
    
    
    </div>
  )
}

export default Checkout
