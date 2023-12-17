import React from 'react';
import "../Styles/Home.css"
import Product from './Product';

const Home = () => {
  return (
       <div className="home">

          <div className="home-container">
            {/* <img src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL_HSS/3000x1200-heroUnrec._CB570990004_.jpg"
             alt="homeimage" className='home-image' /> */}
            {/* <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/salev2/V2/Logo/D108211525_WLD-BAU_iQOOZ7pro_Tall_hero_3000x1200._CB570993444_.jpg"
             alt="homeimage" className='home-image' /> */}
               <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Bikram/Bikram1/PC_Category_Hero_3000x1200_Toysgames._CB570471661_.jpg"
             alt="homeimage" className='home-image' />
            
            <div className="home-row">
                <Product 
                  id={Math.random()}
                 title="Apple 2022 MacBook Pro Laptop with M2 chip: 33.74 cm (13.3-inch) Retina Display, 8GB RAM, 512GB SSD ​​​​​​​Storage, Touch Bar, Backlit Keyboard, FaceTime HD Camera; Space Grey ​​​​​​" 
                  price={1750}
                  rating={5}
                  image={"https://m.media-amazon.com/images/I/61L5QgPvgqL._SX679_.jpg"}
 
                />
                <Product 
                 id={Math.random()}
                 title="LG 242 L 3 Star Smart Inverter Frost-Free Double Door Refrigerator (GL-I292RPZX, Shiny Steel, Door Cooling+)​​​​​" 
                 price={450}
                 rating={4}
                 image={"https://m.media-amazon.com/images/I/610ULYlLFDL._SX679_.jpg"}
                
                
                />

            </div>
            <div className="home-row">
                <Product
                 id={Math.random()}
                 title="Apple iPhone 13 (128GB) - (Product) RED​​​​​" 
                 price={750}
                 rating={5}
                 image={"https://m.media-amazon.com/images/I/716fAVud8PL._SX679_.jpg"}
                
                />
                <Product
                id={Math.random()}
                title="Chetan bhagat 400 days & A Place Called​​​​​" 
                price={30}
                rating={4}
                image={"https://m.media-amazon.com/images/I/7140xK0tv+L._SX679_.jpg"}
                
                />
                  <Product
                id={Math.random()}
                title="Bosch pro Mixer Grinder 1000watt,​​​​​" 
                price={120}
                rating={4}
                image={"https://m.media-amazon.com/images/I/51ejTJUWMLL._SY300_SX300_QL70_FMwebp_.jpg"}
                />
               
            </div>
            <div className="home-row">
              
            </div>    
            <Product
                id={Math.random()}
                title="Springtek Dreamer Pure Solid Sheesham Wood Queen Size Bed With Storage | Wooden Diamond Queen Bed With Front Drawer Storage | Rosewood, Teak Color, Mattress Size 78 X 60 Inches, Free Assembly​​​​​" 
                price={250}
                rating={4}
                image={"https://m.media-amazon.com/images/I/51tc+SVpd-L._SY300_SX300_.jpg"}
                />

          </div>
       </div>
  )
}

export default Home