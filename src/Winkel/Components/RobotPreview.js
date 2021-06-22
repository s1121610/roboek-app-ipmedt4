import React from "react";

import "./RobotPreview.css";

class RobotPreview extends React.Component {

    render() {

        return(
            <figure className = "winkelSection__previewSection__preview__figure">
                <img className = "winkelSection__previewSection__preview__image" src = "img/robot_icon_preview.png" style={{background: this.props.primaryColor}}/>
            </figure>
        )
    }

}

export default RobotPreview;