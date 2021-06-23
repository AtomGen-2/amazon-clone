import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText = {(value) => (
                <>
                    <p>
                        Subtotal ({basket.length} items) : <strong>{`$0`}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox"/>This order contains a gift option!
                    </small>
                </>
            )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandsSeperator={true}
                prefix={"₹"}
            />
            {/* price */}
            <button className="subtotal__buttton">Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
