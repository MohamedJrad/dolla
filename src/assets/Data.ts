import Icon from './SVGComponents/SVGCAR';
import SVGCAR from './SVGComponents/SVGCAR';
import SavingIllu from './SVGComponents/SavingIllu';
import WalletIllu from './SVGComponents/WalletIllu';
import Remote from './SVGComponents/RemoteSVG';
import Personal from './SVGComponents/PersonalSVG';
import Discount from './SVGComponents/DiscountSVG';

export const homeObjOne = {
	id: 'about',
	lightBg: false,

	lightTextDesc: true,
	topLine: 'Premium Bank',
	headline: 'Unlimited Transactions with zero fees',
	description:
		'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
	buttonLabel: 'Get started',
	imgStart: false,
	img: Icon,
	alt: 'Car',
	dark: true,
	primary: true
};

export const homeObjTwo = {
	id: 'discover',
	lightBg: true,

	lightTextDesc: true,
	topLine: 'Unlimited Access',
	headline: 'Login to your account at any time',
	description:
		'We have you covered no matter where you are located.All you need is an internet connection and a phone or computer.',
	buttonLabel: 'Learn More',
	imgStart: true,
	img: SavingIllu,
	alt: 'Car',
	dark: true,
	primary: true
};
export const homeObjThree = {
	id: 'signup',
	lightBg: false,

	lightTextDesc: true,
	topLine: 'Join our Team',
	headline: 'Creating an account is extremely easy',
	description:
		'Get everything set up and ready in under 10 minutes.All you need to do is add your information and you`re ready to go.',
	buttonLabel: 'Start Now',
	imgStart: false,
	img: WalletIllu,
	alt: 'Car',
	dark: true,
	primary: true
};

export const ServicesCardsContent = [
	{
		title: 'Reduce Expenses',
		description: 'We help reduce your fees and increase your overall revenue.',
		img: Discount
	},
	{ title: 'Virtual Offices', description: 'You can access our platform online anywhere in the world', img: Remote },
	{
		title: 'Premium Benefits',
		description: 'Unlock our special membership card that return 5% cash back',
		img: Personal
	}
];
