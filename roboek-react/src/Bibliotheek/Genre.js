import React from 'react';
import './Genre.css';
import axios from "axios";
import { Link } from "react-router-dom";

class Genre extends React.Component{
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
        return(
            <main>
                <h1>Bibliotheek</h1>
                <ul>
                    {this.state.genres.map(genre => <li>
                        <Link to={'/bibliotheek/' + genre.naam}>{genre.naam}</Link>
                    </li>)}
                    <li><Link to={'/bibliotheek/'}>Alle boeken</Link></li>
                </ul>
            </main>
        );
    }
}

export default Genre;