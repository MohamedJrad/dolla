import React from 'react';
import WebsiteRights from './index';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
	title: 'Atoms/WebsiteRights',
	component: WebsiteRights,
	decorators: [ withKnobs ]
};

const Template = (args) => <WebsiteRights {...args} />;

export const Default = Template.bind({});

export const Playground = Template.bind({});
Playground.args = {};
