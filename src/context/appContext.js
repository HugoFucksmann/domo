import React, { createContext, Component } from 'react';
import shuffle from '../helper/shuffleArr';
import {
	dataJuegoCerebro,
	juegoCerebroMensajeFinal,
	JuegoCerebroOpciones,
} from './dataJuegoCerebro';
import { dataJuegoMitos } from './dataJuegoMitos';
import { dataGlosario } from './dataJuegoGlosario';

export const AppContext = createContext();

class AppProvider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			ruta: 'home',
			shadow: 5,
			dataJuegoUno: dataJuegoMitos,
			indexJuegoUno: 0,
			dataJuegoDos: dataJuegoCerebro,
			dataGlosario: dataGlosario,
			datosPersona: {
				edad: 0,
				tipo: [],
			},
			activeStep: 0,
			score: 0,
			openModal: false,
			dataModal: { title: '', txt: `` },
			startG: false,
			showEff: true,
			game2Opciones: JuegoCerebroOpciones,
		};
	}

	setRuta = (ruta) => {
		this.setState({
			ruta: ruta,
		});
	};

	handlerStep = (correcta, selec) => {
		if (correcta === selec) {
			this.setState({
				score: this.state.score + 1,
				activeStep: this.state.activeStep + 1,
				showEff: true,
			});
		} else {
			this.setState({
				activeStep: this.state.activeStep + 1,
				showEff: true,
			});
		}
	};

	handlerModalOpen = (correcta, selec, modalTxt) => {
		if (correcta === selec) {
			this.setState({
				score: this.state.score + 1,
				dataModal: { title: ``, txt: modalTxt },
				openModal: true,
			});
		} else {
			this.setState({
				dataModal: { correcto: `inccorrecta`, txt: modalTxt },
				openModal: true,
			});
		}
	};

	handlerModalOpenGameOne = (correcta, selec, modalTxt) => {
		if (correcta === selec) {
			this.setState({
				dataModal: { title: correcta, txt: modalTxt },
				openModal: true,
			});
		} else {
			this.setShowEff();
			setTimeout(() => {
				this.setShowEff();
			}, 900);
		}
	};

	handlerModalOpenGlosario = (action, data, icons) => {
		this.setShowEff();
		/* console.log(action);
		console.log(data);
		console.log(icons); */
		if (action === true) {
			this.setState({
				dataModal: {
					title: data.afirmacion[0].acuerdo.title,
					txt: data.afirmacion[0].acuerdo.txt,
					icons: icons.desacuerdo,
				},
				openModal: true,
			});
		} else {
			this.setState({
				dataModal: {
					title: data.afirmacion[0].desacuerdo.title,
					txt: data.afirmacion[0].desacuerdo.txt,
					icons: icons.acuerdo,
				},
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
		let finalResult = [];
		let condition = [];
		let result = [];
		const perfil = this.state.datosPersona.tipo.map((obj) => obj.op);
		const array = perfil.map((opPerf) =>
			dataJuegoCerebro.filter((obj) => obj.perfil.includes(opPerf))
		);

		//------------ arr condition -----------------------

		if (perfil.includes('f')) {
			let f = dataJuegoCerebro.filter(
				(obj) =>
					obj.num === 19 ||
					obj.num === 20 ||
					obj.num === 24 ||
					obj.num === 38
			);
			condition = [...condition, ...f];
		}
		if (perfil.includes('g')) {
			let g = dataJuegoCerebro.filter(
				(obj) => obj.num === 23 || obj.num === 26 || obj.num === 28
			);
			condition = [...condition, ...g];
		}
		if (perfil.includes('h')) {
			let h = dataJuegoCerebro.filter(
				(obj) => obj.num === 29 || obj.num === 30 || obj.num === 31
			);
			condition = [...condition, ...h];
		}
		//------------ -----------------------
		//------------ arr all op -----------------------

		array.map((arr) => {
			result = [...result, ...arr];
		});

		condition.map((objC) => {
			let filter = result.filter((objR) => objR.num !== objC.num);
			result = [...result, ...filter];
		});

		result = result.filter((item, index) => {
			return result.indexOf(item) === index;
		});

		result = shuffle(result);

		//-----------------------------------

		finalResult = [...condition, ...result].slice(0, 10);

		this.setState({
			dataJuegoDos: finalResult,
			startG: !this.state.startG,
		});
	};
	//seguir, con error
	handlerStartGlosario = () => {
		let finalResult = [];
		this.state.dataGlosario.map((obj) => {
			let finalAfirmacion = shuffle(obj.afirmacion).slice(0, 1);
			finalResult.push({
				...obj,
				afirmacion: finalAfirmacion,
			});
		});

		this.setState({
			dataGlosario: finalResult,
			startG: !this.state.startG,
		});
	};

	handlerPersonaOp = (e, option, edad) => {
		if (e && option.op === 'b' && edad < 16) {
			this.setState({
				datosPersona: {
					...this.state.datosPersona,
					tipo: [{ op: 'a', txt: 'Con mi familia de origen' }],
				},
			});
		} else if (e)
			this.setState({
				datosPersona: {
					...this.state.datosPersona,
					tipo: [...this.state.datosPersona.tipo, option],
				},
			});
		else if (!e && option.op === 'b' && edad < 16) {
			this.setState({
				datosPersona: { ...this.state.datosPersona, tipo: [] },
			});
		} else {
			let filter = this.state.datosPersona.tipo.filter(
				(ops) => ops !== option
			);
			this.setState({
				datosPersona: { ...this.state.datosPersona, tipo: filter },
			});
		}
	};

	handlerEdad = (edad) => {
		this.setState({
			datosPersona: { ...this.state.datosPersona, edad: edad },
		});
	};

	reStart = () => {
		this.setState({
			datosPersona: {
				tipo: [],
				edad: 0,
			},
			showEff: true,
			activeStep: 0,
			score: 0,
			startG: false,
			openModal: false,
		});
	};

	setShowEff = () => {
		this.setState({
			showEff: !this.state.showEff,
		});
	};

	startGameOne = () => {
		let index = Math.floor(Math.random() * (2 - 0 + 1) + 0);

		this.setState({
			startG: !this.state.startG,
			indexJuegoUno: index,
		});
	};

	handleMsjFinalCerebro = () => {
		function handleSelect(datosPersona) {
			let primero = ['f', 'g', 'h'];
			let segundo = ['b'];
			//let tercero = ["d", "e"];
			if (datosPersona.tipo.length === 1) {
				return datosPersona.tipo.map((obj) => obj.op).toString();
			} else if (
				datosPersona.tipo.filter((obj) => primero.includes(obj.op))
					.length > 0
			) {
				return 'h';
			} else if (
				datosPersona.tipo.filter((obj) => segundo.includes(obj.op))
					.length > 0
			) {
				return 'b';
			} else {
				return 'd';
			}
		}

		const [{ msjf }] = juegoCerebroMensajeFinal.filter(
			(obj) => obj.option === handleSelect(this.state.datosPersona)
		);

		if (this.state.score > 5) return msjf.mas50;
		else return msjf.menos50;
	};

	render() {
		return (
			<AppContext.Provider
				value={{
					...this.state,
					handlerModalClose: this.handlerModalClose,
					handlerModalOpen: this.handlerModalOpen,
					handlerStep: this.handlerStep,
					handlerPersonaOp: this.handlerPersonaOp,
					handlerStart: this.handlerStart,
					reStart: this.reStart,
					setShowEff: this.setShowEff,
					handlerEdad: this.handlerEdad,
					startGameOne: this.startGameOne,
					handlerModalOpenGameOne: this.handlerModalOpenGameOne,
					handleMsjFinalCerebro: this.handleMsjFinalCerebro,
					handlerModalOpenGlosario: this.handlerModalOpenGlosario,
					setRuta: this.setRuta,
					handlerStartGlosario: this.handlerStartGlosario,
				}}
			>
				{this.props.children}
			</AppContext.Provider>
		);
	}
}

export default AppProvider;
