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
                <span> سلام ، صبا حاجیان</span>
                <span dir={"ltr"}>+989013499699</span>
            </div>
        </div>

        <div className={"charge"}>
            <h2> شارژ باقی مانده سیمکارتتــ</h2>
            <div className={"progress"}>
                <div className="progressbar">
                    <svg className="progressbar__svg">
                        <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circel-html shadow-html"></circle>
                    </svg>
                    <span class="progressbar__text"> 60000 تومان</span>
                    <span className={"bg-progressBar"}></span>
                </div>
            </div>
            <span className={"turn_on_sim"}>سیمکارتت رو شارژ کن !</span>
            <div className={"service"}>
                <h5>خدمات فعال</h5>

                <div className={"service_items"}>
                    <span className={"service_icon"}><img src={sms} alt={"service_icons"}/></span>
                    <div className={"service_innerBox"}>
                    <span className={"service_title"}>بسته پیامکی هفتگی</span>
                    <span className={"service_title"}>تا تاریخ 31 خرداد 1401</span>
                    </div>
                </div>
            
            
                <div className={"service_items"}>
                     <span className={"service_icon"}><img src={wifi} alt={"service_icons"}/></span>
                     <div className={"service|_innerBox"}>
                     <span className={"service_title"}>بسته اینترنت ماهانه</span>
                     <span className={"service_title"}>تا تاریخ 30 خرداد 1401</span>
                </div>
            </div>
        </div>

             <div className={"app"}>
                 <h6>اپلیکیشن ما رو دانلود کن!</h6>
                  <img src={logo2} alt={"logo_footer"}/>
             </div>
        </div>
     </footer>
}

export default Footer;
