import React from 'react';
import { render, screen } from '@testing-library/react';
import { Default } from './stories';
//import { toBeInTheDocument } from '@testing-library/jest-dom';
//import '@testing-library/jest-dom/extend-expect';

//expect.extend({ toBeInTheDocument });

describe('Component in Default state', () => {
  it('renders ', () => {
    render(<Default />);
  });
});
