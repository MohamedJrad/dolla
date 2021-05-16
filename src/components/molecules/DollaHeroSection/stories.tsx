import React from 'react';
import DollaHeroSection from './index';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
	title: 'Molecules/DollaHeroSection',
	component: DollaHeroSection,
	decorators: [ withKnobs ]
};

const Template = (args) => <DollaHeroSection {...args} />;

export const Default = Template.bind({});

export const Playground = Template.bind({});
Playground.args = {};
