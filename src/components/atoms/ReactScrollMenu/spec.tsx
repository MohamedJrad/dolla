
import { screen } from '@testing-library/react';
import {render} from 'react-dom'
import { Default } from './stories';
const MockProps = [
  { id: 1, name: 'section1', iconUrl: '' },
  { id: 2, name: 'section2', iconUrl: '' },
  { id: 3, name: 'section3', iconUrl: '' },
  { id: 4, name: 'section4', iconUrl: '' },
  { id: 5, name: 'section5', iconUrl: '' },
];

describe('ProductCard in Default state', () => {
  it(' renders ', () => {
    //  render(<Default sections={MockProps} />);
    // MockProps.forEach((i) => {
    //   expect(screen.getByText(i.name)).toBeInTheDocument;
    // });
  });
});
