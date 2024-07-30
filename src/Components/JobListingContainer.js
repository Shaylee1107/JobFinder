import React from 'react';
import "./JobListingContainer.css";
import JobListing from "./JobListing";

const JobListingContainer = ({ axiosResults }) => {

    const loadJobs = () => {
        if(axiosResults.length === 0){
            return (
                <div className='job-listing-no-results'> 
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/search-result-not-found-2130355-1800920.png" alt="man looking at no results"/>
                    <h2>Sorry, there are no jobs to show here...</h2>
                </div>
            )
        }
        return (axiosResults.map((job) => {
                 return (
                 <JobListing 
                    title={`${job.title}`} 
                    company={`${job.company.display_name}`} 
                    location={`${job.location.area[3]}, ${job.location.area[1]}`}
                    salary={`${job.salary_max}`}
                    description={`${job.description}`}
                    companyWebsite={`${job.redirect_url}`}
                    key={`${job.id}`}
                    id={`${job.id}`}
                 />
                 )
        })) 
    }

    return (
        <div className="container">
          {loadJobs()}
        </div>
    )
}

export default JobListingContainer; 