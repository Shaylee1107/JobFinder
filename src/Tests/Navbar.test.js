import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Navbar from '../Routes/Navbar';
import { MemoryRouter } from 'react-router-dom';

test('if navbar matches snapshot', () => {
  const {asFragment, getByText} = render(<MemoryRouter><Navbar /></MemoryRouter>);
  expect(getByText('Job Finder')).toBeInTheDocument();
  expect(getByText('Favorites')).toBeInTheDocument();
  expect(asFragment()).toMatchInlineSnapshot(`
   <DocumentFragment>
     <div
       class="flex"
     >
       <div>
         <img
           alt="location icon"
           class="img nabar-items"
           src="https://cdn1.iconfinder.com/data/icons/flat-design-basic-set-7/24/location-map-where-global-positioning-system-512.png"
         />
         <a
           class="title montserrat"
           href="/"
         >
           Job Finder
         </a>
         <a
           class="nabar-items links montserrat"
           href="/favorites"
         >
           Favorites
         </a>
       </div>
     </div>
   </DocumentFragment>
  `)
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


