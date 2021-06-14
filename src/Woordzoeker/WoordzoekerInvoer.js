import React from "react"

const invoer = (props) => {
  return (
    <section className="woordzoeker__invoer">
      <h2>{props.gevonden}/{props.aantal} woorden gevonden.</h2>

      <input type="text" name="woord" id="woord" placeholder="Voer hier je woord in" />
      <button onClick={props.functie}> zoek </button>


    </section>
  )
}

export default invoer;
