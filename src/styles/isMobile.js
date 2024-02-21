const width = window.innerWidth;
const height = window.innerHeight;

export const isMobile = () => {
	if (width < 545) return true;
	else return false;
};
