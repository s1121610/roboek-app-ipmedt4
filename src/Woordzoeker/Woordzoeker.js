import React from 'react';
import "./Woordzoeker.css";
import WoordzoekerMatrix from "./WoordzoekerMatrix";
import WoordzoekerInvoer from "./WoordzoekerInvoer";
import WoordzoekerGevonden from "./WoordzoekerGevonden";
import WoordzoekerBericht from "./WoordzoekerBericht";

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

  checkWoord = () => {
    var ingevoerdeWoord = document.getElementById("woord").value;


    for(var i = 0; i < aantalWoorden; i++){
      if(ingevoerdeWoord === ""){
        this.setState({
          bericht: "Je hebt niks ingevoerd. Probeer opnieuw!"
        });
        break;
      } else {
        if(teGeradenWoorden[i] === ingevoerdeWoord){
          if(geradenWoorden.includes(ingevoerdeWoord)){
            this.setState({
              bericht: "Je hebt dat woord al ingevoerd. Probeer opnieuw!"
            });
            break;
          } else {
            document.getElementById("woord").value = null;
            this.setState({
              list: [...this.state.list, ingevoerdeWoord],
              gevonden: this.state.gevonden + 1,
              bericht: "Hoera! dat woord zit er in, ga zo door!"
            });
            geradenWoorden.push(ingevoerdeWoord);
            break;
          }
        } else {
          this.setState({
            bericht: "Dit woord zit er niet in. Probeer opnieuw!"
          })
        }
      }
    }
  }



  render(){
    return (
      <article className="woordzoeker">
        <WoordzoekerMatrix matrix={woordzoekerMatrix}/>
        <WoordzoekerInvoer gevonden={this.state.gevonden} aantal={aantalWoorden} functie={this.checkWoord}/>
        <WoordzoekerBericht bericht={this.state.bericht}/>
        <WoordzoekerGevonden list={this.state.list}/>
      </article>
    )
  }


}

export default WoordzoekerPuzzel;
