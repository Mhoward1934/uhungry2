import React from "react";
import "./SearchResults.css"

function SearchResults(props) {
    return (

        <div className="searchResults">
            <ul className="list-group search-results">
                {props.results.map(result => (
                    <li key={result.id} className="list-group-item">
                        <link href={'https://www.yummly.com/recipe/' + result.id} />
                        <h1>{result.recipeName}</h1>
                        <img alt={result.recipeName} className="img-fluid" src={result.imageUrlsBySize[90]} style={{ margin: "0 auto" }} />
                        <br />
                        <button>
                            <a href={'https://www.yummly.com/recipe/' + result.id}>
                                Get your recipe!
                            </a>
                        </button>
                        <br />
                        {result.ingredients.map(ingredient => (
                            <button>
                                {ingredient}
                            </button>
                        ))}
                    </li>
                ))}
            </ul>
        </div>

    );
}

export default SearchResults;
