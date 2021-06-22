import React from "react"

const bericht = (props) => {
  return(
    <section className="woordzoeker__bericht container">
      <p className="woordzoeker__bericht__tekst" id="js--bericht">{props.bericht}</p>
      <button className="woordzoeker__bericht__hint button" id="js--hint-button" onClick={props.functie}>Geef hint</button>
    </section>
  )
}

export default bericht;
