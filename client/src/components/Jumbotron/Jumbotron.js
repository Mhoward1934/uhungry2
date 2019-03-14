import React, { Component } from 'react';
import './Jumbotron.css';

class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Welcome to UHungry</h1>
                    <p className="lead">It's time to get creative in the kitchen.</p>
                </div>
            </div>
        )
    }
}

export default Jumbotron;