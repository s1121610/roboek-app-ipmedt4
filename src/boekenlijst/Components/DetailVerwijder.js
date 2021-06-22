import React from 'react';
import "./DetailHoofdstuk.css";

class DetailVerwijder extends React.Component {
    verwijderBoek = (id) => {
        this.props.verwijderBoek(id);
    }

    render(){
        return(
            <button className="verwijderboek" onClick={() => this.verwijderBoek(this.props.id)}>Verwijder boek</button>
        );
    }
}

export default DetailVerwijder;