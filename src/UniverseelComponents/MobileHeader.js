import React from 'react';
import './MobileHeader.css';

class Header extends React.Component {
    render() {
      return (
        <section className="titel">
          <h1>{ this.props.titel }</h1>
        </section>
      );
    }
}

export default Header;
