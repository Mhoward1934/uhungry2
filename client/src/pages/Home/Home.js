import React, { Component } from "react";
//import Card from "../../components/Card/Card";
import API from "../../utils/API";
import SearchForm from "../../components/SearchForm/SearchForm";
import SearchResults from "../../components/SearchResults/SearchResults";
// import logo from "../Home/salad_table_logo.jpg";
import "./Home.css"
import axios from "axios";

class Home extends Component {
    state = {
        results: [],
        search: "",
        groceryList:[],
        showGroceryList:false
    };

    componentDidMount() {
        this.searchRecipes("");
        // fetch("http://localhost:3002/api/food")
        //     .then(response =>response.json())
        //     .then(data=>{
        //         console.log(data);
        //         this.setState({
        //             groceryList:data,
        //             showGroceryList:true
        //         })
        //     })
        axios.get("/api/food")
        .then(data=>{
                    console.log(data);
                    this.setState({
                        groceryList:data,
                        showGroceryList:true
                    })})
                    .catch(err => console.log(err))
    }

    searchRecipes = query => {
        API.search(query)
            //.then(res => console.log({ results: res.data.matches}))
            .then(res => this.setState({ results: res.data.matches }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };


    handleFormSubmit = event => {
        event.preventDefault();
        this.searchRecipes(this.state.search);
    };
    addToGroceryList = () => {
        
        console.log(this.state.inputItem)
        fetch('/api/food', {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({inputItem: this.state.inputItem})
        })
        .then(response =>response.json())
        .then(data => {
            console.log(data);
            fetch("/api/food")
            .then(response =>response.json())
            .then(data=>{
                console.log(data)
                this.setState({
                    groceryList:data,
                    showGroceryList:true
                })
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <h2><strong>How It Works</strong></h2>
                            <p>
                                Just enter ingredients in the search bar below.  Use the drop down to select
                                the style, or type, of cuisine for a variety of recipes.
                            </p>


                            <div className="input-group">
                                <input type="text" className="form-control" aria-label="Text input with segmented dropdown button" />
                                <div className="input-group-append">

                                    <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="https://www.yummly.com/recipe/">Asian</a>
                                        <a className="dropdown-item" href="https://www.yummly.com/recipe/">American</a>
                                        <a className="dropdown-item" href="https://www.yummly.com/recipe/">Barbecue</a>
                                        <a className="dropdown-item" href="https://www.yummly.com/recipe/">Hawaiian</a>
                                    </div>
                                    <button type="button" className="btn btn-primary">Search</button>
                                </div>
                            </div>
                        </div>
                        {/* //Second component */}
                        {/* Create map react loop */}
                        <div className="col-md-4">

                            <h2><strong>Got My Recipe</strong></h2>

                            <p>
                                Once you've picked your recipe and know what ingredients you need,
                                just click on the Grocery List link to save all of your grocery items
                                before you head to the store.
                            </p>

                        </div>
                        {/* Third component */}
                        <div className="col-md-4">
                            <h2><strong>Grocery List</strong></h2>
                            <p>
                                Click on the Grocery List link, type in your grocery list item, and click Submit
                                to save all of your grocery items in a list.
                        </p>
                            <form className="form-inline">
                                <div className="form-group mx-sm-3 mb-2">
                                    <label for="inputPassword2" className="sr-only">Grocery List Item</label>
                                    <input type="text" name="inputItem" value={this.state.inputItem} onChange={this.handleInputChange} className="form-control" id="inputPassword2" placeholder="Grocery List Item" />
                                </div>
                                <a style={{color:'white'}} className="btn btn-primary mb-2" onClick={this.addToGroceryList}>Submit</a>
                            </form>
                            <div className="form-group">
                                <label for="exampleFormControlSelect2"></label>
                                <select multiple className="form-control" id="exampleFormControlSelect2">
                                    {
                                        this.state.showGroceryList &&
                                        this.state.groceryList.map(item => <option key={item._id}>{item.inputItem}</option>)
                                    }
                                    
                                </select>
                            </div>
                        </div>
                    </div>
                    <SearchForm
                        value={this.state.search}
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit} />
                    <SearchResults
                        results={this.state.results}
                    />
                </div>
            </div >
        );
    };


}

export default Home;



