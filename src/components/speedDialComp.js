import { forwardRef, useContext, useState } from 'react';
import {
	Backdrop,
	Slide,
	SpeedDial,
	SpeedDialAction,
} from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TypographyStyled from '../components/typografyStyled';

import sizeLetter from '../styles/fontSize';
import colores from '../styles/colors';
import { AppContext } from '../context/appContext';
import { isMobile } from '../styles/isMobile';

const actions = [
	{ icon: <ArrowBackIcon />, name: 'volver' },
	/*  { icon: <InfoOutlinedIcon />, name: "informacion", title: ``, txt: `` }, */
	{
		icon: <AutoFixHighOutlinedIcon />,
		name: 'instrucciones',
		title: `Cerebros Recargados`,
		txt: `¿Cuánto espacio ocupan en tu cabeza las tareas del hogar y el cuidado de las  personas ?  Contesta por SÍ o por NO éste cuestionario
     y al final del mismo sabrás cuánto espacio tenés en tu cabeza para dedicarle a nuevos proyectos, sueños, ocio y disfrute del tiempo libre.`,
	},
];

function instruccionesInfo(tipo) {
	switch (tipo) {
		case 'JuegoUno':
			return {
				title: `MITOS DEL AMOR ROMÁNTICO`,
				txt: `Uní estas afirmaciones con el mito con que está relacionada. En caso que l@s participantes elijan una opción INCORRECTA, se comunicará imposibilitando pulsar el botón que  avance a la siguiente frase. En este caso, deberá elegir otras opciones hasta dar con la correcta para avanzar. El juego exige pasar por seis frases, cada una de las cuales está unida a un “mito del amor romántico”`,
			};
			break;
		case 'JuegoDos':
			return {
				title: `Cerebros Recargados`,
				txt: `¿Cuánto espacio ocupan en tu cabeza las tareas del hogar y el cuidado de las  personas ?  Contesta por SÍ o por NO éste cuestionario
        y al final del mismo sabrás cuánto espacio tenés en tu cabeza para dedicarle a nuevos proyectos, sueños, ocio y disfrute del tiempo libre.`,
			};
			break;

		default:
			return {
				title: 'LA DIVERSIDAD EN JUEGO',
				txt: '¿De qué hablamos cuando hacemos referencia a personas LGBTIQ+? ¿Qué hay detrás de ese conjunto de letras? Este juego te invita a poner la diversidad en juego y a descubrir qué identidades y experiencias están representadas en esta sigla.',
			};
			break;
	}
}

const SpeedDialComp = () => {
	const { ruta, setRuta } = useContext(AppContext);
	const [open, setOpen] = useState(false);
	const [openModal, setOpenModal] = useState(false);

	return (
		<div style={{ height: '100%', width: '100%' }}>
			<Backdrop open={open} />
			<SpeedDial
				onMouseEnter={() => setOpen(true)}
				onMouseLeave={() => setOpen(false)}
				ariaLabel='S'
				direction={isMobile() ? 'down' : 'up'}
				sx={{
					position: 'absolute',
					bottom: !isMobile() && 35,
					top: isMobile() && 35,
					right: 35,
				}}
				FabProps={{
					sx: {
						bgcolor: colores.mainPink,
						'&:hover': {
							bgcolor: colores.mainPink,
						},
					},
				}}
				icon={<MenuOutlinedIcon />}
				/*   FabProps={{
          color: "brainBg",
        }} */
			>
				{actions.map((action) => (
					<SpeedDialAction
						/*  FabProps={{
              color: "brainBg",
            }} */
						tooltipOpen
						key={action.name}
						icon={action.icon}
						tooltipTitle={action.name}
						onClick={() => {
							action.name === 'volver'
								? setRuta('home')
								: setOpenModal(true);
						}}
					/>
				))}
			</SpeedDial>
			<ModalOptions
				open={openModal}
				handleClose={setOpenModal}
				type={ruta}
			/>
		</div>
	);
};

const ModalOptions = ({ open, handleClose, type }) => {
	return (
		<Dialog
			maxWidth='md'
			open={open}
			onClose={() => handleClose(false)}
			aria-labelledby='responsive-dialog-title'
			TransitionComponent={Transition}
			PaperProps={{
				style: {
					padding: 30,
					borderRadius: 15,
					backgroundColor: '#F3F6F9',
					borderRight: `8px solid ${colores.mainPurple}`,
				},
			}}
		>
			<DialogTitle id='responsive-dialog-title'>
				<TypographyStyled
					style={{
						fontSize: sizeLetter.big,
						color: colores.mainPurple,
					}}
				>
					{instruccionesInfo(type).title}
				</TypographyStyled>
			</DialogTitle>
			<DialogContent>
				<DialogContentText>
					<TypographyStyled style={{ fontSize: sizeLetter.normal }}>
						{instruccionesInfo(type).txt}
					</TypographyStyled>
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button
					variant='contained'
					style={{ backgroundColor: colores.mainPurple }}
					onClick={() => handleClose(false)}
					autoFocus
				>
					<TypographyStyled style={{ fontSize: sizeLetter.small }}>
						volver
					</TypographyStyled>
				</Button>
			</DialogActions>
		</Dialog>
	);
};

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});

export default SpeedDialComp;
