import React from "react";
import './css/style.css';
import './css/font.css';
let logo = require('./img/logo.png');
let searchIcon = require('./img/Search.png');
let home = require('./img/Home.png');
let plus = require('./img/Plus.png');
let graph = require('./img/Graph.png');
let chart = require('./img/Chart.png');
let Scan = require('./img/Scan.png');
let Category = require('./img/Category.png');
let Activity = require('./img/Activity.png');
let Document = require('./img/Document.png');
let Location = require('./img/Location.png');
const Header = () => {
     return <div className={"header_box"}>
          <div className={"logo"}>
               <div className={"Site_logo"}>
                    <img src={logo} alt={"logo"} />
                    <h1>ایرانسل من</h1>
               </div>
          </div>
          <div className={"search_Box"}>
               <form method={"post"}>
                    <input type={"text"} className={"input"} placeholder={"جستجو"} />
                    <span><img src={searchIcon} alt={"searchIcon"} /></span>
               </form>
          </div>
          <div className={"menu_box"}>
               <ul className={"menu_list"}>
                    <li className={"menu_item active-border "}><img src={home} alt={"home"} /><span className={"color-black"}> صفحه اصلی</span></li>
                    <h2 className="menu_items_titles m-top">سرویس ها</h2>
                    <li className={"menu_item "}><img src={plus} alt={"plus"} /><span> شارژ سیمکارت </span></li>
                    <li className={"menu_item"}><img src={graph} alt={"graph"} /><span> اینترنت</span></li>
                    <li className={"menu_item"}><img src={chart} alt={"home"} /><span>  کارکرد و فروش</span></li>
                    <li className={"menu_item"}><img src={Scan} alt={"home"} /><span>  خدمات</span></li>
                    <h2 className="menu_items_titles m-top"> مدیریت</h2>
                    <li className={"menu_item"}><img src={Category} alt={"home"} /><span>  مدیریت خدمات</span></li>
                    <li className={"menu_item b-bottom"}><img src={Activity} alt={"home"} /><span>  مدیریت سیمکارت</span></li>

                    <li className={"menu_item"}><img src={Document} alt={"home"} /><span>  سوالات متداول</span></li>
                    <li className={"menu_item"}><img src={Location} alt={"home"} /><span>  ارتباط با ما</span></li>
               </ul>
          </div>
     </div>
}

export default Header;