import React from 'react';
import DollaBtn from './index';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
	title: 'Atoms/DollaBtn',
	component: DollaBtn,
	decorators: [ withKnobs ]
};

const Template = (args) => <DollaBtn {...args} />;

export const Default = Template.bind({});

export const Playground = Template.bind({});
Playground.args = {
	label: text,
	bg: text,
	color: text,
	mobile: boolean
};
