import React, {useState, useEffect} from 'react';
import SearchBar from '../Components/SearchBar';
import JobListingContainer from '../Components/JobListingContainer';
import axios from 'axios';
import "./Home.css";

const Home = () => {
    const [searchedJobs, setSearchedJobs] = useState({title: 'javascript developer', location: 'london'});
    const [axiosResults, setAxiosResults] = useState();

    const grabFormData = (formData) => {
        console.log(formData, 'formData');
        setSearchedJobs(formData);
    }

    const loadJobListingContainer = () => {
        return (
            <JobListingContainer searchedJobs={searchedJobs}/>
        )
    }

    useEffect(() => {
        const sendAxiosRequest = async () => {
            let results = await axios.get(`https:api.adzuna.com/v1/api/jobs/us/search/1?app_id=e8c48744&app_key=317b825c177fbca1dc98cc72803c5352&location0=US&location1=Indiana&location2=Allen%20County&location3=Fort%20Wayne`);
            console.log(results.data.results, 'results')
        }

       sendAxiosRequest();
    }, [grabFormData])

    return (
        <div>
            <SearchBar grabFormData={grabFormData}/>
            {loadJobListingContainer()}
        </div>
    )
}

export default Home; 