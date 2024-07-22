import React, {useState, useEffect, useCallback} from 'react';
import SearchBar from '../Components/SearchBar';
import JobListingContainer from '../Components/JobListingContainer';
import FilterSearchResultsForm from '../Components/FilterSearchResultsForm';
import axios from 'axios';
// import NextPage from '../Components/NextPageArrows';
import "./Home.css";
const BASE_URL = 'https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=e8c48744&app_key=317b825c177fbca1dc98cc72803c5352';

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
            await axios({
               method: "get",
               url: `${BASE_URL}`,
             }).then((response) => {
               setAxiosResults(response.data.results);
             });
        }

       sendAxiosRequest();
    }, [])

    useEffect(() => {
        const sendAxiosRequest = async () => {
            if(searchedJobs !== false){
                await axios({
                        method: "get",
                        url: `${BASE_URL}`,
                        params: {
                          title_only: `${searchedJobs.title}`,
                          where: `${searchedJobs.location}`
                        }
                      }).then((response) => {
                        setAxiosResults(response.data.results);
                      });
            }
        }

       sendAxiosRequest();
    }, [searchedJobs])

    useEffect(() => {
        const sendAxiosRequest = async () => {
            if(filteredJobs !== false){
                if(searchedJobs !== false){
                         axios({
                            method: "get",
                            url: `${BASE_URL}`,
                            params: {
                              what: `${searchedJobs.title}`,
                              where: `${searchedJobs.location}`,
                              sort_by: `${filteredJobs.sort_by}`,
                              salary_min: `${filteredJobs.salary}`,
                            }
                          }).then(function (response) {
                            setAxiosResults(response.data.results);
                          });
                } else {
                        // let results = await axios.get(`${BASE_URL}&sort_by=${filteredJobs.sort_by}&salary_min=${filteredJobs.salary}&${filteredJobs.hours}=1&${filteredJobs.job_type}=1&content-type=application/json`);
                        // setAxiosResults(results.data.results);
                    axios({
                        method: "get",
                        url: `${BASE_URL}`,
                        params: {
                          sort_by: `${filteredJobs.sort_by}`,
                          salary_min: `${filteredJobs.salary}`,
                        }
                      }).then(function (response) {
                        setAxiosResults(response.data.results);
                      });
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