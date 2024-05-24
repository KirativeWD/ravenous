import React from "react";
import "./css/SearchBar.css";

function SearchBar() {
    return (
        <form action="#">
            <div className="form-search-wrapper">
                <div className="input-wrapper">
                    <label htmlFor="search_business">
                        <span aria-label="Find a business"></span>
                    </label>
                    <input id="search_business" type="search" placeholder="Find a business" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="search_location">
                        <span aria-label="Near"></span>
                    </label>
                    <input id="search_location" type="search" placeholder="Near" />
                </div>
                <button>Search</button>
            </div>
        </form>
    )
}

export default SearchBar;