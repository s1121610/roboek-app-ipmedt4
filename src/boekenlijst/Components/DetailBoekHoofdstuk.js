import React from "react";
import DetailHoofdstuk from "./DetailHoofdstuk";


class DetailBoekHoofdstuk extends React.Component {

    cardClicked = (id) => {
        this.props.cardClicked(id);
    }

    checkAfgevinkt = (id, soort, uitdagingId) => {

        console.log(document.getElementById(id).checked);
        if(document.getElementById(id).checked){
            window.location.replace(soort + "/" + uitdagingId);
        }
    }


    //voor elk hoofdstuk, maak een component Detailhoofdstuk
    render(){
        
        return(
            <section>
                <h2>Hoofdstukken</h2>
                <ol>
                    {this.props.hoofdstukken.map(hoofdstuk =>
                    <li key={hoofdstuk.id}>
                        <DetailHoofdstuk
                            titel={hoofdstuk.titel}
                            id={hoofdstuk.id}
                            cardClicked={this.cardClicked}
                        />


                        {this.props.uitdagingen.map(uitdaging =>
                            {if(hoofdstuk.id == uitdaging.hoofdstuk_id){
                                return <button onClick={() => this.checkAfgevinkt(hoofdstuk.id, uitdaging.soort, uitdaging.id)} id={hoofdstuk.id + "K"}>&#128274;</button>
                            }}
                        )} 
                    </li>
                    
                    )}
                </ol>
            </section>
        );
    }
}

export default DetailBoekHoofdstuk;