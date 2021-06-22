import React from "react"

const invoer = (props) => {
  return (
    <section className="woordzoeker__invoer container">
      <h2 className="woordzoeker__invoer__titel">Zoek de {props.aantal} woorden!</h2>
      <h3 className="woordzoeker__invoer__aantal">{props.gevonden}/{props.aantal} woorden gevonden.</h3>
      <input className="woordzoeker__invoer__invoerTekst" type="text" name="woord" id="woord" placeholder="Voer hier je woord in" onKeyPress={props.functie}/>
      <button className="woordzoeker__invoer__knop button_blue" type="button" onClick={() => props.functie("Enter")}> zoek </button>


    </section>
  )
}

export default invoer;
