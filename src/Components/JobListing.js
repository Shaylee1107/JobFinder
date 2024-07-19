import React from 'react';
import './JobListings.css';

const JobListings = ({title, company, location, salary, description, companyWebsite}) => {
    const redirectToCompanyWebsite = () => {
        window.open(companyWebsite, "_blank", "noreferrer");
    }

    return (
        <div onClick={() => redirectToCompanyWebsite()} className="JobListContainer">
            <h3>{title}</h3>
            <p>{company}</p>
            <p>{location}</p>
            <p>${salary}</p>
            <p>{description}</p>
        </div>
    )
}

export default JobListings;