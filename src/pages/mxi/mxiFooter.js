import React from 'react';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { isMobile } from '../../styles/isMobile';

import santaFe from './images/logos/SantaFe.png';

const Footer = () => {
	return (
		<div style={styles.footer}>
			<Grid
				container
				spacing={2}
				style={{ margin: !isMobile() && 10 }}
			>
				<Grid item xs={12} md={2} style={styles.coll}>
					<img
						alt='santaFe'
						src={santaFe}
						style={{
							height: isMobile() ? 55 : '60%',
						}}
					/>
				</Grid>
				<Grid item xs={12} md={3} style={styles.coll}>
					<Typography>Ministerio de Igualdad,</Typography>
					<Typography>Genero y Diversidad</Typography>
				</Grid>
				<Grid item xs={0} md={4} />
				<Grid
					item
					xs={12}
					md={2}
					style={{ textAlign: isMobile() && 'center' }}
				>
					<Typography style={{ fontSize: '0.9rem' }}>
						Corrientes 2879
					</Typography>
					<Typography style={{ fontSize: '0.9rem' }}>
						S3000JDL Santa Fe
					</Typography>
					<Typography style={{ fontSize: '0.9rem' }}>
						Tel: 0342- 4815818 /19 /20
					</Typography>
					<Typography style={{ fontSize: '0.9rem' }}>
						seigualdadygenero@santafe.gob.ar
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
};

const styles = {
	footer: {
		backgroundColor: '#49147C',
		width: '100vw',
		padding: 20,
		color: '#f2f2f2',
	},
	coll: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
};

export default Footer;
