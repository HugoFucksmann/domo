import { useContext } from 'react';
import SpeedDialComp from '../../components/speedDialComp';
import StartScreen from '../../components/startScreen';
import { AppContext } from '../../context/appContext';
import { startInfo } from '../../context/dataJuegoGlosario';
import GameIndexLayout from '../../layout/gameIndexLayout';
import ModalResult from '../juegouno/modalResult';

import Game3 from './game3';

const JuegoTres = () => {
	const { startG, handlerStartGlosario } = useContext(AppContext);

	return (
		<>
			{!startG ? (
				<StartScreen
					intro={startInfo}
					startFunc={handlerStartGlosario}
				/>
			) : (
				<Game3 />
			)}

			<ModalResult />
			<SpeedDialComp />
		</>
	);
};

export default JuegoTres;
