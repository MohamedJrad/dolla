import React from 'react';
import DollaLogo from './index';
//import { withKnobs, text, boolean, number, } from '@storybook/addon-knobs';

const Stories = {
	title: 'Atoms/DollaLogo',
	component: DollaLogo
	//   decorators: [withKnobs],
};

const Template = (args) => <DollaLogo {...args} />;

export const Default = Template.bind({});

// export const Playground = Template.bind({});
// Playground.args = {
//   bg: text,
// };

export default Stories;
