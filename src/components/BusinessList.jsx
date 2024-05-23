import React from "react";
import Business from "./Business";
import { businessData } from "../data/businessData";

function BusinessList() {

    return (
        <ul>
            {businessData.map((data, index) => {
                return (
                    <Business
                        img={data.img}
                        name={data.name}
                        category={data.category}
                        stars={data.stars}
                        reviews={data.reviews}
                        address={data.address}
                        key={`restaurant-${index}`}
                    />
                )
            })}
        </ul>
    )
};

export default BusinessList;