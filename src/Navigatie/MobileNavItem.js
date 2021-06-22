import React from 'react';

import { Link } from "react-router-dom";

class NavItem extends React.Component {
    render() {
        return (
            <section className="navigatie__modal__content__link">
                <Link to={ this.props.link } onClick={this.props.closeModal}>
                    <p>{ this.props.p }</p>
                    <section className="eclipse">
                        <img className="navigatie__modal__content__link__img" src={ this.props.imgSrc } alt="img van een nav item"/>
                    </section>
                </Link>
            </section>
        );
    }
}

export default NavItem;
