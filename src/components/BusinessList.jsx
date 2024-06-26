import React from "react";
import Business from "./Business";
// import { businessData } from "../data/businessData";
import "./css/BusinessList.css";

function BusinessList({ businessData }) {

    return (
        <section className="business-list-wrapper">
            <ul className="flex">
                {businessData.map((data, index) => {
                    return (
                        <Business key={`restaurant-${index}`} data={data}
                        // img={data.img}
                        // alt={data.alt}
                        // name={data.name}
                        // category={data.category}
                        // stars={data.stars}
                        // reviews={data.reviews}
                        // address={data.address}
                        // key={`restaurant-${index}`}
                        />
                    )
                })}
            </ul>
        </section>
    )
};

export default BusinessList;