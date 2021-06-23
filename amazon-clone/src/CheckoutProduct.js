import React from 'react';
import "./CheckoutProduct.css";
import {useStateValue} from "./StateProvider";

function CheckoutProduct({id, title, rating, price, image}) {
    const [{basket}, dispatch] = useStateValue();
    console.log(id, title, rating, price, image);
    const removeFromBasket = ()=>{
        // logic to remove from basket.
        dispatch({
            type: 'REMOVE_FROM_BASKET', 
            item: {
                id:id,
            }
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt=""/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) =>(
                            <p>⭐</p>
                        ))
                    }
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
