import { useContext } from 'react';
import SpeedDialComp from '../../components/speedDialComp';
import StartScreen from '../../components/startScreen';
import { AppContext } from '../../context/appContext';
import { startInfo } from '../../context/dataJuegoGlosario';
import ModalResult from '../juegouno/modalResult';

import Game3 from './game3';
import { isMobile } from './../../styles/isMobile';

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
				<div
					style={{ width: '100%', marginTop: isMobile() ? '20%' : 0 }}
				>
					<Game3 />
				</div>
			)}

			<ModalResult />
			<SpeedDialComp />
		</>
	);
};

export default JuegoTres;
