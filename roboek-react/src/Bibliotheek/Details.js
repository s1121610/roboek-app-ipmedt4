import React from 'react';
import './Details.css';
import axios from "axios";

class Details extends React.Component{
    state = {
        persons: []
      }
    
      componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/details/1`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }

    render(){
        return (
      <section>
        <h1>Bibliotheek</h1>
        
      </section>
    );
    }
}
export default Details;