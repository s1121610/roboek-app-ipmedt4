import React from "react"

const invoer = (props) => {
  return (
    <section className="woordzoeker__invoer">
      <h2 className="woordzoeker__invoer__titel">Zoek de {props.aantal} woorden!</h2>
      <h3 className="woordzoeker__invoer__aantal">{props.gevonden}/{props.aantal} woorden gevonden.</h3>

      <input type="text" name="woord" id="woord" placeholder="Voer hier je woord in" />
      <button onClick={props.functie}> zoek </button>
    </section>
  )
}

export default invoer;
