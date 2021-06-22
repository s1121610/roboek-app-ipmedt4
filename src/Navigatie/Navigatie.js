import React from "react";
import ReactDom from "react-dom";

import DesktopNav from "../Navigatie/DesktopNavigatie";
import MobileHeader from "../UniverseelComponents/MobileHeader";
import MobileNavigatie from "../Navigatie/MobileNavigatie";

class Navigatie extends React.Component{
  constructor() {
    super();

    this.state = {
      height: 0,
      width: 0
    };

    window.addEventListener("resize", this.update);
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  };

  render(){
    let navigatie;

    if(this.state.width < 750){
      navigatie = <section> <MobileHeader titel={this.props.titel} link={this.props.link} classNames={this.props.classNames}/> <MobileNavigatie /> </section>;
    }
    else{
      navigatie = <section> <DesktopNav link={this.props.link} /> </section>;
    }

    return(
      <section>
        {navigatie}
      </section>


    )
  }
}

export default Navigatie;
