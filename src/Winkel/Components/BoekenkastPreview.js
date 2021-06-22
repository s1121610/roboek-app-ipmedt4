import React from "react";

import "./BoekenkastPreview.css";

class BoekenkastPreview extends React.Component {

    render() {

        return (
            <article className="boekenkastPreview">
                <section className="boekenkastSection--top" style={{background: this.props.primaryColor}}>
                    <article className="itemsSection__container">
                        <ul className="itemsSection__bookshelf__preview" style={{background: this.props.secondaryColor}}>
                            <li className="itemSection__shelfBook itemsSection__shelfBook--red">
                                <div className="itemsSection__shelfBook__Label--high"></div>
                            </li>
                            <li className="itemSection__shelfBook itemsSection__shelfBook--green">
                                <div className="itemsSection__shelfBook__Label--low"></div>
                            </li>
                            <li className="itemSection__shelfBook itemsSection__shelfBook--yellow">
                                <div className="itemsSection__shelfBook__Label--high"></div>
                            </li>
                            <li className="itemSection__shelfBook itemsSection__shelfBook--purple itemsSection__shelfBook--tilted">
                                <div className="itemsSection__shelfBook__Label--high"></div>
                                <div className="itemsSection__shelfBook__Label--low"></div>
                            </li>
                            <li className="itemSection__shelfBook itemsSection__shelfBook--blue">
                                <div className="itemsSection__shelfBook__Label--high"></div>
                            </li>
                        </ul>
                    </article>
                </section>
            </article>
        )
    }
}

export default BoekenkastPreview;
