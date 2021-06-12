import React from 'react';
import './Details.css';
import axios from "axios";

import { Link } from "react-router-dom";


class Details extends React.Component{
    state = {
        persons: []
      }
    
      componentDidMount() {
        let idReq = window.location.pathname.split('/')[2];
        axios.get(`http://127.0.0.1:8000/api/bibliotheek/details/` + idReq)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }

    render(){
        return (
      <main>
        <h1>Bibliotheek</h1>
        {this.state.persons.map(boek => <div>
          <article className="bookcard">
              <header>
                <div className="genre">
                  <p data-genre={boek.genre_naam} className="genre__naam">{boek.genre_naam}</p>
                </div>
                <img className="bookcard__cover" src={"/bibliotheek/" + boek.image} alt="cover {boek.titel}"/>
                <h2>{boek.titel}</h2>
                <p>{boek.auteur}</p>
              </header>
              <section>
                <p>{boek.beschrijving}</p>
              </section>
              <section className="u-buttonSection">
                <button className="u-button">Dit boek lezen</button>
              </section>
          </article>
        </div>)}
      </main>
    );
    }
}
export default Details;