import React from 'react';
import DollaInfoSection from './index';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
	title: 'Molecules/DollaInfoSection',
	component: DollaInfoSection,
	decorators: [ withKnobs ]
};

const Template = (args) => <DollaInfoSection {...args} />;

export const Default = Template.bind({});

export const Playground = Template.bind({});
Playground.args = {};
