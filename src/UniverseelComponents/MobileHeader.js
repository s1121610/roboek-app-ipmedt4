import React from 'react';
import { Link } from "react-router-dom";

import './MobileHeader.css';

class Header extends React.Component {
  render() {
    let backButton;

    if(this.props.link){
      backButton = <Link to={this.props.link}>
                      <h1 className="titel__backButton">
                        <i className="icon-angle-left"></i>
                      </h1>
                    </Link>
    }

    return (
      <section id="css-mobileNav" className="titel">
        {backButton}
        <h1 className="titel__heading">{ this.props.titel }</h1>
      </section>
    );
  }
}

export default Header;
