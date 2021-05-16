//import React from 'react';
import ReactScrollMenu from './index';
import { withKnobs, text, number } from '@storybook/addon-knobs';

export default {
	title: 'atoms/ReactScrollMenu',
	component: ReactScrollMenu,
	decorators: [ withKnobs ]
};

type Section = {
	id: string;
	name: string;
	iconUrl: string;
};

interface Args {
	sections: Section[];
}

const Template = (args: Args) => <ReactScrollMenu {...args} />;

export const Default = Template.bind({});

export const Playground = Template.bind({});
Playground.args = {
	sections: [
		{ id: text, name: text, iconUrl: text },
		{ id: text, name: text, iconUrl: text },
		{ id: text, name: text, iconUrl: text },
		{ id: text, name: text, iconUrl: text },
		{ id: text, name: text, iconUrl: text }
	]
};
