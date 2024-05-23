import React from "react";

function Business(props) {
    return (
        <li>
            <article>
                <img src={props.img} alt="Randomly generated generic restaurant image" />
                <div>
                    <h3>{props.name}</h3>
                    <div>
                        <p>{props.category}</p>
                        <span>{props.stars}</span>
                        <span>{props.reviews}</span>
                    </div>
                    <p>{props.address}</p>
                </div>
            </article>
        </li>
    )
}

export default Business;