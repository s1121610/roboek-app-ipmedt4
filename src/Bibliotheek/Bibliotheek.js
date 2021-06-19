import React from 'react';
import './Bibliotheek.css';
import axios from "axios";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Favoriet from './components/Favoriet';

class Bibliotheek extends React.Component{
  state = {
    genre: "",
    persons: [], 
    boek_id: 0,
    heartColor: false,
    liked: []
  }
  
  componentDidMount() {
    this.setState({
      genre: window.location.pathname.split('/')[2]
    })
    let genreReq = window.location.pathname.split('/')[2];
    axios.get(`http://127.0.0.1:8000/api/bibliotheek/` + genreReq)
      .then(res => {
        const boeken = res.data.boeken;
        const favorieten = res.data.favorieten;
        this.setState({ persons: boeken, liked: favorieten});
        console.log(this.state.liked);
      })
  }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.state.genre);
    if(this.state.liked.includes(this.state.boek_id)){
      console.log("id ==" + this.state.boek_id);
      axios.post('http://127.0.0.1:8000/api/bibliotheek/favorite/' + this.state.boek_id, {"id": this.state.boek_id, "genre": this.state.genre}).then(res => {
        console.log(res);
        const favos = res.data;
        const id = favos.boeken.id;
        if(favos.favorieten.includes(id) === true){
          this.setState({heartColor: true});
        }else{
          this.setState({heartColor: ""});
        }
      });
    }else{
      axios.delete('http://127.0.0.1:8000/api/bibliotheek/favorite/delete/' + this.state.boek_id, {id: this.state.boek_id, genre: this.state.genre}).then(res => {
        console.log(res);
        const boeken = res.data;
        const id = boeken.boeken[0].id;
        if(boeken.favorieten.includes(id) === true){
          this.setState({heartColor: true});
        }else{
          this.setState({heartColor: ""});
        }
      });
    }
  };

  render(){
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <Arrow type="next" />,
      prevArrow: <Arrow type="prev" />
    };

    function Arrow(props) {
      let className = props.type === "next" ? "nextArrow" : "prevArrow";
      className += " arrow";
      const char = props.type === "next" ? "👉" : "👈";
      return (
        <span className={className} onClick={props.onClick}>
          {char}
        </span>
      );
    }
    
    const addToFavorites = (id) =>{
      this.setState({ boek_id: id, bgColor: "red" })
      console.log(this.state.bgColor);
      axios.post('http://127.0.0.1:8000/api/bibliotheek/favorite/' + id, {"id": id})
        .then(res => {  
          const favorite = res.data
          this.setState({ boek_id: favorite })
          console.log(this.state.boek_id);
          console.log(res);
        });
    }

    const DeleteFromFavorites = (id) =>{
      this.setState({ boek_id: id })
      console.log("boek id = " + this.state.boek_id);
      axios.delete('http://127.0.0.1:8000/api/bibliotheek/favorite/' + id, {"id": id})
        .then(res => {  
          const favorite = res.data
          this.setState({ boek_id: favorite })
          console.log(this.state.boek_id);
          console.log(res);
        });
    }

    const setBoekIdState = (id) => {
      console.log(id);
      this.setState({boek_id: id});
    }

    return (
      <section>
        <h1>Bibliotheek</h1>
        <section className="genre">
            <p data-genre={this.state.genre} className="genre__naam">{this.state.genre}</p>
        </section>
        <Slider {...settings}>
            {this.state.persons.map(boek => <div>
                <article className="bookcard">
                <figure className="like">
                  <button 
                    className="hartje"
                    id="js--hartje"
                    data-liked = {this.state.heartColor}
                    onClick={() => {setBoekIdState(boek.id); this.handleClick();}}
                  ></button></figure>
                  <Link to={"/details/" + boek.id}>
                    <img className="bookcard__cover" src={boek.image} alt="cover {boek.titel}" />
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
export default Bibliotheek;