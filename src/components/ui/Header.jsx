import React from "react";

import logo from "../../assets/logo/AjaxLogo.png";

const Header = () => (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" height={44}/>
        <div className="brand-name">AJAX</div>
      </div>
    </header>
  );

export default Header;