import { forwardRef, useContext } from 'react';
import { AppContext } from '../../context/appContext';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TypographyStyled from '../../components/typografyStyled';
import Slide from '@mui/material/Slide';
import sizeLetter from '../../styles/fontSize';
import colores from '../../styles/colors';
import { isMobile } from '../../styles/isMobile';

const ModalResult = () => {
	const { handlerModalClose, dataModal, openModal } =
		useContext(AppContext);

	return (
		<Dialog
			maxWidth='md'
			open={openModal}
			onClose={handlerModalClose}
			aria-labelledby='responsive-dialog-title'
			TransitionComponent={Transition}
			PaperProps={{
				style: {
					padding: isMobile() ? 25 : 45,
					marginRight: !isMobile() && '18%',
					marginLeft: !isMobile() && '18%',
					borderRadius: 15,
					backgroundColor: '#F3F6F9',
					borderRight: `8px solid ${colores.mainPurple}`,
				},
			}}
		>
			<DialogTitle id='responsive-dialog-title'>
				<TypographyStyled
					style={{
						fontSize: isMobile()
							? sizeLetter.cellBig
							: sizeLetter.big,
						color: colores.mainPurple,
						fontWeight: 'bold',
					}}
				>
					{dataModal.title.toString()}
				</TypographyStyled>
			</DialogTitle>
			<DialogContent>
				<TypographyStyled
					style={{
						fontSize: isMobile()
							? sizeLetter.cellNormal
							: sizeLetter.normal,
						color: colores.textSoft,
					}}
				>
					{dataModal.txt.toString()}
				</TypographyStyled>
				<br />
				{dataModal.icons && (
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							width: '100%',
							justifyContent: 'center',
						}}
					>
						{dataModal.icons.map((icon) => (
							<img
								src={icon}
								style={{
									height: isMobile() ? 50 : 80,
									filter: `drop-shadow(3px 3px 3px ${colores.mainStrongTr})`,
								}}
							/>
						))}
					</div>
				)}
			</DialogContent>
			<DialogActions>
				<Button
					variant='contained'
					color='secondary'
					onClick={handlerModalClose}
					autoFocus
					style={{
						backgroundColor: colores.mainPurple,
					}}
				>
					<TypographyStyled
						style={{
							fontWeight: 'bold',
							fontSize: isMobile()
								? sizeLetter.cellSmall
								: sizeLetter.small,
						}}
					>
						Continuar !
					</TypographyStyled>
				</Button>
			</DialogActions>
		</Dialog>
	);
};

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});

export default ModalResult;
