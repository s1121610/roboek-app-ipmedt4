import React from 'react';
import '../Genre.css';
import '../Bibliotheek.css'
import axios from "axios";
import { Link } from "react-router-dom";

class Favoriet extends React.Component{
    state = {
        genres: []
    }
    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/bibliotheek/choose/genre`)
          .then(res => {
            const genres = res.data;
            this.setState({ genres });
          })
      }
    render(){
        const addGenreHandler = async(id) => {
            axios.post(`http://127.0.0.1:8000/api/add/favoriet/${id}`)
            .then(res => {
              const persons = res.data;
              this.setState({ persons });
            })
        }
        return(
            <h1>Favoriet</h1>
        );
    }
}

export default Favoriet;