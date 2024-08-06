import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../Pages/Home.js';
import LoadingProvider from '../Providers/LoadingProvider.js';
import { waitFor } from '@testing-library/react';
import FavoritesProvider from '../Providers/FavoritesProvider.js';
import axios from 'axios';

window.scrollTo = jest.fn();
beforeEach(() => {
  jest.resetAllMocks()
})

jest.mock("axios", () => {
  const expectedResponse = JSON.stringify({
      data : {
          results: [
              {
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
            ]
      }
  });
  return () => new Promise(() => expectedResponse);
})

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


test('if home has jobs rendered upon opening the website', async () => {
  const { getByText } = render( 
  <LoadingProvider>
      <FavoritesProvider>
       <Home />
      </FavoritesProvider>
  </LoadingProvider>
  );
 
  await waitFor(() => expect(getByText('Software Engineering Manager')).toBeInTheDocument());
});

//////////////////////////TRYING BY STORING DATA IN A FUNCTION////////////////////////////////
// async function getJobData() {
//   const response = await axios.get('https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=a7ebf48d&app_key=a31ecdf957770c324646f06209fa554c');
//   return response.data.results;
// }

// jest.mock('axios');

// it('returns information about a job', async () => {
//   axios.get.mockResolvedValue({
//     data : {
//       results: [
//           {
//               "id": "4806158050",
//               "redirect_url": "https://www.adzuna.com/land/ad/4804048782?se=BEeXQfNR7xGYKGb7g6DTQA&utm_medium=api&utm_source=a7ebf48d&v=0E88B0A5E036592D574963265D6DCC53F9C26EE7",
//               "title": "Software Engineering Manager",
//               "description": "Requisition ID: R10133765 Category: Engineering Location: Melbourne, Florida, United States of America Clearance Type: Secret Telecommute: No- Teleworking not available for this position Shift: 1st Shift (United States of America) Travel Required: Yes, 10% of the Time Relocation Assistance: Relocation assistance may be available Positions Available: 20 At Northrop Grumman, our employees have incredible opportunities to work on revolutionary systems that impact people's lives around the world to...",
//               "company": {
//                   "display_name": "Northrop Grumman"
//                 },
//               "location": {
//                 "area": [
//                   "US",
//                   "California",
//                   "Ventura County",
//                   "Santa Rosa Valley"
//                  ]
//                },
//                "salary_max": 124119.98,
//           }
//         ]
//     }
//   });

//   const job = await getJobData();
//   expect(job.title).toEqual('Software Engineering Manager');
// });
////////////////////TRIED BY STORING DATA IN A FUNCTION/////////////////////////////////////











/////////////////////TRIED USING __esModule: true and default /////////////////////////////////////////
// beforeEach(() => {
//   jest.resetAllMocks()
// })

// jest.mock("axios", () => ({
//   __esModule: true,
//   default: {
//     get: () => ({
      // data : {
      //   results: [
      //       {
      //           "id": "4806158050",
      //           "redirect_url": "https://www.adzuna.com/land/ad/4804048782?se=BEeXQfNR7xGYKGb7g6DTQA&utm_medium=api&utm_source=a7ebf48d&v=0E88B0A5E036592D574963265D6DCC53F9C26EE7",
      //           "title": "Software Engineering Manager",
      //           "description": "Requisition ID: R10133765 Category: Engineering Location: Melbourne, Florida, United States of America Clearance Type: Secret Telecommute: No- Teleworking not available for this position Shift: 1st Shift (United States of America) Travel Required: Yes, 10% of the Time Relocation Assistance: Relocation assistance may be available Positions Available: 20 At Northrop Grumman, our employees have incredible opportunities to work on revolutionary systems that impact people's lives around the world to...",
      //           "company": {
      //               "display_name": "Northrop Grumman"
      //             },
      //           "location": {
      //             "area": [
      //               "US",
      //               "California",
      //               "Ventura County",
      //               "Santa Rosa Valley"
      //              ]
      //            },
      //            "salary_max": 124119.98,
      //       }
      //     ]
      // }
//     })
//   }  
//   }))
/////////////////////TRIED USING __esModule: true and default /////////////////////////////////////////











///////////////////////////////////////EXPECT AXIOS TO BE CALLED WITH THAT URL????////////////////////////////////////
//  describe('MyComponent', () => {
  //   it('should fetch data and render correctly', async () => {
  //     const { getByText } = render( 
  //       <LoadingProvider>
  //           <FavoritesProvider>
  //            <Home />
  //           </FavoritesProvider>
  //       </LoadingProvider>
  //       );
  
  //     expect(axios.get).toHaveBeenCalledWith(
  //       'https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=a7ebf48d&app_key=a31ecdf957770c324646f06209fa554c'
  //     );
  
     
  //   });
  // });

///////////////////////////////////////EXPECT AXIOS TO BE CALLED WITH THAT URL????////////////////////////////////////










/////////////////////////////////////PUTTING WANTED RESULTS IN THE TEST ITSELF AND LEAVING MOCK EMPTY///////////////////////
// jest.mock('axios', () => ({
//   get: jest.fn(() => Promise.resolve({ data: { results: [] } })),
// }));

// test('if home has jobs rendered upon opening the website', async () => {
//     const { getByText } = render( 
//     <LoadingProvider>
//         <FavoritesProvider>
//          <Home />
//         </FavoritesProvider>
//     </LoadingProvider>
//     );
//     const job = {
//       "results": {
//         "id": "4806158050",
//         "redirect_url": "https://www.adzuna.com/land/ad/4804048782?se=BEeXQfNR7xGYKGb7g6DTQA&utm_medium=api&utm_source=a7ebf48d&v=0E88B0A5E036592D574963265D6DCC53F9C26EE7",
//         "title": "Software Engineering Manager",
//         "description": "Requisition ID: R10133765 Category: Engineering Location: Melbourne, Florida, United States of America Clearance Type: Secret Telecommute: No- Teleworking not available for this position Shift: 1st Shift (United States of America) Travel Required: Yes, 10% of the Time Relocation Assistance: Relocation assistance may be available Positions Available: 20 At Northrop Grumman, our employees have incredible opportunities to work on revolutionary systems that impact people's lives around the world to...",
//         "company": {
//             "display_name": "Northrop Grumman"
//           },
//         "location": {
//           "area": [
//             "US",
//             "California",
//             "Ventura County",
//             "Santa Rosa Valley"
//            ]
//          },
//          "salary_max": 124119.98,
//     }
//     };
//     const responce = {data: job};

//     await axios.get.mockResolvedValue({responce});
//     await waitFor(() => expect(getByText('Software Engineering Manager')).toBeInTheDocument());
   
// });
/////////////////////////////////////PUTTING WANTED RESULTS IN THE TEST ITSELF AND LEAVING MOCK EMPTY///////////////////////







////////////////////////////////HOW I MIGHT WRITE A TEST WHEN SEARCHING WITH A JOB TITLE /////////////////////////////////
  // jest.mock("axios", () => {
  //   get: jest.fn((jobTitle) => {
  //     if(jobTitle === 'Software Engineering Manager'){
  //         return Promise.resolve({
  //             data : {
  //                 "results": {
  //                         "id": "4806158050",
  //                         "redirect_url": "https://www.adzuna.com/land/ad/4804048782?se=BEeXQfNR7xGYKGb7g6DTQA&utm_medium=api&utm_source=a7ebf48d&v=0E88B0A5E036592D574963265D6DCC53F9C26EE7",
  //                         "title": "Software Engineering Manager",
  //                         "description": "Requisition ID: R10133765 Category: Engineering Location: Melbourne, Florida, United States of America Clearance Type: Secret Telecommute: No- Teleworking not available for this position Shift: 1st Shift (United States of America) Travel Required: Yes, 10% of the Time Relocation Assistance: Relocation assistance may be available Positions Available: 20 At Northrop Grumman, our employees have incredible opportunities to work on revolutionary systems that impact people's lives around the world to...",
  //                         "company": {
  //                             "display_name": "Northrop Grumman"
  //                           },
  //                         "location": {
  //                           "area": [
  //                             "US",
  //                             "California",
  //                             "Ventura County",
  //                             "Santa Rosa Valley"
  //                            ]
  //                          },
  //                          "salary_max": 124119.98,
  //                     }
  //             }
  //         });
  //     }
  // })
  
  // })
////////////////////////////////HOW I MIGHT WRITE A TEST WHEN SEARCHING WITH A JOB TITLE /////////////////////////////////




    