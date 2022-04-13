import React, { createContext, Component } from "react";
import shuffle from "../helper/shuffleArr";
import {
  dataJuegoCerebro,
  juegoCerebroMensajeFinal,
  JuegoCerebroOpciones,
} from "./dataJuegoCerebro";
import { dataJuegoMitos } from "./dataJuegoMitos";
import { dataGlosario } from "./dataJuegoGlosario";

export const MitosContext = createContext();

class MitosProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataJuegoUno: dataJuegoMitos,
      indexJuegoUno: 0,
      activeStep: 0,
      score: 0,
      openModal: false,
      dataModal: { title: "", txt: `` },
      startG: false,
      showEff: true,
      game2Opciones: JuegoCerebroOpciones,
    };
  }

  render() {
    return (
      <MitosContext.Provider
        value={{
          ...this.state,
        }}
      >
        {this.props.children}
      </MitosContext.Provider>
    );
  }
}

export default MitosProvider;
