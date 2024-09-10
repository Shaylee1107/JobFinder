import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../Pages/Home';
import LoadingProvider from '../Providers/LoadingProvider';
import { waitFor } from '@testing-library/react';
import FavoritesProvider from '../Providers/FavoritesProvider';

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

// test('if the filter options show filtering options when clicked', async () => {
//   render( 
//   <LoadingProvider>
//       <FavoritesProvider>
//        <Home />
//       </FavoritesProvider>
//   </LoadingProvider>
//   );

//   // const salaryFilter = getByText('Salary');
//   const salaryFilter = screen.getByText('Salary');

//   fireEvent.click(salaryFilter);

//   expect(salaryFilter).toHaveValue('$25,000')
//   // expect(await screen.findByText('Invalid Password')).not.toBeVisible()

// });

test('if Home renders Job Details', async () => {
  const { getByText } = render( 
  <LoadingProvider>
      <FavoritesProvider>
       <Home />
      </FavoritesProvider>
  </LoadingProvider>
  );

  await waitFor(() => expect(getByText('Javascript Developer')).toBeInTheDocument());
  await waitFor(() => expect(getByText('Corporate Project Solutions')).toBeInTheDocument());
  await waitFor(() => expect(getByText('Marlow, South East England')).toBeInTheDocument());
  await waitFor(() => expect(getByText('$55000')).toBeInTheDocument());
  await waitFor(() => expect(getByText("JavaScript Developer Corporate ...")).toBeInTheDocument());
 
});

test('if bookmark shows and then turns blue when clicked', async () => {
  const { getByAltText } = render( 
    <LoadingProvider>
        <FavoritesProvider>
         <Home />
        </FavoritesProvider>
    </LoadingProvider>
    );
 
    const bookmark = await waitFor(() => getByAltText('bookmark icon'));
    expect(bookmark).toBeInTheDocument();

    fireEvent.click(bookmark);
    await waitFor(() => expect(getByAltText('blue bookmark icon')).toBeInTheDocument()); 
})

