import React, { createContext, Component } from "react";

export const AppContext = createContext();

class AppProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataJuegoUno: dataJuegoUno,
      dataJuegoDos: dataJuegoDos,
      datosPersona: {
        edad: 0,
        tipo: [],
      },
      activeStep: 0,
      score: 0,
      openModal: false,
      dataModal: { correcto: null, txt: "" },
      startG: false,
    };
  }

  /*   async componentDidMount() {

  } */

  handlerStep = (correcta, selec) => {
    console.log(correcta, selec);
    if (correcta === selec) {
      this.setState({
        score: this.state.score + 1,
        activeStep: this.state.activeStep + 1,
      });
    } else {
      this.setState({
        activeStep: this.state.activeStep + 1,
      });
    }
  };

  handlerModalOpen = (correcta, selec, modalTxt) => {
    if (correcta === selec) {
      this.setState({
        score: this.state.score + 1,
        dataModal: { correcto: "correcta", txt: modalTxt },
        openModal: true,
      });
    } else {
      this.setState({
        dataModal: { correcto: "inccorrecta", txt: modalTxt },
        openModal: true,
      });
    }
  };

  handlerModalClose = () => {
    this.setState({
      openModal: false,
      activeStep: this.state.activeStep + 1,
    });
  };

  handlerStart = () => {
    this.setState({
      startG: !this.state.startG,
    });
  };

  handlerPersona2 = (attr, dato, bool) => {
    switch (attr) {
      case "edad":
        this.setState({
          ...this.state.datosPersona,
          datosPersona: { edad: dato },
        });
        break;
      case "tipo":
        if (bool)
          this.setState({
            ...this.state.datosPersona,
            datosPersona: { tipo: [...this.state.datosPersona.tipo, dato] },
          });
        else {
          let filter = this.state.datosPersona.tipo.filter(
            (ops) => ops !== dato
          );
          this.setState({
            ...this.state.datosPersona,
            tipo: filter,
          });
        }

        break;

      default:
        break;
    }
  };

  handlerPersona = (datos) => {
    this.setState({
      datosPersona: datos,
    });
  };

  reStart = () => {
    this.setState({
      datosPersona: {
        tipo: [],
        edad: 0,
      },
      activeStep: 0,
      score: 0,
      startG: false,
    });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          handlerModalClose: this.handlerModalClose,
          handlerModalOpen: this.handlerModalOpen,
          handlerStep: this.handlerStep,
          handlerPersona: this.handlerPersona,
          handlerStart: this.handlerStart,
          reStart: this.reStart,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

const dataJuegoUno = [
  {
    preg: "1 la contaminacion de botellas en la laguna setubal se soluciona en:",
    correcto: 1,
    respuestas: [
      {
        txt: "dejar de tirar  en los espacios publicos dejar de tirar  en los espacios publicos dejar de tirar  en los espacios publicos dejar de tirar  en los espacios publicos",
        modalText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      },
      {
        txt: "dejar de tirar residuos en los espacios publicos dejar de tirar  en los espacios publicos dejar de tirar  en los espacios publicos",
        modalText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      },
      {
        txt: "dejar de tirar residuos en los",
        modalText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      },
      {
        txt: "dejar de tirar residuos en los espacios publicos",
        modalText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      },
    ],
  },
  {
    preg: "2 la contaminacion de botellas en la laguna setubal se soluciona en:",
    correcto: 2,
    respuestas: [
      {
        txt: "dejar de tirar  en los espacios publicos",
        modalText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      },
      {
        txt: "dejar de tirar residuos en los espacios publicos",
        modalText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      },
      {
        txt: "dejar de tirar residuos en los",
        modalText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      },
      {
        txt: "dejar de tirar residuos en los espacios publicos",
        modalText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      },
    ],
  },
  {
    preg: "3 la contaminacion de botellas en la laguna setubal se soluciona en:",
    correcto: 3,
    respuestas: [
      {
        txt: "dejar de tirar  en los espacios publicos",
        modalText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      },
      {
        txt: "dejar de tirar residuos en los espacios publicos",
        modalText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      },
      {
        txt: "dejar de tirar residuos en los",
        modalText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      },
      {
        txt: "dejar de tirar residuos en los espacios publicos",
        modalText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      },
    ],
  },
  {
    preg: "4 la contaminacion de botellas en la laguna setubal se soluciona en:",
    correcto: 3,
    respuestas: [
      {
        txt: "dejar de tirar  en los espacios publicos",
        modalText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      },
      {
        txt: "dejar de tirar residuos en los espacios publicos",
        modalText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      },
      {
        txt: "dejar de tirar residuos en los",
        modalText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      },
      {
        txt: "dejar de tirar residuos en los espacios publicos",
        modalText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      },
    ],
  },
  {
    preg: "5la contaminacion de botellas en la laguna setubal se soluciona en:",
    correcto: 4,
    respuestas: [
      {
        txt: "dejar de tirar  en los espacios publicos",
        modalText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      },
      {
        txt: "dejar de tirar residuos en los espacios publicos",
        modalText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      },
      {
        txt: "dejar de tirar residuos en los",
        modalText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      },
      {
        txt: "dejar de tirar residuos en los espacios publicos",
        modalText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      },
    ],
  },
];

const dataJuegoDos = [
  {
    tipo: {
      op1: true,
      op2: false,
      op3: true,
      op4: false,
    },
    pregunta:
      "1. esta es la primer pregunta, responde con si o con no, cual es ??",
    respuesta: "true",
  },
  {
    pregunta:
      "2. esta es la segunda pregunta, responde con si o con no, cual es ??",
    respuesta: "false",
  },
  {
    pregunta:
      "3. esta es la tercera pregunta, responde con si o con no, cual es ??",
    respuesta: "true",
  },
  {
    pregunta:
      "4. esta es la cuarta pregunta, responde con si o con no, cual es ??",
    respuesta: "true",
  },
];

export default AppProvider;
