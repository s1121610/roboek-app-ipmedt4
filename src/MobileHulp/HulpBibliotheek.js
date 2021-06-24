import React from 'react';

import HulpItem from './HulpItem';

class HulpBibliotheek extends React.Component {
    render() {
        return (
            <section className="section__hulpBibliotheek">
                <section className="section__hulpBibliotheek__onderdeel">
                    <h2 className="hulpSectionTitel">Boekenslider</h2>
                    <HulpItem
                        imgSrc="../roboek-app-ipmedt4/img/BoekenSliderR.svg"
                        p="Hiermee kan je het volgende boek bekijken"
                        className="section__contentHulp"
                    />
                </section>
                <section className="section__hulpBibliotheek__onderdeel">
                    <h2 className="hulpSectionTitel">Favorieten</h2>
                    <HulpItem
                        imgSrc="/roboek-app-ipmedt4/img/HartKnop.svg"
                        p="Voeg het boek toe aan je favorieten"
                        className="section__contentHulp"
                    />
                    <HulpItem
                        imgSrc="/roboek-app-ipmedt4/img/MijnFavorietenKnop.svg"
                        p="Ga naar al je favorieten boeken toe"
                        className="flex--column section__contentHulp"
                        id="width--groot"
                    />
                </section>
                <section className="section__hulpBibliotheek__onderdeel">
                    <h2 className="hulpSectionTitel">Lezen</h2>
                    <HulpItem
                        imgSrc="/roboek-app-ipmedt4/img/OntdekMijKnop.svg"
                        p="Je gaat naar de detailpagina van het boek"
                        className="flex--column section__contentHulp"
                        id="width--groot"
                    />
                    <HulpItem
                        imgSrc="/roboek-app-ipmedt4/img/AlleBoekenKnop.svg"
                        p="Knop waarna je alle boeken kan zien"
                        className="flex--column section__contentHulp"
                        id="width--groot"
                    />
                    <HulpItem
                        imgSrc="/roboek-app-ipmedt4/img/BoekLezenKnop.svg"
                        p="Boek toevoegen aan je bibliotheek"
                        className="flex--column section__contentHulp"
                        id="width--groot"
                    />
                </section>
            </section>
        );
    }
}

export default HulpBibliotheek;