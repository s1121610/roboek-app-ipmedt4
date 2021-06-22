import React from 'react';
import "../../App.css"
import '../Genre.css';
import '../BibliotheekDesktop.css';
import axios from "axios";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Favoriet from './Favoriet';


class BibliotheekDesktop extends React.Component{
    state = {
        boeken: [],
        boek_id: 0,
        genre: "",
        persons: [], 
        heartColor: false,
        liked: []
    }

    componentDidMount = (props) => {
        axios.get(`http://127.0.0.1:8000/api/bibliotheek/`)
          .then(res => {
            const boeken = res.data.boeken;
            const favorieten = res.data.favorieten;
            console.log(favorieten);
            this.setState({ boeken: boeken, liked: favorieten});
            console.log(this.state.liked);
          });
        
      }

    render(){
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "0px",
            slidesToShow: 5,
            speed: 500
        };

        let checkIfLiked = (id) => {
            if(this.state.liked.includes(id) === true){
              return true;
            }else{
              return false;
            }
          };

        return(
            <section>
                <section className="genre">
                    <p data-genre="Dieren%20en%20natuur" className="genre__naam">Dieren en Natuur</p>
                </section>                
                <Slider {...settings}>
                    {this.state.boeken.map(boek => <ul>
                        <li className="bookcard">
                        <Favoriet boek_id={boek.id} favorieten={this.state.liked} liked={checkIfLiked(boek.id)}/>

                            <Link to={"/details/" + boek.id}>
                                <img className="bookcard__cover" src={boek.image} alt={"Omslag van boek " + boek.titel} />
                            </Link>
                        </li>
                </ul>)}
                </Slider>
            </section>       
        );
    }
}

export default BibliotheekDesktop;