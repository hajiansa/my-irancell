import React from "react";
let profile = require("./img/profile.jpg");
let sms = require("./img/sms.png");
let wifi = require("./img/wifi.png");
let logo2 = require("./img/logo2.png");

const Footer = () =>{
    return <footer className={"footer"}>
        <div className={"profile"}>
            <img src={profile} alt={"profile_photo"}/>
            <div className={"profile_info"}>
                <span> 3 سلام ، صبا حاجیان</span>
                <span dir={"ltr"}>+989013499699</span>
            </div>
        </div>

        <div className={"charge"}>
            
        </div>
    </footer>
}

export default Footer;
