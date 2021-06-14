import React from 'react';
import '../Genre.css';
import '../Bibliotheek.css'

const Favoriet = (props) => {
    const id = props.favoriet;
    return (
        <figure className="like">
            <button 
                className="hartje"
                id="js--hartje"
                onClick={() => props.clickHandler(id)}
                data-liked = "true"
            ></button>    
        </figure>
    );
}

export default Favoriet;