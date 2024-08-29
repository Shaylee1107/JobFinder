import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../Pages/Home';
import LoadingProvider from '../Providers/LoadingProvider';
import { waitFor } from '@testing-library/react';
import FavoritesProvider from '../Providers/FavoritesProvider';
// import { jest } from '@jest/globals';

// window.scrollTo = jest.fn();

test('if Home renders Search Bar and Filter Search Options', () => {
  const { getByText } = render( 
  <LoadingProvider>
      <FavoritesProvider>
        <Home />
      </FavoritesProvider>
  </LoadingProvider>
  );

  expect(getByText('Job Title:')).toBeInTheDocument();
  expect(getByText('Location:')).toBeInTheDocument();
  expect(getByText('Search')).toBeInTheDocument();
  expect(getByText('Salary')).toBeInTheDocument();
  expect(getByText('Hours')).toBeInTheDocument();
  expect(getByText('Sort by')).toBeInTheDocument();
  expect(getByText('Job Type')).toBeInTheDocument();
 
});

test('if the filter options show filtering options when clicked', async () => {
  render( 
  <LoadingProvider>
      <FavoritesProvider>
       <Home />
      </FavoritesProvider>
  </LoadingProvider>
  );

  // const salaryFilter = getByText('Salary');
  const salaryFilter = screen.getByText('Salary');

  fireEvent.click(salaryFilter);

  expect(screen.getByText('$25,000')).toBeInTheDocument();

});

test('if Home renders Job Details', async () => {
  const { getByText } = render( 
  <LoadingProvider>
      <FavoritesProvider>
       <Home />
      </FavoritesProvider>
  </LoadingProvider>
  );

  // await waitFor(() => expect(getByText('Javascript Developer')).toBeInTheDocument());
 
});

