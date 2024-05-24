import React from "react";
import "./css/Business.css";

function Business(props) {
    return (
        <li>
            <article>
                <img src={props.img} alt={props.alt} />
                <h3>{props.name}</h3>
                <p className="business-category">{props.category}</p>
                <span className="customer-reviews">{props.stars} Stars ({props.reviews} Customer Reviews)</span>
                <p>{props.address}</p>
            </article>
        </li>
    )
}

export default Business;