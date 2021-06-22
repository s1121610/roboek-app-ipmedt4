import React from 'react';

class DetailVerwijder extends React.Component {
    verwijderBoek = (id) => {
        this.props.verwijderBoek(id);
    }

    render(){
        return(
            <button onClick={() => this.verwijderBoek(this.props.id)}>Verwijder boek</button>
        );
    }
}

export default DetailVerwijder;