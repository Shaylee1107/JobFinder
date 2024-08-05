import React from 'react';
import { render, cleanup, } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../Pages/Home.js';
import LoadingProvider from '../Providers/LoadingProvider.js';
import { waitFor } from '@testing-library/react';
import FavoritesProvider from '../Providers/FavoritesProvider.js';

afterEach(cleanup);

jest.mock("axios", () => {
    const expectedResponse = JSON.stringify({
        "data" : {
            "results": {
                    "id": "4806158050",
                    "redirect_url": "https://www.adzuna.com/land/ad/4804048782?se=BEeXQfNR7xGYKGb7g6DTQA&utm_medium=api&utm_source=a7ebf48d&v=0E88B0A5E036592D574963265D6DCC53F9C26EE7",
                    "title": "Software Engineering Manager",
                    "description": "Requisition ID: R10133765 Category: Engineering Location: Melbourne, Florida, United States of America Clearance Type: Secret Telecommute: No- Teleworking not available for this position Shift: 1st Shift (United States of America) Travel Required: Yes, 10% of the Time Relocation Assistance: Relocation assistance may be available Positions Available: 20 At Northrop Grumman, our employees have incredible opportunities to work on revolutionary systems that impact people's lives around the world to...",
                    "company": {
                        "display_name": "Northrop Grumman"
                      },
                    "location": {
                      "area": [
                        "US",
                        "California",
                        "Ventura County",
                        "Santa Rosa Valley"
                       ]
                     },
                     "salary_max": 124119.98,
                }
        }
    });
    return () => new Promise(() => expectedResponse);
  })

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

test('if an API request goes through after clicking search', async () => {
    const { getAllByTestId } = render( 
    <LoadingProvider>
        <FavoritesProvider>
         <Home />
        </FavoritesProvider>
    </LoadingProvider>
    );



    // const firstRender = asFragment();

    // fireEvent.click(getByText("Search"));

    // await waitFor(() => expect(getByText('Software Engineering Manager')).toBeInTheDocument());
   
});









