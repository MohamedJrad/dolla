import React from 'react';
import DollaCard from './index';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
	title: 'Atoms/DollaCard',
	component: DollaCard,
	decorators: [ withKnobs ]
};

const Template = (args) => <DollaCard {...args} />;

export const Default = Template.bind({});

export const Playground = Template.bind({});
Playground.args = {};
