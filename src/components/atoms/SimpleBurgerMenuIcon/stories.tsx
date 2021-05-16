import React from 'react';
import SimpleBurgerMenuIcon from './index';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Atoms/SimpleBurgerMenuIcon',
  component: SimpleBurgerMenuIcon,
  decorators: [withKnobs],
};

const Template = (args) => <SimpleBurgerMenuIcon {...args} />;

export const Default = Template.bind({});

export const Playground = Template.bind({});
Playground.args = {
  color: text,
  bg: text,
};


