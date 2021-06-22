import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img 
            src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-2x._CB658860139_.jpg" 
            alt="imageAmazon" 
            className="home__image">
            </img>
            {/* product id, title, rating, image */}
            <div className="home__row">
                <Product 
                id="123" 
                title="Pyjama Profit" 
                rating={4} price={399} 
                image="https://m.media-amazon.com/images/I/41QiPydPZCL.jpg"
                />
                <Product 
                id="123" 
                title="Intelligent Investor by Benjamin Franklin: How to be a pro investor and kill the Wall Street!" 
                rating={4} price={399} 
                image="https://m.media-amazon.com/images/I/91+t0Di07FL._AC_UY218_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                id="123" 
                title="Oculus Rift" 
                rating={4} price={399} 
                image="https://images-na.ssl-images-amazon.com/images/I/31MPSDnQmUL.jpg"
                />
                <Product 
                id="123" 
                title="Pyjama Profit" 
                rating={4} price={399} 
                image="https://images-na.ssl-images-amazon.com/images/I/51IIMW6-TbL.jpg"
                />
                <Product 
                id="123" 
                title="Lenovo Flex 5 14 2-in-1 Laptop, 14.0 FHD  Touch  AMD Ryzen AMD Radeon Graphics, Digital Pen Included, Win 10, 81X20005US, Graphite Grey" 
                rating={3} price={1000000} 
                image="https://images-na.ssl-images-amazon.com/images/I/41pk3KgbeRL.jpg"
                />
            </div>
        </div>
    )
}

export default Home
