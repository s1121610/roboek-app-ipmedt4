import React from 'react';
import '../Genre.css';
import '../Bibliotheek.css'

const Favoriet = (props) => {
    const id = props.favoriet;
    console.log(id);
    const favos = props.liked;
    console.log(favos);
    let liked;
    if(favos.includes(id) === true){
        liked = true;
        console.log(true);
    }else{
        liked = false;
        console.log(false)
    }
    return (
        <figure className="like">
            <button 
                className="hartje"
                id="js--hartje"
                onClick={() => props.clickHandler(id)}
                data-liked = {liked}
            ></button>   
        </figure>
    );
}

export default Favoriet;