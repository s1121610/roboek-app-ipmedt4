import React from 'react';

import HulpItem from './HulpItem';

class HulpBibliotheek extends React.Component {
    render() {
        return (
            <section className="section__hulpBibliotheek">
                <section className="section__hulpBibliotheek__onderdeel">
                    <h2>Boekenslider</h2>
                    <HulpItem
                        imgSrc="../img/BoekenSliderR.svg"
                        p="Hiermee kan je het volgende boek bekijken"
                        className="section__contentHulp"
                    />
                </section>
                <section className="section__hulpBibliotheek__onderdeel">
                    <h2>Favorieten</h2>
                    <HulpItem
                        imgSrc="../img/HartKnop.svg"
                        p="Voeg het boek toe aan je favorieten"
                        className="section__contentHulp"
                    />
                    <HulpItem
                        imgSrc="../img/MijnFavorietenKnop.svg"
                        p="Ga naar al je favorieten boeken toe"
                        className="section__contentHulp"
                    />
                </section>
                <section className="section__hulpBibliotheek__onderdeel">
                    <h2>Lezen</h2>
                    <HulpItem
                        imgSrc="../img/OntdekMijKnop.svg"
                        p="Je gaat naar de detailpagina van het boek"
                        className="section__contentHulp"
                    />
                    <HulpItem
                        imgSrc="../img/AlleBoekenKnop.svg"
                        p="Knop waarna je alle boeken kan zien"
                        className="section__contentHulp"
                    />
                    <HulpItem
                        imgSrc="../img/BoekLezenKnop.svg"
                        p="Boek toevoegen aan je bibliotheek"
                        className="section__contentHulp"
                    />
                </section>
            </section>
        );
    }
}

export default HulpBibliotheek;