import React from 'react';
import {useStateValue} from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
            <img className="checkout__ad" src="https://hotdealszone.com/wp-content/uploads/2017/11/no-cost-emi-amazon.jpg" alt=""/>
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
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal/>
                </div>
            )}
        </div>
    )
}

export default Checkout
