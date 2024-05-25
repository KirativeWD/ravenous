import React from "react";
import "./css/Business.css";

function Business({ data }) {
    return (
        <li>
            <article>
                <img src={data.img} alt={data.alt} />
                <h3>{data.name}</h3>
                <p className="business-category">{data.category}</p>
                <span className="customer-reviews">{data.stars} Stars ({data.reviews} Customer Reviews)</span>
                <p>{data.address}</p>
            </article>
        </li>
    )
}

export default Business;