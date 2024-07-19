import React from 'react';
import "./JobListingContainer.css";
// import JobListing from "./JobListing";

const JobListingContainer = ({searchedJobs}) => {
    console.log(searchedJobs, 'searchedJobs')
    return (
        <div className="container">
           {`{${searchedJobs.title}}`}
        </div>
    )
}

export default JobListingContainer; 