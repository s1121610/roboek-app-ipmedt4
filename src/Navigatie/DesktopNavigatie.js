import React from 'react';
import { Link } from "react-router-dom";

import DesktopNavItem from './DesktopNavItem';
import DesktopHulpBoekenLijst from '../DesktopHulp/DesktopHulpBoekenlijst';


import '../App.css';
import './DesktopNavigatie.css'

class DesktopNav extends React.Component {

    render() {
        let backButton;

        if (this.props.link) {
            backButton = <Link className="desktopNav__backButton--link u-button" to={this.props.link}>
                <h1 className="desktopNav__backButton">
                    <i className="icon-angle-left"></i> Terug
                </h1>
            </Link>
        }
        return (
          <React.Fragment>
              <section className="desktopNav" id="css--desktopNav">
                  <figure className="desktopNav__figure">
                    <img className="desktopNav__image" src="/img/MenuLogo.png" alt="Roboek robot die de navigatie opent"/>
                  </figure>
                  <DesktopNavItem link="/boekenlijst" p="Boekenlijst"/>
                  <DesktopNavItem link="/genre" p="Bibliotheek" />
                  <DesktopNavItem link="/boekenkast" p="Boekenkast" />
                  <DesktopNavItem link="/winkel" p="Winkel" />
                  <section id="js--openModal" className="desktopNav__hulp" onClick={openModal}>
                      <p className="desktopNav__hulp__p">Hulp</p>
                  </section>
                  <section id="js--myModal" className="desktopNav__modal">
                      <section className="desktopNav__modal__content">
                          <figure className="close">&times;</figure>
                          <section className="desktopNav__modal__content__onderdelen">
                              <section className="desktopNav__modal__content__onderdelen__onderdeel">
                                  {/* Hier komt per onderdeel alle hulpmiddelen */}
                                  <DesktopHulpBoekenLijst />
                              </section>
                              {/* Hieronder komen de andere secties */}
                          </section>
                      </section>
                  </section>
              </section>
              {backButton}
            </React.Fragment>
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

export default DesktopNav;
