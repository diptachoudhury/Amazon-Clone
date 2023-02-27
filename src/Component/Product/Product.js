import React from 'react';
import { useStateValue } from '../../StateProvider';
import "./Product.css";



function Product({id,title,price,image,rating}) {
  
  const [{},dispatch] = useStateValue(); 
  
  
  const addToBasket=()=>{
      //ADD ITEM TO BASKET
      dispatch({
        type: 'ADD_TO_BASKET',
        item: {
          id:id,
          title:title,
          image:image,
          price:price,
          rating:rating
        }
      })

  };

  
  
  
  
  return (
    <div className ="product">
      <div className='product__info'>
      <p>{title}</p> 
      <p className="product__price">
        <small>₹</small>
        <strong>{price}</strong>
      </p>
      <div className="product__rating">
        {/* create an array of rating no of elements, fill it withnull values, map (_ is basically that we don't care about the value )it that times with stars */}
        {Array(rating)
          .fill()
          .map((_)=>(
            <p>⭐</p>
          ))}
      </div>
      </div>
        
        <img src={image} alt="product_image"/>
        <button onClick={addToBasket}>Add to basket</button>
      </div>
  )
}

export default Product
