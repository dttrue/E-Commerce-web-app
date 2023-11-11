import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img src="/img/carts-4.jpeg" alt="" className="home__image" />

          <div className="home__row">
            <Product
              id="12321341"
              title="MacBook Air 13.3 Laptop  Apple M1 chip  8GB Memory  256GB SSD  Space Gray"
              price={999.99}
              rating={5}
              image="/img/laptop.jpeg"
            />
            <Product 
             id="80132278"
             title="Apple Watch SE 2nd Generation (GPS) 40mm Aluminum Case with Midnight Sport Band"
             price={249.99}
             rating={4}
             image="/img/watch-2.jpeg"
            />
          </div>

          <div className="home__row">
            <Product 
             id="62760464"
             title=" Nintendo Switch + Nintendo Switch Sports Bundle"
             price={299.99}
             rating={4}
             image="/img/nintendo.jpeg"
            />
            <Product 
             id="71074513"
             title="PlayStation 5 Console 512 GB-Digital with controller "
             price={499.99}
             rating={5}
             image="/img/ps5-2.jpeg"
            />
            <Product 
             id="43828380"
             title="Microsoft - Xbox Series S 512 GB All-Digital Console (Disc-Free Gaming) "
             price={299.99}
             rating={4}
             image="/img/xbox.jpeg"
            />
          </div>

      

        </div>
      </div>
    </div>
  );
};

export default Home;
