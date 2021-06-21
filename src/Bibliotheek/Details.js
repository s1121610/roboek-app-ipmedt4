import React from 'react';
import './Details.css';
import axios from "axios";

import { Link } from "react-router-dom";



class Details extends React.Component{
    state = {
        gekozen_boeken: [],
        persons: [],
        boek_id: '',
        buttonText: ""
      }
      updateButton = (props) =>{
        const id = this.state.boek_id;
        const gekozen = this.state.gekozen_boeken;
        if(gekozen.includes(id) === true){
          this.setState({buttonText: "Dit boek niet meer lezen"});
        }else{
          this.setState({buttonText: "Dit boek lezen"});
        }
      }
     
      componentDidMount = (props) => {
        let idReq = window.location.pathname.split('/')[2];
        axios.get(`http://127.0.0.1:8000/api/bibliotheek/details/` + idReq)
          .then(res => {
            const boeken = res.data;
            this.setState({ persons: boeken.boeken });
            this.setState({ gekozen_boeken: boeken.gekozen })
            const id = boeken.boeken[0].id;
            if(boeken.gekozen.includes(id) === true){
              this.setState({buttonText: "Dit boek niet meer lezen"});
            }else{
              this.setState({buttonText: "Dit boek lezen"});
            }
          });
        
      }
    
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      if(this.state.buttonText === "Dit boek lezen"){
        axios.post('http://127.0.0.1:8000/api/boekenlijst/add/' + this.state.boek_id, {"id": this.state.boek_id}).then(res => {
          console.log(res);
          const boeken = res.data;
          const id = boeken.boeken[0].id;
          if(boeken.gekozen.includes(id) === true){
            this.setState({buttonText: "Dit boek niet meer lezen"});
          }else{
            this.setState({buttonText: "Dit boek lezen"});
          }
        });
      }else{
        axios.delete('http://127.0.0.1:8000/api/boekenlijst/delete/' + this.state.boek_id, {"id": this.state.boek_id}).then(res => {
          console.log(res);
          const boeken = res.data;
          const id = boeken.boeken[0].id;
          if(boeken.gekozen.includes(id) === true){
            this.setState({buttonText: "Dit boek niet meer lezen"});
          }else{
            this.setState({buttonText: "Dit boek lezen"});
          }
        });
      }
      
    };
    render(){
      let addButton;

      if(this.state.buttonText !== ""){
        addButton = <button className="u-button" onClick={this.handleClick}>{this.state.buttonText}</button>
      }

      return (
      <section>
        <h1>Bibliotheek</h1>
        {this.state.persons.map(boek => <div>
          <article className="bookcard--details" onLoad={() =>this.setState({ boek_id: boek.id }) }>
              <header>
                <div className="genre">
                  <p data-genre={boek.genre_naam} className="genre__naam">{boek.genre_naam}</p>
                </div>
                <img className="bookcard__cover bookcard__cover--details" src={"/bibliotheek/" + boek.image} alt="cover {boek.titel}"/>
                <h2>{boek.titel}</h2>
                <p>{boek.auteur}</p>
              </header>
              <section>
                <p>{boek.beschrijving}</p>
              </section>
              <section className="u-buttonSection">
                {addButton}
              </section>
          </article>
        </div>)}
      </section>
    );
    }
}
export default Details;