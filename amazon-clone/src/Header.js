import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
// material ui imports
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useStateValue} from "./StateProvider";

function Header() {
    const [{ basket }, dispatch] = useStateValue();
    console.log(basket)
    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo" alt="amazon__logo" src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"></img>
            </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text"></input>
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello Vedant</span>
                        <span className="header__optionLineTwo">Sign in</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
            </div>
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingCartIcon/>
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                </div>
            </Link>
        </nav>
    )
}

export default Header
