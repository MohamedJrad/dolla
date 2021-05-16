import React from 'react';
import DollaFooterSection from './index';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
	title: 'Atoms/DollaFooterSection',
	component: DollaFooterSection,
	decorators: [ withKnobs ]
};

const Template = (args) => <DollaFooterSection {...args} />;

export const Default = Template.bind({});

export const Playground = Template.bind({});
Playground.args = {};
