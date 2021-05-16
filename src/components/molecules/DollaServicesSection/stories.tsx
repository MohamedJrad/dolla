import React from 'react';
import DollaServicesSection from './index';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
	title: 'Molecules/DollaServicesSection',
	component: DollaServicesSection,
	decorators: [ withKnobs ]
};

const Template = (args) => <DollaServicesSection {...args} />;

export const Default = Template.bind({});

export const Playground = Template.bind({});
Playground.args = {};
