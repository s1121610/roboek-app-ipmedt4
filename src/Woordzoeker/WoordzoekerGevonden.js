import React from "react";

const gevonden = (props) => {
  const gevondenLijst = props.list.map(x => <li key={x}> {x} </li>);


  return (
    <section className="woordzoeker__geraden">
      <h3>Gevonden woorden</h3>
      <ul>{gevondenLijst}</ul>
    </section>
  )

}

export default gevonden;
