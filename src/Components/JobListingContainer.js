import React from 'react';
import "./JobListingContainer.css";
import JobListing from "./JobListing";

const JobListingContainer = ({ axiosResults }) => {
    const loadJobs = () => {
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