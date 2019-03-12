import React, { Component } from 'react';
// import logo from "./veg_table.jpeg";
// import jumbotron from '../../components/Jumbotron/Jumbotron';
import "./Landing.css"

class Landing extends Component {
  render() {
    return (

      // <div>
      //   <h1 className="hero_text">Welcome to UHungry</h1>
      //   <p>
      //     <h3 className="hero_text1">We here at UHungry have had that dilemma many times where we're at home, have a few items in the
      //         fridge, and have no idea what to do with them.  Let us help you out with some ideas for getting creative.
      //           </h3></p>
      //   <h1 className="homelink"> <a href="/home">Get Started</a></h1>


      <div class="container">
        <div class="row justify-content-start">
          <div class="col-4">
          </div>
          <div class="col-4">
          <h1>For the times you have thoughts like these going around in your head:</h1>
      </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-4">
            <p>"A friend brought over all these exotic spices. I sure would like to try them out."</p>
    </div>
          <div class="col-4">
            <p>"I've been wanting to get more creative with my fish recipes."</p>
    </div>
        </div>
        <div class="row justify-content-end">
          <div class="col-4">
            <p>"My girlfriend's coming over tonight.  What am I going to cook?"</p>
    </div>
          <div class="col-4">
            <p>"I've been on the road for a week and I'm tired of eating out.  What can I make at home instead?"</p>
    </div>
        </div>
        <div class="row justify-content-around">
          <div class="col-4">
            One of two columns
    </div>
          <div class="col-4">
            One of two columns
    </div>
        </div>
        <div class="row justify-content-between">
          <div class="col-4">
          <p>"There's a can of tuna in the pantry, and I never know what to do with it."</p>
    </div>
          <div class="col-4">
          <p>"Hmmmm, I have some leftover steak from last night..."</p>
    </div>
        </div>
        <h1 className="homelink"> <a href="/home">Let's Get Cookin!</a></h1>
        <button type="button" class="btn btn-primary btn-lg btn-block"><a href="/home">Block level button</a></button>

      </div>


      /* <div style={{
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
    
            }}> */

    );
  };
};

export default Landing;