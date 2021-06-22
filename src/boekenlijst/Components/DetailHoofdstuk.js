import React from "react";

class DetailHoofdstuk extends React.Component {

    onCardClicked = () => {
        this.props.cardClicked(this.props.id);
    }

    //Elk hoofdstuk als component, checkbox met id van hoofdstuk_id
    render(){
        return(
            <section>
                <h3>{this.props.titel}</h3>
                <input type="checkbox" id={this.props.id} onClick={this.onCardClicked}></input>
            </section>
        );
        }
}

export default DetailHoofdstuk;