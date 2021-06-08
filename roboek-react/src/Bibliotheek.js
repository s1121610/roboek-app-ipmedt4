import React from 'react';
import './Bibliotheek.css';
import axios from "axios";

class Searchbar extends React.Component{
    state = {
        persons: []
      }
    
      componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/bibliotheek`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }

    render(){
        return(
        <section>
            {/* <section>
                { this.state.persons.map(boek => <p>
                    {boek.genre_naam}
                </p>)}
            </section> */}
            <ul className="u-slider">
            { this.state.persons.map(boek => <li>
                <article className="bookcard">
                    <img className="bookcard__cover" src={boek.image} alt="cover {boek.titel}"/>
                    <section className="u-buttonSection">
                        <a href="/details" className="u-button">Ontdek mij</a>
                    </section>
                </article>
            </li>)}
        </ul>
        </section>
        
        );
    }
}
export default Searchbar;