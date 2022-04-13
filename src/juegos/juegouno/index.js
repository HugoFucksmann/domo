import React, { useContext } from 'react';

import Game1 from './game1';
import SpeedDialComp from '../../components/speedDialComp';
import ModalResult from './modalResult';
import { AppContext } from '../../context/appContext';

import StartScreen from '../../components/startScreen';
import GameIndexLayout from '../../layout/gameIndexLayout';

const JuegoUno = () => {
	const { startG, startGameOne } = useContext(AppContext);

	return (
		<>
			{!startG ? (
				<StartScreen intro={introGame1} startFunc={startGameOne} />
			) : (
				<Game1 />
			)}

			<ModalResult />
			<SpeedDialComp />
		</>
	);
};

const introGame1 = {
	title: 'Mitos del Amor romántico',
	txt: `¿Qué son los mitos del amor romántico? Son ideas y creencias que
  no cuesta poner en discusión y que nos dicen cómo debe ser una
  relación amorosa para que sea “amor verdadero”.`,
	txt2: `¿Te suenan estas frases? Las escuchamos en el cine, en las letras
  de las canciones, en las publicidades, en las conversaciones con
  amig@s… Uní estas afirmaciones con el mito con que está
  relacionada.`,
};

export default JuegoUno;
