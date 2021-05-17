import React from 'react';
import SocialMediaIcons from './index';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
	title: 'Atoms/SocialMediaIcons',
	component: SocialMediaIcons,
	decorators: [ withKnobs ]
};

const Template = (args) => <SocialMediaIcons {...args} />;

export const Default = Template.bind({});

export const Playground = Template.bind({});
Playground.args = {};
