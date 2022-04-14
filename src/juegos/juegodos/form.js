import {
	Button,
	Card,
	Checkbox,
	Divider,
	FormGroup,
	Grid,
	Zoom,
} from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Slider from '@mui/material/Slider';
import { useContext, useState } from 'react';
import { AppContext } from '../../context/appContext';
import colores from '../../styles/colors';
import { isMobile } from '../../styles/isMobile';
import TypographyStyled from '../../components/typografyStyled';

import sizeLetter from '../../styles/fontSize';
import StartScreen from '../../components/startScreen';

const FormStart = () => {
	const {
		datosPersona,
		handlerPersonaOp,
		handlerEdad,
		handlerStart,
		game2Opciones,
	} = useContext(AppContext);
	const [intro, setIntro] = useState(false);

	function validEdad() {
		return datosPersona.edad > 16;
	}

	function isCompleted() {
		return (
			datosPersona.edad > 0 &&
			datosPersona.tipo &&
			datosPersona.tipo.length > 0
		);
	}

	function disableCheck(i) {
		return (
			(datosPersona.edad === 0 && true) ||
			(i !== 0 && !validEdad()) ||
			(datosPersona.tipo.filter((obj) => obj.op === 'c').length ===
				1 &&
				i !== 1 &&
				true) ||
			(datosPersona.tipo.length >= 1 &&
				datosPersona.tipo.filter((obj) => obj.op === 'c').length !==
					1 &&
				i === 1 &&
				true)
		);
	}

	if (!intro)
		return (
			<StartScreen
				intro={introGame2}
				startFunc={() => setIntro(true)}
			/>
		);

	return (
		<Zoom in={true}>
			<Card
				elevation={3}
				style={{
					marginRight: !isMobile() && '14%',
					marginLeft: !isMobile() && '14%',
					padding: 35,
					borderRadius: 15,
					borderBottom: `6px solid ${colores.mainPurple}`,
				}}
			>
				<Grid container spacing={3}>
					<Grid item md={7}>
						<Grid container spacing={2} direction='column'>
							<Grid item md={12}>
								<TypographyStyled
									style={{
										fontSize: isMobile()
											? sizeLetter.cellBig
											: sizeLetter.normal,
										fontWeight: 'bold',
										color: colores.mainStrong,
									}}
								>
									Edad
								</TypographyStyled>
								<div
									style={{ display: 'flex', flexDirection: 'row' }}
								>
									<Slider
										disabled={datosPersona.tipo.length > 0}
										defaultValue={0}
										max={90}
										style={{
											width: '90%',
											marginRight: 30,
											color: colores.mainPurple,
										}}
										value={datosPersona.edad}
										onChange={(e) => handlerEdad(e.target.value)}
									/>
								</div>
							</Grid>
							<Grid item md={12}>
								<TypographyStyled
									style={{
										fontWeight: 'bold',
										fontSize: isMobile()
											? sizeLetter.cellBig
											: sizeLetter.normal,
										color: colores.mainStrong,
									}}
								>
									¿Con quiénes convivís?
								</TypographyStyled>
								<FormGroup>
									{game2Opciones.map((option, i) => (
										<FormControlLabel
											key={option.op}
											control={
												<Checkbox
													disabled={disableCheck(i)}
													style={{ color: colores.mainPurple }}
													onChange={(e) =>
														handlerPersonaOp(
															e.target.checked,
															option,
															datosPersona.edad
														)
													}
												/>
											}
											label={option.txt}
											componentsProps={{
												typography: {
													fontFamily: 'Poppins',
													fontSize: isMobile()
														? sizeLetter.cellNormal
														: sizeLetter.small,
													color: colores.txtSecond2,
												},
											}}
										/>
									))}
								</FormGroup>
							</Grid>
						</Grid>
					</Grid>
					<Grid item md={5} style={{ width: '100%' }}>
						<Card
							variant='outlined'
							style={{
								borderRadius: 10,
								padding: 20,
								textAlign: 'center',
								borderColor: colores.secondPink,
							}}
						>
							<TypographyStyled
								style={{
									fontSize: isMobile()
										? sizeLetter.cellSmall
										: sizeLetter.small,
								}}
							>
								Edad:{' '}
								<span style={{ color: colores.letterSecond }}>
									{datosPersona.edad}
								</span>
							</TypographyStyled>
							<Divider variant='middle' />
							<TypographyStyled
								style={{
									fontSize: isMobile()
										? sizeLetter.cellSmall
										: sizeLetter.small,
								}}
							>
								Convivencia:
							</TypographyStyled>
							{datosPersona.tipo &&
								datosPersona.tipo.map((op) => (
									<TypographyStyled
										style={{
											fontSize: isMobile()
												? sizeLetter.cellSmall
												: sizeLetter.small,
											color: colores.letterSecond,
										}}
										key={op.txt}
									>
										{op.txt}
									</TypographyStyled>
								))}
						</Card>
					</Grid>
					<Grid item md={12} style={{ width: '100%' }}>
						<Button
							disabled={!isCompleted()}
							fullWidth
							variant='contained'
							color='secondary'
							sx={{
								backgroundColor: [colores.mainPurple, '!important'],
								fontWeight: 'bold',
								fontFamily: 'Poppins',
								fontSize: isMobile()
									? sizeLetter.cellSmall
									: sizeLetter.small,
							}}
							onClick={() => handlerStart()}
						>
							Iniciar
						</Button>
					</Grid>
				</Grid>
			</Card>
		</Zoom>
	);
};

const introGame2 = {
	title: `Cerebros Sobrecargados`,
	txt: `¿Cuánto espacio ocupan en tu cabeza las tareas del hogar y el cuidado de las
  personas ?
  Contesta por SÍ o por NO éste cuestionario y al final del mismo sabrás cuánto espacio tenés en tu cabeza para dedicarle a nuevos proyectos, sueños, ocio y disfrute del tiempo libre.
  `,
	txt2: ``,
};

export default FormStart;
