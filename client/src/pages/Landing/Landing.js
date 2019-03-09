import React, { Component } from 'react';
import logo from "./veg_table.jpeg";
import "./Landing.css"

class Landing extends Component {
    render() {
        return (

            <div>
                <h1 className="hero_text">Welcome to UHungry</h1>
                <p>
                    <h3 className="hero_text1">We here at UHungry have had that dilemma many times where we're at home, have a few items in the
                        fridge, and have no idea what to do with them.  Let us help you out with some ideas for getting creative.
                </h3></p>
                <h1 className="homelink"> <a href="/home">Get Started</a></h1>

                <div class="container">
  <div class="row">
    <div class="col">
      1 of 2
    </div>
    <div class="col">
      2 of 2
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col">
      2 of 3
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
</div>

                {/* <div style={{
                    height: 50,
                    // backgroundImage: `url(${logo})`,
                    width: '400px',
                    height: "400px",
                    padding: 20,
                    color: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    position: 'fixed', top: 0, left: 0, right: 0,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
      
              }}> */}
      

        
            </div>


            // <div className="card bg-dark text-white">
            //     <img className="card-img" style={{ backgroundImage: `url(${logo})` }} alt="Card image" />
            //     <div className="card-img-overlay">
            //         <h5 className="card-title">Welcome to UHungry</h5>
            //         <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            //         <p className="card-text">Last updated 3 mins ago</p>
            //     </div>

            // className="hero_image" style={{ backgroundImage: `url(${logo})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
                    
         


                );
    };
};

export default Landing