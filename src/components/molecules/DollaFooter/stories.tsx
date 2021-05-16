import React from 'react';
import DollaFooter from './index';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
	title: 'Molecules/DollaFooter',
	component: DollaFooter,
	decorators: [ withKnobs ]
};

const Template = (args) => <DollaFooter {...args} />;

export const Default = Template.bind({});

export const Playground = Template.bind({});
Playground.args = {};
