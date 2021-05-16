import React from 'react';
import NavbarContainer from './index';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Atoms/NavbarContainer',
  component: NavbarContainer,
  decorators: [withKnobs],
};

const Template = (args) => <NavbarContainer {...args} />;

export const Default = Template.bind({});

export const Playground = Template.bind({});
Playground.args = {
  bg: text,
};
