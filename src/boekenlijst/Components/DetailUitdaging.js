import React from "react";
import "./DetailHoofdstuk.css";

class DetailUitdaging extends React.Component {

    checkAfgevinkt = () => {
        this.props.checkAfgevinkt(this.props.id, this.props.soort, this.props.uitdagingId);
    }

    render(){
        return(
            <button className="uitdaging" onClick={() => this.checkAfgevinkt(this.props.id, this.props.soort, this.props.uitdagingId)} id={this.props.id + "K"}>&#128274;</button>
        );
    }
    
}

export default DetailUitdaging;