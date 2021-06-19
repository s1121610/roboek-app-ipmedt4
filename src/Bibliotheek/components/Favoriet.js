import React from 'react';
import '../Genre.css';
import '../Bibliotheek.css'

class Favoriet extends React.Component{
    state = {
        favoriete_boeken: [],
        boek_id: '',
        heartColor: false
    }

    updateHeart = (props) => {
        const boekId = 1;
        const favos = this.state.favoriete_boeken;
        if(favos.includes(boekId) === true){
            this.setState({heartColor: true});
        }else{
            this.setState({heartColor: false});
        }
    };
    

    render(){
        return (
            <figure className="like">
                <button 
                    className="hartje"
                    id="js--hartje"
                    data-liked = {this.state.heartColor}
                ></button>   
            </figure>
        );
    }
    
}

export default Favoriet;