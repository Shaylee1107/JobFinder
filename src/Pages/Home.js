import React, {useState, useEffect, useCallback} from 'react';
import SearchBar from '../Components/SearchBar';
import JobListingContainer from '../Components/JobListingContainer';
import FilterSearchResultsForm from '../Components/FilterSearchResultsForm';
import axios from 'axios';
import "./Home.css";

const Home = () => {
    const [searchedJobs, setSearchedJobs] = useState(false);
    const [axiosResults, setAxiosResults] = useState(false);

    const grabFormData = useCallback((formData) => {
        setSearchedJobs(formData);
    }, []);

    const loadJobListingContainer = () => {
        if(axiosResults !== false){
            return (
                <JobListingContainer axiosResults={axiosResults}/>
            )
        }
    }

    useEffect(() => {
        const sendAxiosRequest = async () => {
            let results = await axios.get(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=e8c48744&app_key=317b825c177fbca1dc98cc72803c5352`);
            setAxiosResults(results.data.results);
        }

       sendAxiosRequest();
    }, [])

    useEffect(() => {
        const sendAxiosRequest = async () => {
            if(searchedJobs !== false){
                let results = await axios.get(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=e8c48744&app_key=317b825c177fbca1dc98cc72803c5352&title_only=${searchedJobs.title.replaceAll(' ', '%20')}&where=${searchedJobs.location.replaceAll(' ', '%20').replaceAll(',', '%2C')}`);
                setAxiosResults(results.data.results);
            }
        }

       sendAxiosRequest();
    }, [searchedJobs])

    return (
        <div>
            <SearchBar grabFormData={grabFormData}/>
            <FilterSearchResultsForm />
            {loadJobListingContainer()}
        </div>
    )
}

export default Home; 