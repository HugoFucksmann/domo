import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import StepConnector, {
	stepConnectorClasses,
} from '@mui/material/StepConnector';

import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { isMobile } from '../styles/isMobile';
import sizeLetter from '../styles/fontSize';
import colores from './../styles/colors';

const QontoConnector = styled(StepConnector)(({ theme }) => ({
	[`&.${stepConnectorClasses.alternativeLabel}`]: {
		top: 10,
		left: 'calc(-50% + 16px)',
		right: 'calc(50% + 16px)',
		transition: 'all 4s',
	},
	[`&.${stepConnectorClasses.active}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			borderColor: colores.mainStrongTr,
		},
	},
	[`&.${stepConnectorClasses.completed}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			borderColor: colores.mainStrongTr,
		},
	},
	[`& .${stepConnectorClasses.line}`]: {
		borderColor:
			theme.palette.mode === 'dark'
				? theme.palette.grey[800]
				: '#eaeaf0',
		borderTopWidth: 3,
		borderRadius: 1,
	},
}));

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
	color:
		theme.palette.mode === 'dark'
			? theme.palette.grey[700]
			: '#eaeaf0',
	display: 'flex',
	height: 22,
	alignItems: 'center',
	...(ownerState.active && {}),

	'& .QontoStepIcon-completedIcon': {
		color: colores.mainStrongTr,
		zIndex: 1,
		fontSize: isMobile()
			? sizeLetter.cellExtraBig
			: sizeLetter.extraBig,
	},

	'& .QontoStepIcon-circle': {
		color: colores.mainStrongTr,
		width: '1.5vh',
		height: '1.5vh',
		borderRadius: '50%',
		backgroundColor: colores.mainStrongTr,
		fontSize: isMobile()
			? sizeLetter.cellExtraBig
			: sizeLetter.extraBig,
	},
}));

function QontoStepIcon(props) {
	const { active, completed, className } = props;

	return (
		<QontoStepIconRoot ownerState={{ active }} className={className}>
			{completed ? (
				<CheckCircleOutlinedIcon className='QontoStepIcon-completedIcon' />
			) : (
				<CircleOutlinedIcon className='QontoStepIcon-circle' />
			)}
		</QontoStepIconRoot>
	);
}

QontoStepIcon.propTypes = {
	/**
	 * Whether this step is active.
	 * @default false
	 */
	active: PropTypes.bool,
	className: PropTypes.string,
	/**
	 * Mark the step as completed. Is passed to child components.
	 * @default false
	 */
	completed: PropTypes.bool,
};

export default function CustomizedSteppers({ activeStep, numStep }) {
	return (
		<Stack sx={{ width: '100%' }} spacing={4}>
			<Stepper
				alternativeLabel
				activeStep={activeStep}
				connector={<QontoConnector />}
			>
				{numStep.map((label, i) => (
					<Step key={label + i}>
						<StepLabel StepIconComponent={QontoStepIcon}></StepLabel>
					</Step>
				))}
			</Stepper>
		</Stack>
	);
}
