import React from 'react';
import './Bibliotheek.css';
import axios from "axios";
import Slider from "react-slick";

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
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
      <section>
        <Slider {...settings}>
            {this.state.persons.map(boek => <article>
                <article className="bookcard">
                    <img className="bookcard__cover" src={boek.image} alt="cover {boek.titel}"/>
                    <section className="u-buttonSection">
                        <a href="/details" className="u-button">Ontdek mij</a>
                    </section>
                </article>
            </article>)}
        </Slider>
      </section>
    );
    }
}
export default Searchbar;