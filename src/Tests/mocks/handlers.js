import { http, HttpResponse } from 'msw';

export const handlers = [
    http.get('https://api.adzuna.com/v1/api/jobs/us/search/1', () => {
        return HttpResponse.json({
   
                results: [
                  { "title": "Javascript Developer",
                  "company": {
                      "display_name": "Corporate Project Solutions"
                    },
                  "location": {
                    "area": [
                      "UK",
                      "South East England",
                      "Buckinghamshire",
                      "Marlow"
                    ]},
                  "salary_max": 55000,
                  "description": "JavaScript Developer Corporate ...",
                  "redirect_url": "https://www.adzuna.co.uk/jobs/land/ad/4840001893?se=hDSA3Rlm7xGoFEhRY1oBrw&utm_medium=api&utm_source=a7ebf48d&v=A9440557D6FB732BFBEC7B3162C2393A409B6E0F",
                  "id": "129698749" }
                ]
            
        }, { status: 200})
    })
]

// export const handlers = [
//   http.get('https://api.adzuna.com/v1/api/jobs/us/search/1', () => {
//       return HttpResponse.json({
//           data: {
//               results: [
//                 { "title": "Javascript Developer",
//                 "company": {
//                     "display_name": "Corporate Project Solutions"
//                   },
//                 "location": {
//                   "area": [
//                     "UK",
//                     "South East England",
//                     "Buckinghamshire",
//                     "Marlow"
//                   ]},
//                 "salary_max": 55000,
//                 "description": "JavaScript Developer Corporate ...",
//                 "redirect_url": "https://www.adzuna.co.uk/jobs/land/ad/4840001893?se=hDSA3Rlm7xGoFEhRY1oBrw&utm_medium=api&utm_source=a7ebf48d&v=A9440557D6FB732BFBEC7B3162C2393A409B6E0F",
//                 "id": "129698749" }
//               ]
//           }
//       }, { status: 200})
//   })
// ]