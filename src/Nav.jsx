import React from "react";
import './css/Nav.css';

function Nav() {
    return (
        <div>
            <ul class="nav">
                <li><a href="">IService</a></li>
                <li><a href="">Post a task</a></li>
                <li><a href="">Become an expert</a></li>
                <li><a href="">Find tasks</a></li>
                <li><a href="">How it works</a></li>
                <li><a style={{backgroundColor: 'grey'}} href="">Sign in</a></li>
            </ul>
        </div>
    )
}

export default Nav;