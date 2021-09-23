import React from "react";
import './css/Footer.css'
import NewsLetterSign from "./NewsLetterSign";
import Social from "./Social";

function Footer() {
    return(
        <div>
            <ul class="footer"> 
                <NewsLetterSign />
                <Social />
            </ul>
        </div>
    )
}

export default Footer;