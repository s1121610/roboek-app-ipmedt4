import React from 'react';
import './Bibliotheek.css';
import axios from "axios";
import Slider from "react-slick";

import { Link } from "react-router-dom";


class Searchbar extends React.Component{
    state = {
      genre: "",
      persons: []
    }
    
    componentDidMount() {
      this.setState({
        genre: window.location.pathname.split('/')[2]
      })
      let genreReq = window.location.pathname.split('/')[2];
      axios.get(`http://127.0.0.1:8000/api/bibliotheek/` + genreReq)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })
    }

    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
      <section>
        <h1>Bibliotheek</h1>
        <section className="genre">
            <p data-genre={this.state.genre} className="genre__naam">{this.state.genre}</p>
        </section>
        <Slider {...settings}>
            {this.state.persons.map(boek => <div>
                <article className="bookcard">
                    <Link to={"/details/" + boek.id}>
                      <img className="bookcard__cover" src={boek.image} alt="cover {boek.titel}"/>
                    </Link>
                    <section className="u-buttonSection">
                        <Link to={"/details/" + boek.id} className="u-button">Ontdek mij</Link>
                    </section>
                </article>
            </div>)}
        </Slider>
      </section>
    );
    }
}
export default Searchbar;