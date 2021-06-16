import React from 'react';
import "./Woordzoeker.css";
import "../App.css";
import WoordzoekerMatrix from "./WoordzoekerMatrix";
import WoordzoekerInvoer from "./WoordzoekerInvoer";
import WoordzoekerGevonden from "./WoordzoekerGevonden";
import WoordzoekerBericht from "./WoordzoekerBericht";

const letters = "abcdefghijklmnopqrstuvwxyz";
const woorden = "weerwolf maan dolfje timmie noura leo rood bril";
const woordenMatrix= "0000000000000leon0000weerwolf0d00000u000o0000bril0l00000a000f0rood0m00j000000a00etimmiea000000000n00";
const teGeradenWoorden = woorden.split(" ");
const aantalWoorden = teGeradenWoorden.length;
const lijst = document.getElementsByClassName("woordzoeker__matrix_letter")

var geradenWoorden = [];
var result = ""
var aantalGevondenWoorden = 0;
var aantalGeradenWoorden = geradenWoorden.length;
var woordzoekerMatrix = [];
var aantalFout = 0;
var telOp = true;
var lengteWoord;


const flipMatrixAxis = (horizontalMatrix, width = 10, height = 10) => {
    for (let widthIndex = 0; widthIndex < width; widthIndex++) {
        for (let heightIndex = 0; heightIndex < height; heightIndex++) {
            result += horizontalMatrix[(heightIndex * height) + widthIndex]
        }
    }
}

const streepDoorHorizontaal = (woord, hint) => {
  lengteWoord = woord.length;
  var plekInHorizontaal = woordenMatrix.search(woord);
  for(var i = 0; i < lengteWoord; i++){
      var plekInLijstHorizontaal = plekInHorizontaal + i;
      if(plekInLijstHorizontaal < 0){
        break;
      } else {
        if(hint){
          geefKleur(plekInLijstHorizontaal, "oranje");
          break;
        } else {
          geefKleur(plekInLijstHorizontaal, "groen");
        }

      }
  }
}

const geefKleur = (plekInLijst, kleur) => {
  if(kleur === "groen"){
    lijst.item(plekInLijst).style.backgroundColor = "#A1EDA5";
  } else {
    lijst.item(plekInLijst).style.backgroundColor = "#FF8847";
  }

}

const streepDoorVerticaal = (woord, hint) => {
  var positie;
  lengteWoord = woord.length;
  var plekInVerticaal = result.search(woord);
  var array = plekInVerticaal.toString().split("")
  if(array.length === 2){
    positie = array[1] + array[0];
  } else {
    positie = array[0] + 0;
  }
  positie = parseInt(positie);
  for(var i = 0; i < lengteWoord; i++){
    var plekInLijstVerticaal = positie + (i * 10);
    if(plekInVerticaal < 0){
      break;
    } else {
      if(hint){
        geefKleur(plekInLijstVerticaal, "oranje");
        break;
      } else {
        geefKleur(plekInLijstVerticaal, "groen");
      }
    }
  }
}





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
  showHint = () => {
    if(aantalFout === 2){
      document.getElementById("js--hint-button").style.display = "block";
      aantalFout = 0
    } else {
      aantalFout += 1;
    }
  }

  geefHint = () => {
    for(var i = 0; i < aantalWoorden; i++){
      console.log(teGeradenWoorden[i])
      if(geradenWoorden.includes(teGeradenWoorden[i])){
      } else {
        document.getElementById("js--hint-button").style.display = "none";
        streepDoorHorizontaal(teGeradenWoorden[i], "true");
        streepDoorVerticaal(teGeradenWoorden[i], "true");
        break;
      }
    }
  }

  checkWoord = (event) => {
    var input = document.getElementById("woord");
      if(event.key === "Enter" || event === "Enter" ){
        var ingevoerdeWoord = document.getElementById("woord").value;
        ingevoerdeWoord = ingevoerdeWoord.toLowerCase();
        console.log(ingevoerdeWoord)
        for(var i = 0; i < aantalWoorden; i++){
          if(ingevoerdeWoord === ""){
            this.setState({
              bericht: "Je hebt niks ingevoerd. Probeer opnieuw!"
            });
            {this.veranderKleur("#FF8847")};
            telOp = false;
            break;
          } else {
            if(teGeradenWoorden[i] === ingevoerdeWoord){
              if(geradenWoorden.includes(ingevoerdeWoord)){
                this.setState({
                  bericht: "Je hebt dat woord al ingevoerd. Probeer opnieuw!"
                });
                {this.veranderKleur("#FF8847")};
                telOp = false;
                break;
              } else {
                document.getElementById("woord").value = null;
                this.setState({
                  list: [...this.state.list, ingevoerdeWoord],
                  gevonden: this.state.gevonden + 1,
                  bericht: "Hoera! dat woord zit er in, ga zo door!"
                });

                aantalGeradenWoorden += 1;
                geradenWoorden.push(ingevoerdeWoord);
                {this.veranderKleur("#A1EDA5")};
                streepDoorHorizontaal(ingevoerdeWoord);
                streepDoorVerticaal(ingevoerdeWoord);
                aantalFout = 0;

                if(aantalGeradenWoorden === aantalWoorden){
                  console.log("DONE")
                } else {
                  console.log("NOT DONE")
                }

                break;
              }
            } else {
              this.setState({
                bericht: "Dit woord zit er niet in. Probeer opnieuw!"
              });
              {this.veranderKleur("#FF8847")};
              telOp = true;
            }
          }
        }
        if(telOp){
          {this.showHint()};
        }

      }



  }

  veranderKleur = (kleur) => {
    document.getElementById("js--bericht").style.background = kleur;
  }

  render(){
    flipMatrixAxis(woordenMatrix)
    return (
      <article className="woordzoeker">
        <WoordzoekerMatrix matrix={woordzoekerMatrix}/>
        <WoordzoekerInvoer gevonden={this.state.gevonden} aantal={aantalWoorden} functie={this.checkWoord}/>
        <WoordzoekerBericht bericht={this.state.bericht} functie={this.geefHint}/>
        <WoordzoekerGevonden list={this.state.list}/>
      </article>
    )
  }


}

export default WoordzoekerPuzzel;
