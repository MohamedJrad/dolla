import React from 'react';
import ReactScrollBtn from './index';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
	title: 'Atoms/ReactScrollBtn',
	component: ReactScrollBtn,
	decorators: [ withKnobs ]
};

const Template = (args) => <ReactScrollBtn {...args} />;

export const Default = Template.bind({});

export const Playground = Template.bind({});
Playground.args = {
	label: text,
	bg: text,
	color: text,
	mobile: boolean
};
