import { isMobile } from '../styles/isMobile';

const GameIndexLayout = (props) => {
	return (
		<div style={{ marginTop: isMobile() && '30%', width: '100%' }}>
			{props.children}
		</div>
	);
};

export default GameIndexLayout;
