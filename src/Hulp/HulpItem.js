import React from 'react';

import './HulpItem.css'

class HulpItem extends React.Component {
    render() {
        return (
            <section  className={ this.props.className }>
                <img src={this.props.imgSrc} id={ this.props.id } alt="img van hulp middel"/>
                <p>{ this.props.p }</p>
            </section>
        );
    }
}

export default HulpItem;