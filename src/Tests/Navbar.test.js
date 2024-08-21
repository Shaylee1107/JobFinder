import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Navbar from '../Routes/Navbar';
import { MemoryRouter } from 'react-router-dom';

test('if navbar matches snapshot', () => {
  const { getByText } = render(<MemoryRouter><Navbar /></MemoryRouter>);
  expect(getByText('Job Finder')).toBeInTheDocument();
  expect(getByText('Favorites')).toBeInTheDocument();
});

test('should navigate to ... when link is clicked', () => {
  const { getByText } = render(<MemoryRouter><Navbar /></MemoryRouter>);

  const favoritesLink = getByText('Favorites');
  const jobFinderLink = getByText('Job Finder');

  fireEvent.click(favoritesLink);
  fireEvent.click(jobFinderLink); 

  expect(screen.getByText('Favorites').closest('a')).toHaveAttribute('href', '/favorites');
  expect(screen.getByText('Job Finder').closest('a')).toHaveAttribute('href', '/');

});


