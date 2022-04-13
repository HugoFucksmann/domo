import React, { useContext } from 'react';
import {
	Card,
	Tabs,
	Typography,
	Zoom,
	Grid,
	Fade,
	Button,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import colores from '../../styles/colors';
import sizeLetter from '../../styles/fontSize';
import SpringTxt from '../../components/springTxt';
import { useSpring, animated } from 'react-spring';
import { AppContext } from '../../context/appContext';
import FinalCard from '../../components/finalCard';
import { finalMsjGlosario } from '../../context/dataJuegoGlosario';
import { dataGlosario } from '../../context/dataJuegoGlosario';
import { isMobile } from '../../styles/isMobile';

import GreenEmoji from '../../assets/emojis/Emojis-04.svg';
import yellowEmoji from '../../assets/emojis/Emojis-05.svg';
import redEmoji from '../../assets/emojis/Emojis-08.svg';

export default function VerticalTabs() {
	const {
		activeStep,

		score,

		dataGlosario,
	} = useContext(AppContext);
	const classes = useStyles();

	if (dataGlosario[activeStep] === undefined)
		return (
			<FinalCard
				msjf={
					score > 4
						? finalMsjGlosario.correcto
						: finalMsjGlosario.incorrecto
				}
			/>
		);

	return (
		<Grid container spacing={2} className={classes.centerContent}>
			<Grid
				item
				md={2}
				xs={12}
				style={{
					display: 'flex',
					flexDirection: isMobile() ? 'row' : 'column',
				}}
			>
				{dataGlosario.map((obj, i) => (
					<BtnStep data={obj} i={i} activeStep={activeStep} />
				))}
			</Grid>
			<Grid item md={8} xs={12}>
				<CardContent data={dataGlosario[activeStep]} i={activeStep} />
			</Grid>
		</Grid>
	);
}

const CardContent = ({ data, i }) => {
	const { openModal } = useContext(AppContext);
	const classes = useStyles();
	console.log(data);
	return (
		<Card key={data.title} className={classes.panelCard}>
			<Grid container spacion={3} className={classes.gridContainer}>
				<Grid item xs={12} className={classes.centerContent}>
					<Fade in={!openModal} {...{ timeout: 800 }}>
						<Typography className={classes.panelTitle}>
							{data.title}
						</Typography>
					</Fade>
				</Grid>
				<Grid item xs={12} className={classes.centerContent}>
					<SpringTxt
						open={!openModal}
						size={sizeLetter.extraBig}
						txts={data.afirmacion[0]}
					/>
				</Grid>
				<Grid item xs={12} className={classes.centerContent}>
					{EmojiBtnData.map((data) => (
						<div
							className={classes.btnEmoji}
							style={{
								background: `url(${data.emoji}) no-repeat center center`,
							}}
						/>
					))}
				</Grid>
			</Grid>
		</Card>
	);
};

const EmojiBtnData = [
	{ emoji: GreenEmoji, name: 'si' },
	{ emoji: redEmoji, name: 'no' },
	{ emoji: yellowEmoji, name: 'no se' },
];

const BtnStep = ({ data, i, activeStep }) => {
	const classes = styleBtn({ data, i, activeStep });

	return (
		<Zoom in={true} timeout={300 * (i + 1)}>
			<div className={classes.btnStep}>{data.id}</div>
		</Zoom>
	);
};

const useStyles = makeStyles((theme) => ({
	gridContainer: {
		height: '100%',
		display: 'flex',
		textAlign: 'center',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	centerContent: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		textAlign: 'center',
		justifyContent: 'center',
	},
	panelCard: {
		height: '70vh',
		borderRight: `8px solid ${colores.mainStrongTr}`,
		backgroundColor: [colores.mainSoftTr, '!important'],
		padding: 45,
		paddingBottom: 20,
		borderRadius: [15, '!important'],
	},

	gridBtn: {
		display: 'flex',
		textAlign: 'center',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	btnEmoji: {
		cursor: 'pointer',
		height: '12vh',
		width: '12vh',
		marginRight: 20,
		marginLeft: 20,
		filter: 'drop-shadow(5px 5px 5px #222)',
		transition: 'all 0.3s',
		'&:hover': {
			filter: 'drop-shadow(0px 0px 0px #222)',
		},
	},
	panelTitle: {
		fontFamily: 'Poppins',

		fontSize: isMobile()
			? sizeLetter.cellExtraBig
			: [sizeLetter.extraBig, '!important'],
		color: colores.mainStrong,
		fontWeight: 'bold!important',
		marginBottom: 30,
	},
}));

const styleBtn = makeStyles((theme) => ({
	btnStep: {
		marginBottom: 15,
		borderRight: `2px solid #f2f2f2`,
		borderBottom: `2px solid #f2f2f2`,
		backgroundColor: ({ data }) => data.colorSoft,
		borderRadius: '50%!important',
		height: isMobile() ? '10vw' : '9vh',
		width: isMobile() ? '10vw' : '9vh',
		marginLeft: '3vw',
		alignSelf: 'center',
		fontSize: sizeLetter.extraBig,
		color: ({ data, i }) => (i === 6 ? 'black' : '#f2f2f2'),
		fontWeight: 'bold',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		filter: ({ data, i, activeStep }) =>
			i === activeStep
				? 'drop-shadow(-1px -1px 3px #f2f2f2)'
				: 'drop-shadow(3px 3px 5px #222)',
		transform: ({ data, i, activeStep }) =>
			i === activeStep && 'scale(1.15)!important',
		animation: 'all .5s',
	},
}));
