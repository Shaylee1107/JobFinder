import React, {useState, useEffect, useCallback} from 'react';
import SearchBar from '../Components/SearchBar';
import JobListingContainer from '../Components/JobListingContainer';
import FilterSearchResultsForm from '../Components/FilterSearchResultsForm';
import axios from 'axios';
import NextPageArrows from '../Components/NextPageArrows';
import "./Home.css";

const Home = () => {
    const [searchedJobs, setSearchedJobs] = useState(false);
    const [axiosResults, setAxiosResults] = useState(false);
    const [filteredJobs, setFilteredJobs] = useState(false);
    const [pageNum, setPageNum] = useState(1);
    const BASE_URL = `https://api.adzuna.com/v1/api/jobs/us/search/${pageNum}?app_id=a7ebf48d&app_key=a31ecdf957770c324646f06209fa554c`;

    const grabFormData = useCallback((formData) => {
        setSearchedJobs(formData);
    }, []);

    const grabFilteredFormData = useCallback((filterdFormData) => {
        setFilteredJobs(filterdFormData);
    }, []);

    const flipPageNum = (direction) => {
        if(direction === 'left' && pageNum > 1){
            setPageNum(num => num - 1);
        } else {
            setPageNum(num => num + 1);
        }
    }

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
                const params = {
                    what: `${searchedJobs.title || ''}`,
                    where: `${searchedJobs.location || ''}`,
                    sort_by: `${filteredJobs.sort_by}`,
                    salary_min: `${filteredJobs.salary}`,
                    full_time: `${filteredJobs.full_time}`,
                    part_time: `${filteredJobs.part_time}`,
                    permanent: `${filteredJobs.permanent}`,
                    contract: `${filteredJobs.contract}`
                };

                for (const key of Object.keys(params)) {
                  if (params[key] === '') {
                    delete params[key];
                  }
                }

                if(searchedJobs !== false){
                         await axios({
                            method: "get",
                            url: `${BASE_URL}`,
                            params
                          }).then((response) => {
                            setAxiosResults(response.data.results);
                          })
                } else {
                    await axios({
                        method: "get",
                        url: `${BASE_URL}`,
                        params
                      }).then(function (response) {
                        setAxiosResults(response.data.results);
                      });
                    }
                } 
            } 
        
       sendAxiosRequest();
    }, [filteredJobs, searchedJobs])

    return (
        <div>
            <SearchBar grabFormData={grabFormData}/>
            <FilterSearchResultsForm grabFilteredFormData={grabFilteredFormData}/>
            {loadJobListingContainer()}
            <NextPageArrows flipPageNum={flipPageNum}/>
        </div>
    )
}

export default Home; 