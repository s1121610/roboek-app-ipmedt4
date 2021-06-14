import React from "react"

const invoer = (props) => {
  return (
    <section className="woordzoeker__invoer">
      <h2>{props.gevonden}/{props.aantal} woorden gevonden.</h2>
      <form>
        <input type="text" name="woord" id="woord" placeholder="Voer hier je woord in" />
        <input type="button" value="Zoek" onClick={props.functie}/>
      </form>

    </section>
  )
}

export default invoer;
