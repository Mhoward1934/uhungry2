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


      <div className="container">
        <div className="row justify-content-start">
          
          <div className="col-12">
          <h2>You're at home, you have a few random items in the fridge, and no idea what to do with them.  
              So what do you do, warm up that whatever-it-is again?  Ever had thoughts like these going around in your head?</h2>
      </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-4">
            <p>"A friend brought over all these exotic spices. I sure would like to try them out."</p>
    </div>
          <div className="col-4">
            <p>"I've been wanting to get more creative with my fish recipes."</p>
    </div>
        </div>
        {/* <div className="row justify-content-end">
          <div className="col-4">
            <p></p>
    </div>
          <div className="col-4">
            <p></p>
    </div>
        </div> */}
        <div className="row justify-content-around">
          <div className="col-4">
            <p>"I have company coming over tonight.  What am I going to cook?"</p>
    </div>
          <div className="col-4">
            <p>"I've been on the road for a week and I'm tired of eating out.  What can I make at home instead?"</p>
    </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-4">
          <p>"There's a can of tuna in the pantry, and I never know what to do with it."</p>
    </div>
          <div className="col-4">
          <p>"Hmmmm, I have some leftover steak from last night..."</p>
    </div>
        </div>
        <br />
        <br />
        <h1 className="homelink"> <a href="/home">Just click here and let's get cookin!</a></h1>
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