import React from 'react';
import DollaWebsiteRights from './index';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
	title: 'Molecules/DollaWebsiteRights',
	component: DollaWebsiteRights,
	decorators: [ withKnobs ]
};

const Template = (args) => <DollaWebsiteRights {...args} />;

export const Default = Template.bind({});

export const Playground = Template.bind({});
Playground.args = {};
