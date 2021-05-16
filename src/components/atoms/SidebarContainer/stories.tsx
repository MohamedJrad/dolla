
import React from 'react';
import SidebarContainer from './index';
import { withKnobs, text,boolean } from '@storybook/addon-knobs';

export default {
  title: 'Atoms/SidebarContainer',
  component: SidebarContainer,
  decorators: [withKnobs],
};

const Template = (args) => <SidebarContainer {...args} />;

export const Default = Template.bind({});

export const Playground = Template.bind({});
Playground.args = {

    color:text,
    isOpen:boolean
  
};


