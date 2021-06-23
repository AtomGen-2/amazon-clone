import React from 'react';
import {useStateValue} from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct"

function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <img className="checkout__ad" src="http://static-news.moneycontrol.com/static-mcnews/2017/08/amazon-e1502869599765.png" alt=""/>
            {basket?.length === 0 ? (
                <div>
                    <h2>Your shopping cart is empty</h2>
                    <p>You have no items in your basket!</p>
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title">Your shoppping Basket</h2>
                    {/* list out all the checkout products */}
                    {basket?.map(item => (
                        <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                    ))
                    })
                </div>
            )}
        </div>
    )
}

export default Checkout
