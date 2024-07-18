import React from 'react';
import SearchBar from '../Components/SearchBar';
import JobListingContainer from '../Components/JobListingContainer';
import "./Home.css";

const Home = () => {
    return (
        <div>
            <SearchBar />
            <JobListingContainer />
        </div>
    )
}

export default Home; 