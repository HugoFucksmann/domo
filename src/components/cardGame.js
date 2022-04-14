import { makeStyles } from '@mui/styles';
import { Typography, styled, Zoom } from '@mui/material';
import { isMobile } from '../styles/isMobile';
import sizeLetter from '../styles/fontSize';
import { AppContext } from '../context/appContext';
import { useContext, useEffect } from 'react';
import colores from '../styles/colors';
import fondoVertical from '../assets/tarjGameV.png';
import fondoHorizontal from '../assets/tarjGameH.png';

const GameCard = ({ cardData, i, images }) => {
	const { setRuta } = useContext(AppContext);
	const classes = useStyles();

	useEffect(() => {
		let imageList = [fondoVertical, fondoHorizontal];
		imageList.forEach((image) => {
			new Image().src = image;
		});
	}, []);

	return (
		/*    <Zoom in={true} timeout={700}> */
		<StyledCard onClick={() => setRuta(cardData.link)}>
			<div id='imageDiv' className={classes.imageDiv}>
				<div id='hoverTxt' className={classes.hoverTxt}>
					<Typography className={classes.title}>
						{cardData.title.toUpperCase()}
					</Typography>
				</div>
			</div>
		</StyledCard>
		/*  </Zoom> */
	);
};

const StyledCard = styled('div')({
	cursor: 'pointer',
	border: '1px solid #fff',
	width: isMobile() ? '80%' : '38vh',
	height: isMobile() ? '14vh' : '56vh',
	margin: 'auto',
	marginBottom: isMobile() && 30,
	filter: 'drop-shadow(1px 1px 3px #fff)',
	//transform: " skewX(-6deg)!important",

	'@keyframes zoom': {
		from: {
			opacity: 0,
			transform: !isMobile() ? `scale(0) rotate(140deg)` : 'scale(0)',
		},
		to: {
			opacity: 1,
			transform: 'scale(1) ',
		},
	},
	animation: isMobile() ? 'zoom .8s' : 'zoom .8s',
});

const useStyles = makeStyles((theme) => ({
	imageDiv: {
		height: '100%',
		width: '100%',
		position: 'relative',
		background: isMobile()
			? `url(${fondoHorizontal})`
			: `url(${fondoVertical})`,
		//: "#f2f2f2",
		backgroundSize: 'cover',
		backgroundPosition: 'center center',
		display: 'table',
		transition: '.3s',
		transitionTimingFunction: 'ease',
	},
	hoverTxt: {
		height: '100%',
		display: 'flex',
		flexDirection: isMobile() && 'column',
		alignItems: isMobile() && 'center',
		justifyContent: isMobile() && 'center',
		marginTop: !isMobile() && '60%',
		color: colores.mainStrong,
		transition: '.3s',
	},
	title: {
		paddingLeft: '4%',
		paddingRight: '4%',
		fontFamily: 'Poppins',
		fontWeight: 800,
		fontSize: isMobile()
			? [sizeLetter.cellBig, '!important']
			: [sizeLetter.big, '!important'],
	},
	txt: {
		fontFamily: 'Poppins',
		fontSize: [sizeLetter.small, '!important'],
		transform: 'translateY(2000%)',
		transition: '.2s',
		transitionDelay: '.1s',
		transitionTimingFunction: 'ease',
	},
}));

export default GameCard;
