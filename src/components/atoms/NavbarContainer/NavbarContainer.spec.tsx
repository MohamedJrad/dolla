import React from 'react';
import { render, screen } from '@testing-library/react';
import { Default } from './stories';


describe('Component in Default state', () => {
  it('renders ', () => {
    render(<Default />);
  });
});
