import React from 'react';

import { Link } from "react-router-dom";

class DesktopNavItem extends React.Component {
    render() {
        return (
            <section className="desktopNav__link">
                <Link to={this.props.link}>
                    <p>{this.props.p}</p>
                </Link>
            </section>
        );
    }
}

export default DesktopNavItem;