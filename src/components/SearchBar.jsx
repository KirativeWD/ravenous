import React from "react";

function SearchBar() {
    return (
        <form action="#">
            <div>
                <label htmlFor="search_business">
                    <span aria-label="Find a business"></span>
                </label>
                <input id="search_business" type="search" placeholder="Find a business" />
            </div>
            <div>
                <label htmlFor="search_location">
                    <span aria-label="Near"></span>
                </label>
                <input id="search_location" type="search" placeholder="Near" />
            </div>
            <button>Search</button>
        </form>
    )
}

export default SearchBar;