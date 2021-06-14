import React from "react"

const bericht = (props) => {
  return(
    <section className="woordzoeker__bericht">
      <p id="js--bericht">{props.bericht}</p>
      <button>Geef hint</button>
    </section>
  )
}

export default bericht;
