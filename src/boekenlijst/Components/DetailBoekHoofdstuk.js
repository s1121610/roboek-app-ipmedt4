import React from "react";
import DetailHoofdstuk from "./DetailHoofdstuk";
import DetailUitdaging from "./DetailUitdaging";
import "./DetailHoofdstuk.css";


class DetailBoekHoofdstuk extends React.Component {

    cardClicked = (id) => {
        this.props.cardClicked(id);
    }

    checkAfgevinkt = (id, soort, uitdagingId) => {

        if(document.getElementById(id).checked){
            window.location.replace(soort + "/" + uitdagingId);
        }
    }


    //voor elk hoofdstuk, maak een component Detailhoofdstuk
    render(){

        return(
            <section className="detailboekhoofdstuk">
                <h2 className="detailboekhoofdstuk__titel">Hoofdstukken</h2>
                <ol className="detailboekhoofdstuk__lijst">
                    {this.props.hoofdstukken.map(hoofdstuk =>
                    <li className="detailboekhoofdstuk__lijst__element" key={hoofdstuk.id}>
                        <DetailHoofdstuk
                            key={hoofdstuk.id}
                            titel={hoofdstuk.titel}
                            id={hoofdstuk.id}
                            cardClicked={this.cardClicked}
                        />

                        {this.props.uitdagingen.map(uitdaging =>

                            {if(hoofdstuk.id === uitdaging.hoofdstuk_id){
                                return <DetailUitdaging
                                        key={hoofdstuk.id}
                                        checkAfgevinkt={this.checkAfgevinkt}
                                        id={hoofdstuk.id}
                                        soort={uitdaging.soort}
                                        uitdagingId={uitdaging.id}
                                />
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
