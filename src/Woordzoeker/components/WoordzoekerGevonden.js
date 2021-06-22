import React from "react";

const gevonden = (props) => {
  const gevondenLijst = props.list.map(x => <li key={x}> {x} </li>);


  return (
    <section className="woordzoeker__geraden container">
      <h3 className="woordzoeker__geraden__titel">Gevonden woorden:</h3>
      <ul className="woordzoeker__geraden__lijst">{gevondenLijst}</ul>
    </section>
  )

}

export default gevonden;
