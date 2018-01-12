import { route } from 'preact-router';

const linkTo = path => () => {
	route(path);
};

export const goHome = linkTo('/');
export const goToCredits = linkTo('/credits');
export const goToMain = linkTo('/main');
export const goToTelsa = linkTo('/telsa');
