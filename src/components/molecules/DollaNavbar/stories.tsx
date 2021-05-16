import React from 'react';
import DollaNavbar from './index';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Molecules/DollaNavbar',
  component: DollaNavbar,
  decorators: [withKnobs],
};

const Template = (args) => <DollaNavbar {...args} />;

export const Default = Template.bind({});

export const Playground = Template.bind({});
Playground.args = {
  

};
