import React from "react";
import fb from './image/facebook.png';
import twi from './image/twitter.png';
import ins from './image/instagram.png';

const Social=() => {
    return (
        <div>
            <li style={{ float: "right" }} class="social"><img src={ins} alt="instagram"/></li>
            <li style={{ float: "right" }} class="social"><img src={twi} alt="Twitter"/></li>
            <li style={{ float: "right" }} class="social"><img src={fb} alt="Facebook"/></li>
            <li style={{ float: "right" }} class="social"><p>CONNECT US</p></li>
        </div>
    )
}

export default Social;