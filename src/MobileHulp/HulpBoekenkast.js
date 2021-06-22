import React from 'react';

import HulpItem from './HulpItem';

class HulpBoekenkast extends React.Component {
    render() {
        return (
            <section className="section__hulpBoekenkast">
                <section className="section__hulpboekenkast__onderdeel">
                    <h2 className="hulpSectionTitel">BoekenkastSlider</h2>
                    <HulpItem
                        imgSrc="../img/BoekenSliderR.svg"
                        p="Klik erop om de andere kanten van jou boekenkast te zien"
                        className="section__contentHulp"
                    />
                </section>
                <section className="section__hulpboekenkast__onderdeel">
                    <h2 className="hulpSectionTitel">Personaliseer</h2>
                    <HulpItem
                        imgSrc="../img/PasAanKnop.svg"
                        p="Klik erop om je medailles te personaliseren"
                        className="flex--column section__contentHulp"
                        id="width--mid"
                    />
                </section>
            </section>
        );
    }
}

export default HulpBoekenkast;