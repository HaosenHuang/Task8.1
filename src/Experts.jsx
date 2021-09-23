import React from "react";
import './css/Experts.css';
import Expert from "./Expert";
import expertList from "./expertList";

const Experts=() => {
    return (
        <div>
            <h1 class="title">Featured Experts</h1>
            <div class="gallery">
                <div class="row">
                    {expertList.map((expert) => <Expert key={expert.key} avatar={expert.avatar} name={expert.name} jobTitle={expert.jobTitle} description={expert.description} rating={expert.rating} /> )}
                </div>
            </div>
        </div>
    )
}

export default Experts;