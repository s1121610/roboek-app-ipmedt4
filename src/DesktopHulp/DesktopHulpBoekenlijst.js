import React from 'react';

import HulpItem from '../MobileHulp/HulpItem';

import '../MobileHulp/HulpBoekenlijst.css';

class DesktopHulpBoekenLijst extends React.Component {
    render() {
        return (
            <section className="section__hulpBoekenlijst">
                <section className="section__hulpBoekenlijst__onderdeel">
                    <h2 className="hulpSectionTitel">Uitdaging knop</h2>
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
                        imgSrc="../img/UitdagingBtnUnlock.svg"
                        p="Je hebt de uitdaging gedaan"
                        className="section__contentHulp"
                    />
                </section>
                <section className="section__hulpBoekenlijst__onderdeel">
                    <h2 className="hulpSectionTitel">Afvinken hoofdstukken</h2>
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
                <section className="section__hulpBoekenlijst__onderdeel">
                    <h2 className="hulpSectionTitel">Voortgang boek  </h2>
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

export default DesktopHulpBoekenLijst;