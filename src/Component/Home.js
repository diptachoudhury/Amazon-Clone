import React from 'react';
import "./Home.css";
import Product from './Product/Product';

function Home() {
  return (
    <div className="home">
      <img 
      className="home__image"
        src="https://m.media-amazon.com/images/I/61gPOiG6YiL._SX3000_.jpg"
        alt=""
       /> 
    {/* Product id, title, price, rating, image */}
    {/* Product */}
      <div className="home__row">
        
        <Product
        id="1"
        title="Dell Vostro 3420 Laptop,12th Gen Intel Core i3-1215U, 8GB & 512GB SSD, 14.0"
        price = {24999}
        rating = {4}
        image = "https://m.media-amazon.com/images/I/51bqpP0jb5L._SX522_.jpg"
      />
      

      <Product
        id="2"
        title="OnePlus Buds Z2 Bluetooth Truly Wireless in Ear Earbuds with mic, Active Noise Cancellation, 10 Minutes Flash Charge & Upto 38 Hours Battery (Obsidian Black)"
        price = {999}
        rating = {3}
        image = "https://m.media-amazon.com/images/I/51AMqyp+sfL._SX425_.jpg"
      />
      </div>


      <div className="home__row">
        <Product
        id="3"
        title="Dopamine Detox : A Short Guide to Remove Distractions and Get Your Brain to Do Hard Things (Productivity Series Book 1)"
        price = {300}
        rating = {5}
        image = "https://m.media-amazon.com/images/I/413tVFk--xS.jpg"
      />

      <Product
        id="4"
        title="Noise NoiseFit Halo Bluetooth Calling Smart Watch, 1.43"
        price = {999}
        rating = {4}
        image = "https://m.media-amazon.com/images/I/71aTghUQfqL._SX425_.jpg"
      />
            <Product
        id="5"
        title="ZEBRONICS Zeb-Sound Feast 500 Bluetooth 5.0 Portable Speaker with 70W, 9H* Backup, TWS, IPX5 Waterproof, Call Function, RGB Lights, AUX, mSD, Voice Assistant, Type C and Grill Finish"
        price = {799}
        rating = {4}
        image = "https://m.media-amazon.com/images/I/61yeC+2-dIL._SX425_.jpg"
      />

      </div>

      <div className="home__row">
        

      <Product
        id="6"
        title="OnePlus 11R 5G (Galactic Silver, 16GB RAM, 256GB Storage)"
        price = {44999}
        rating = {4}
        image = "https://m.media-amazon.com/images/I/613SAOPmLeL._SX679_.jpg"
      />

      </div>



   



    </div>
  )
}

export default Home
