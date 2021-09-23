import React from "react";
import './css/Expert.css'

function Expert(props) {
    return (
        <div className="exp">
            <div class="expert">
                <img src={props.avatar} alt="" />
                <p class="name">{props.name}</p>
                <p class="jobTitle">{props.jobTitle}</p>
                <p class="description">{props.description}</p>
                <p>{props.rating}</p>
            </div>
        </div>
    )
}

export default Expert;