import React, {useState, useEffect, useCallback} from 'react';
import SearchBar from '../Components/SearchBar';
import JobListingContainer from '../Components/JobListingContainer';
import FilterSearchResultsForm from '../Components/FilterSearchResultsForm';
import axios from 'axios';
// import NextPage from '../Components/NextPageArrows';
import "./Home.css";

const Home = () => {
    const [searchedJobs, setSearchedJobs] = useState(false);
    const [axiosResults, setAxiosResults] = useState(false);
    const [filteredJobs, setFilteredJobs] = useState(false);

    const grabFormData = useCallback((formData) => {
        setSearchedJobs(formData);
    }, []);

    const grabFilteredFormData = useCallback((filterdFormData) => {
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
                    if (searchedJobs.title === '') {
                        let results = await axios.get(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=e8c48744&app_key=317b825c177fbca1dc98cc72803c5352&where=${searchedJobs.location.replaceAll(' ', '%20').replaceAll(',', '%2C')}sort_by=${filteredJobs.sort_by}&salary_min=${filteredJobs.salary}&${filteredJobs.hours}=1&${filteredJobs.job_type}=1`);
                        setAxiosResults(results.data.results);
                    } else if (searchedJobs.location === '') {
                        let results = await axios.get(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=e8c48744&app_key=317b825c177fbca1dc98cc72803c5352&what=${searchedJobs.title.replaceAll(' ', '%20')}&sort_by=${filteredJobs.sort_by}&salary_min=${filteredJobs.salary}&${filteredJobs.hours}=1&${filteredJobs.job_type}=1`);
                        setAxiosResults(results.data.results);
                    } else {
                        let results = await axios.get(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=e8c48744&app_key=317b825c177fbca1dc98cc72803c5352&what=${searchedJobs.title.replaceAll(' ', '%20')}&where=${searchedJobs.location.replaceAll(' ', '%20').replaceAll(',', '%2C')}&sort_by=${filteredJobs.sort_by}&salary_min=${filteredJobs.salary}&${filteredJobs.hours}=1&${filteredJobs.job_type}=1&content-type=application/json`);
                        setAxiosResults(results.data.results);
                    }
                } else {
                    let results = await axios.get(`http://api.adzuna.com:80/v1/api/jobs/us/search/1?app_id=e8c48744&app_key=317b825c177fbca1dc98cc72803c5352&sort_by=${filteredJobs.sort_by}&salary_min=${filteredJobs.salary}&${filteredJobs.hours}=1&${filteredJobs.job_type}=1&content-type=application/json`);
                    setAxiosResults(results.data.results);
                } 
            } 
        }

       sendAxiosRequest();
    }, [filteredJobs])

    return (
        <div>
            <SearchBar grabFormData={grabFormData}/>
            <FilterSearchResultsForm grabFilteredFormData={grabFilteredFormData}/>
            {loadJobListingContainer()}
            {/* <NextPage /> */}
        </div>
    )
}

export default Home; 