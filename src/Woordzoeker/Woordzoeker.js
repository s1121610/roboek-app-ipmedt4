import React from 'react';
import "./Woordzoeker.css";
import WoordzoekerMatrix from "./WoordzoekerMatrix";

const letters = "abcdefghijklmnopqrstuvwxyz";
const woorden = "weerwolf maan dolfje timmie noura leo rood bril";
const woordenMatrix= "0000000000000leon0000weerwolf0000j00u000000f0bril0000l00a00000rood0m00000d000a000timmiea000000000n00";
const teGeradenWoorden = woorden.split(" ");
const aantalWoorden = teGeradenWoorden.length;
var geradenWoorden = [];
var aantalGeradenWoorden = geradenWoorden.length;
var woordzoekerMatrix = [];

for(var i = 0; i < woordenMatrix.length; i++){
  var letter;
  if(woordenMatrix[i] === "0"){
    letter = letters[Math.floor(Math.random() * 26)];
  } else {
    letter = woordenMatrix[i];
  }
  woordzoekerMatrix.push(<li key={i} className="woordzoeker__matrix_letter"> {letter} </li>)
}


class WoordzoekerPuzzel extends React.Component {
  state = { bericht: "", list: [], gevonden: 0};

  render(){
    console.log(this.state.list);

    return (
      <article className="woordzoeker">
        <WoordzoekerMatrix matrix={woordzoekerMatrix}/>
      </article>
    )
  }


}

export default WoordzoekerPuzzel;
