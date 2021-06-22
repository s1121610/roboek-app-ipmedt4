import React from 'react';
import MobileNavItem from './MobileNavItem'
import HulpBoekenLijst from '../MobileHulp/HulpBoekenlijst';
import HulpBibliotheek from '../MobileHulp/HulpBibliotheek';
import HulpBoekenkast from '../MobileHulp/HulpBoekenkast';
import HulpWinkel from '../MobileHulp/HulpWinkel';

import './MobileNavigatie.css';

class MobileNavigatie extends React.Component {

    state = {
        visibleKeuzes: false,
    };

    render () {
        let hulpBoekenLijst;
        let hulpBibliotheek;
        let hulpBoekenkast;
        let hulpWinkel;
        if (this.state.visibleKeuzes !== false) {
            hulpBoekenLijst = <HulpBoekenLijst />;
            hulpBibliotheek = <HulpBibliotheek />;
            hulpBoekenkast = <HulpBoekenkast />;
            hulpWinkel = <HulpWinkel />
        }

        return (
            <article className="navigatie">
                <section className="navigatie__knopSectie">
                    <img id="js--openModal" className="navigatie__knopSectie__btn" src="/img/MenuLogo.png" alt="Roboek robot die de navigatie opent" onClick={openModal} />
                </section>
                <section id="js--myModal" className="navigatie__modal" >
                    <section className="navigatie__modal__content">
                        <figure className="close">&times;</figure>
                        <section className="navigatie__modal__content__link margintop--groot">
                            <section className="hulp__section" onClick={() => {this.setState({visibleKeuzes: !this.state.visibleKeuzes})}}>
                                <p>Hulp</p>
                                <section className="eclipse">
                                    <img className="navigatie__modal__content__link__img" src="/img/Help.svg" alt="img van een nav item" />
                                </section>
                            </section>
                            {this.state.visibleKeuzes ?
                                <section className="hulp__section__keuze">
                                    <section className="hulp__section__keuze__boekenlijst">
                                        <h2 className="hulp__section__keuze__boekenlijst__h2">Mijn Boekenlijst</h2>
                                        {hulpBoekenLijst}
                                    </section>
                                    <section className="hulp__section__keuze__bibliotheek">
                                        <h2 className="hulp__section__keuze__bibliotheek__h2">Bibliotheek</h2>
                                        {hulpBibliotheek}
                                    </section>
                                    <section className="hulp__section__keuze__boekenkast">
                                        <h2 className="hulp__section__keuze__boekenkast__h2">Boekenkast</h2>
                                        {hulpBoekenkast}
                                    </section>
                                    <section className="hulp__section__keuze__winkel">
                                        <h2 className="hulp__section__keuze__winkel__h2">Winkel</h2>
                                        {hulpWinkel}
                                    </section>
                                    {/*Hieronder komen de anderen keuzes*/}
                                </section>
                                : null
                            }
                        </section>
                        <MobileNavItem
                            closeModal={closeModal}
                            link="/winkel"
                            p="Winkel"
                            imgSrc="/img/Winkel.svg"
                        />
                        <MobileNavItem
                            closeModal={closeModal}
                            link="/genre"
                            p="Bibliotheek"
                            imgSrc="/img/Bibliotheek.svg"
                        />
                        <MobileNavItem
                            closeModal={closeModal}
                            link="/boekenlijst"
                            p="Mijn Boekenlijst"
                            imgSrc="/img/Boekenlijst.svg"
                        />
                        <MobileNavItem
                            closeModal={closeModal}
                            link="/boekenkast"
                            p="Mijn Boekenkast"
                            imgSrc="/img/Boekenkast.svg"
                        />
                        <section className="navigatie__knopSectie navigatie__knopSectie__btn__modal">
                            <img id="js--openModal" className="navigatie__knopSectie__btn" src="/img/MenuLogo.png" alt="Roboek robot die de navigatie opent" onClick={closeModal} />
                        </section>
                    </section>
                </section>
            </article>
        );
    }
}

const openModal = () => {
  var modal = document.getElementById("js--myModal");
  var btnModal = document.getElementById("js--openModal");
  var figure = document.getElementsByClassName("close")[0];

  btnModal && (btnModal.onclick = function () {
      modal.style.display = "block";
  });
  figure && (figure.onclick = function () {
      modal.style.display = "none";
  });
  window.onclick = function (event) {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  }
}

const closeModal = () => {
  console.log("closeModal aangeroepen");
  var modal = document.getElementById("js--myModal");
  modal.style.display = "none";
}

const dropDown = (stateHulpKeuze) => {
    stateHulpKeuze.setState({ visible: true });
}

export default MobileNavigatie;
