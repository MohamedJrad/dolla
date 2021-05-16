import React from 'react';
import VideoBg from './index';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Atoms/VideoBg',
  component: VideoBg,
  decorators: [withKnobs],
};

const Template = (args) => <VideoBg {...args} />;

export const Default = Template.bind({});

export const Playground = Template.bind({});
Playground.args = {

};
