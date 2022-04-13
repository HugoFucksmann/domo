import { Button, Card, Grid, Zoom } from '@mui/material';

import colores from '../styles/colors';
import sizeLetter from '../styles/fontSize';
import TypographyStyled from './typografyStyled';
import { isMobile } from '../styles/isMobile';

const StartScreen = ({
	intro = { title: '', txt: '', txt2: '' },
	startFunc,
}) => {
	return (
		<Zoom in={true}>
			<Card
				elevation={3}
				style={{
					padding: isMobile() ? 20 : 55,
					paddingBottom: 30,
					borderRadius: 15,
					borderBottom: `6px solid ${colores.mainPurple}`,
					marginRight: '18%',
					marginLeft: '18%',
					width: isMobile() && '100%',
				}}
			>
				<Grid container spacing={3}>
					<Grid item md={12}>
						<TypographyStyled
							style={{
								fontSize: isMobile()
									? sizeLetter.cellBig
									: sizeLetter.big,
								color: colores.mainPurple,
								fontWeight: 800,
							}}
						>
							{intro.title}
						</TypographyStyled>
					</Grid>
					<Grid item md={12}>
						<TypographyStyled
							style={{
								fontSize: isMobile()
									? sizeLetter.cellNormal
									: sizeLetter.normal,
								color: colores.txtSecond2,
							}}
						>
							{intro.txt}
						</TypographyStyled>
					</Grid>
					{intro.txt2 && (
						<Grid item md={12}>
							<TypographyStyled
								style={{
									fontSize: isMobile()
										? sizeLetter.cellNormal
										: sizeLetter.normal,
									color: colores.txtSecond2,
								}}
							>
								{intro.txt2}
							</TypographyStyled>
						</Grid>
					)}

					<Grid item md={12} style={{ width: '100%' }}>
						<Button
							fullWidth
							color='secondary'
							variant='contained'
							sx={{
								backgroundColor: [colores.mainPurple, '!important'],
								fontWeight: 800,

								fontFamily: 'Poppins',
								fontSize: isMobile()
									? sizeLetter.cellSmall
									: sizeLetter.small,
							}}
							onClick={() => startFunc()}
						>
							Iniciar
						</Button>
					</Grid>
				</Grid>
			</Card>
		</Zoom>
	);
};

export default StartScreen;
