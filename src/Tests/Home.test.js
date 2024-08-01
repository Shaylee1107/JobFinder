import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../Pages/Home.js';
import LoadingProvider from '../Providers/LoadingProvider.js';
import { waitFor } from '@testing-library/react';
import FavoritesProvider from '../Providers/FavoritesProvider.js';

window.scrollTo = jest.fn();

test('if Home renders Search Bar and Filter Search Options', async () => {
    const { getByText } = render( 
    <LoadingProvider>
        <FavoritesProvider>
         <Home />
        </FavoritesProvider>
    </LoadingProvider>
    );

    await waitFor(() => expect(getByText('Job Title:')).toBeInTheDocument());
    await waitFor(() => expect(getByText('Location:')).toBeInTheDocument());
    await waitFor(() => expect(getByText('Search')).toBeInTheDocument());
    await waitFor(() => expect(getByText('Salary')).toBeInTheDocument());
    await waitFor(() => expect(getByText('Hours')).toBeInTheDocument());
    await waitFor(() => expect(getByText('Sort by')).toBeInTheDocument());
    await waitFor(() => expect(getByText('Job Type')).toBeInTheDocument());
   
});



