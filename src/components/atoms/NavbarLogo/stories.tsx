import React from 'react';
import NavbarLogo from './index';
//import { withKnobs, text, boolean, number, } from '@storybook/addon-knobs';

const Stories = {
  title: 'Atoms/Navbar Logo',
  component: NavbarLogo,
  //   decorators: [withKnobs],
};

const Template = (args) => <NavbarLogo {...args} />;

export const Default = Template.bind({});

// export const Playground = Template.bind({});
// Playground.args = {
//   bg: text,
// };

export default Stories;
