import React from 'react';

import HulpItem from './HulpItem';

import './HulpBoekenlijst.css';

class HulpBoekenLijst extends React.Component {
    render() {
        return (
            <section>
                <section className="onderdeel">
                    <h2>Uitdaging knop</h2>
                    <HulpItem
                        imgSrc="../img/UitdagingBtnLock.svg"
                        p="Je kan de uitdaging nog niet doen"
                        className="section__contentHulp"
                    />
                    <HulpItem
                        imgSrc="../img/UitdagingBtnUnlock.svg"
                        p="Je kan de uitdaging doen"
                        className="section__contentHulp"
                    />
                    <HulpItem
                        imgSrc=""
                        p="Je hebt de uitdaging gedaan"
                        className="section__contentHulp"
                    />
                </section>
                <section className="onderdeel">
                    <h2>Afvinken hoofdstukken</h2>
                    <HulpItem
                        imgSrc="../img/Checkbox.svg"
                        p="Je hebt het hoofdstuk nog niet gelezen"
                        className="section__contentHulp"
                        id="width--klein"
                    />
                    <HulpItem
                        imgSrc="../img/CheckboxFull.svg"
                        p="Je hebt het hoofdstuk gelezen"
                        className="section__contentHulp"
                        id="width--klein"
                    />
                </section>
                <section className="onderdeel">
                    <h2>Voortgang boek  </h2>
                    <HulpItem
                        imgSrc="../img/ProgressieBalk.svg"
                        p="Dit laat zien hoeveel hoofdstukken je hebt gelezen van het boek"
                        className="flex--column section__contentHulp"
                        id="width--groot"
                    />
                </section>
            </section>
        );
    }
}

export default HulpBoekenLijst;