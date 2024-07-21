import React, {useState, useEffect, useCallback} from 'react';
import SearchBar from '../Components/SearchBar';
import JobListingContainer from '../Components/JobListingContainer';
import FilterSearchResultsForm from '../Components/FilterSearchResultsForm';
import axios from 'axios';
import "./Home.css";

const Home = () => {
    const [searchedJobs, setSearchedJobs] = useState(false);
    const [axiosResults, setAxiosResults] = useState(false);
    const [filteredJobs, setFilteredJobs] = useState(false);

    const grabFormData = useCallback((formData) => {
        setSearchedJobs(formData);
        console.log(formData, 'FORM DAT IN SERAHED JOBS')
    }, []);

    const grabFilteredFormData = useCallback((filterdFormData) => {
        console.log(filterdFormData, 'formData IN HOME FILTERED');
        setFilteredJobs(filterdFormData);
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

    useEffect(() => {
        const sendAxiosRequest = async () => {
            if(filteredJobs !== false){
                if(searchedJobs !== false){
                    let results = await axios.get(`http://api.adzuna.com:80/v1/api/jobs/us/search/1?app_id=e8c48744&app_key=317b825c177fbca1dc98cc72803c5352&what=${searchedJobs.title.replaceAll(' ', '%20')}&where=${searchedJobs.location.replaceAll(' ', '%20').replaceAll(',', '%2C')}&sort_by=${filteredJobs.sort_by}&salary_min=${filteredJobs.salary}`);
                    setAxiosResults(results.data.results);
                } else if (searchedJobs.title === '') {
                    let results = await axios.get(`http://api.adzuna.com:80/v1/api/jobs/us/search/1?app_id=e8c48744&app_key=317b825c177fbca1dc98cc72803c5352&where=${searchedJobs.location.replaceAll(' ', '%20').replaceAll(',', '%2C')}sort_by=${filteredJobs.sort_by}&salary_min=${filteredJobs.salary}`);
                    setAxiosResults(results.data.results);
                } else if (searchedJobs.location === '') {
                    let results = await axios.get(`http://api.adzuna.com:80/v1/api/jobs/us/search/1?app_id=e8c48744&app_key=317b825c177fbca1dc98cc72803c5352&what=${searchedJobs.title.replaceAll(' ', '%20')}&sort_by=${filteredJobs.sort_by}&salary_min=${filteredJobs.salary}`);
                    setAxiosResults(results.data.results);
                } else {
                    let results = await axios.get(`http://api.adzuna.com:80/v1/api/jobs/us/search/1?app_id=e8c48744&app_key=317b825c177fbca1dc98cc72803c5352&sort_by=${filteredJobs.sort_by}&salary_min=${filteredJobs.salary}`);
                    setAxiosResults(results.data.results);
                }
                //http://api.adzuna.com:80/v1/api/jobs/gb/search/1?app_id={YOUR_APP_ID}&app_key={YOUR_APP_KEY}&results_per_page=20&what=javascript%20developer&what_exclude=java&where=london&sort_by=salary&salary_min=30000&full_time=1&permanent=1&content-type=application/json
            }
        }

       sendAxiosRequest();
    }, [filteredJobs])

    return (
        <div>
            <SearchBar grabFormData={grabFormData}/>
            <FilterSearchResultsForm grabFilteredFormData={grabFilteredFormData}/>
            {loadJobListingContainer()}
        </div>
    )
}

export default Home; 