import React from 'react';
import { Card, Grid, Zoom, Fade, Slide } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { useContext } from 'react';
import { AppContext } from '../../context/appContext';
import colores from '../../styles/colors';
import TypographyStyled from '../../components/typografyStyled';
import { isMobile } from '../../styles/isMobile';
import CustomizedSteppers from '../../components/styledStepper';
import SpringTxt from '../../components/springTxt';
import sizeLetter from '../../styles/fontSize';
import FinalCard from '../../components/finalCard';

import '../../styles/shakeeff.css';
import { juegoMitosMFinal } from '../../context/dataJuegoMitos';

const Game1 = () => {
	const {
		dataJuegoUno,
		activeStep,
		handlerModalOpenGameOne,
		openModal,
		indexJuegoUno,
		showEff,
	} = useContext(AppContext);
	const classes = useStyle({ showEff, isMobile: isMobile() });

	if (dataJuegoUno[activeStep] === undefined)
		return <FinalCard msjf={juegoMitosMFinal} />;

	return (
		<Grid
			container
			spacing={isMobile() ? 2 : 5}
			style={{
				paddingRight: '4%',
				paddingLeft: '4%',
				marginTop: isMobile() && 40,
			}}
		>
			<Grid item md={4}>
				<Zoom in={true}>
					<Card elevation={3} className={classes.pregBackg}>
						<SpringTxt
							txts={dataJuegoUno[activeStep].fraces[indexJuegoUno]}
							open={!openModal}
							size={
								isMobile() ? sizeLetter.cellExtraBig : sizeLetter.Big
							}
						/>
					</Card>
				</Zoom>
			</Grid>
			<Grid item md={8} xs={12}>
				<Zoom in={true}>
					<Card elevation={3} className={classes.cardResp}>
						<Grid container spacing={4}>
							<Grid item xs={12} className={classes.gridStepper}>
								<CustomizedSteppers
									activeStep={activeStep}
									numStep={dataJuegoUno}
								/>
							</Grid>
							{dataJuegoUno[activeStep].respuestas.map((frace, i) => (
								<Grid item md={6} xs={12} key={frace}>
									<Slide
										{...{ timeout: 235 * i }}
										direction='left'
										in={!openModal}
									>
										<Card
											variant='outlined'
											className={`${classes.miniCard}  ${
												showEff === false ? 'shake' : ''
											}`}
											onClick={() =>
												showEff === true &&
												handlerModalOpenGameOne(
													dataJuegoUno[activeStep].mito.toUpperCase(),
													frace.toUpperCase(),
													dataJuegoUno[activeStep].final
												)
											}
										>
											<TypographyStyled
												style={{
													fontSize: isMobile()
														? sizeLetter.cellNormal
														: sizeLetter.normal,
												}}
											>
												{frace.toUpperCase()}
											</TypographyStyled>
										</Card>
									</Slide>
								</Grid>
							))}
						</Grid>
					</Card>
				</Zoom>
			</Grid>
		</Grid>
	);
};

const useStyle = makeStyles((theme) => ({
	pregBackg: {
		backgroundColor: [colores.mainSoftTr2, '!important'],
		height: '100%',
		padding: isMobile() ? 15 : 45,
		width: isMobile() && '85vw',
		textAlign: 'center',
		borderRadius: '15px!important',
		filter: `drop-shadow(3px 3px 3px ${colores.mainStrongTr})`,
	},

	gridStepper: {
		marginBottom: 10,
	},
	miniCard: {
		padding: isMobile() ? 10 : 18,
		filter: 'drop-shadow(3px 3px 3px #5A1372)',
		paddingRight: !isMobile() && '16%',
		paddingLeft: !isMobile() && '16%',
		textAlign: 'center',
		color: [colores.mainStrong, '!important'],
		letterSpacing: 1.4,
		height: '100%',

		border: '3px solid #5A1372 !important',
		borderRadius: [15, '!important'],

		cursor: 'pointer',
		transition: 'all 0.5',
		'&:hover': {
			color: ['#fff', '!important'],
			backgroundColor: ({ showEff }) =>
				showEff ? 'rgba(90, 19, 114,.2)' : colores.mainPink,
		},
	},

	cardResp: {
		//boxShadow: `inset -1px -3px 140px -4px ${colores.mainSoft}!important`,
		height: '100%',
		background: 'rgba(247, 247, 247,.9)!important',
		//backgroundColor: [colores.backgSoft, "!important"],
		padding: 40,
		borderRadius: '15px!important',
		borderRight: `8px solid ${colores.mainStrong}`,
	},
}));

export default Game1;
