import React, { useState, useEffect, useCallback, useContext } from 'react';
import SearchBar from '../Components/SearchBar';
import JobListingContainer from '../Components/JobListingContainer';
import FilterSearchResultsForm from '../Components/FilterSearchResultsForm';
import axios from 'axios';
import NextPageArrows from '../Components/NextPageArrows';
import { LoadingContext } from '../Context/LoadingContext';
import "./Home.css";

const Home = () => {
    const [searchedJobs, setSearchedJobs] = useState(false);
    const [axiosResults, setAxiosResults] = useState(false);
    const [filteredJobs, setFilteredJobs] = useState(false);
    const [pageNum, setPageNum] = useState(1);
    const { enableLoading, disableLoading, showLoadingSign } = useContext(LoadingContext);

    const BASE_URL = `https://api.adzuna.com/v1/api/jobs/us/search/${pageNum}?app_id=a7ebf48d&app_key=a31ecdf957770c324646f06209fa554c`;

    const grabFormData = useCallback((formData) => {
        setPageNum(1);
        setSearchedJobs(formData);
    }, []);

    const grabFilteredFormData = useCallback((filterdFormData) => {
        setPageNum(1);
        setFilteredJobs(filterdFormData);
    }, []);

    const flipPageNum = (direction) => {
        if(direction === 'left'){
            if(pageNum > 1){
                setPageNum(num => num - 1);
            }
        } else {
            setPageNum(num => num + 1);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }

    const loadJobListingContainer = () => {
        if(axiosResults !== false){
            return (
                <JobListingContainer axiosResults={axiosResults} />
            )
        }
    }

    useEffect(() => {
        const sendAxiosRequest = async () => {
            if(searchedJobs === false && filteredJobs === false){
              scrollToTop();
              enableLoading();
              await axios({
                 method: "get",
                 url: `https://api.adzuna.com/v1/api/jobs/us/search/${pageNum}?app_id=a7ebf48d&app_key=a31ecdf957770c324646f06209fa554c`,
               }).then((response) => {
                 setAxiosResults(response.data.results);
               });
               disableLoading();
            }
        }

       sendAxiosRequest();
    }, [pageNum, enableLoading, disableLoading, searchedJobs, filteredJobs])

    useEffect(() => {
        const sendAxiosRequest = async () => {
                const params = {
                    what: `${searchedJobs.title || ''}`,
                    title_only: `${searchedJobs.title || ''}`,
                    where: `${searchedJobs.location || ''}`,
                    sort_by: `${filteredJobs.sort_by || ''}`,
                    salary_min: `${filteredJobs.salary || ''}`,
                    full_time: `${filteredJobs.full_time || ''}`,
                    part_time: `${filteredJobs.part_time || ''}`,
                    permanent: `${filteredJobs.permanent || ''}`,
                    contract: `${filteredJobs.contract || ''}`,
                    default: `${filteredJobs.default || ''}`
                };

                for (const key of Object.keys(params)) {
                  if (params[key] === '') {
                    delete params[key];
                  }
                }

                scrollToTop();
                enableLoading();
                await axios({
                    method: "get",
                    url: `${BASE_URL}`,
                    params
                  }).then(function (response) {
                    setAxiosResults(response.data.results);
                  }); 
                
                disableLoading();
            } 
        
       sendAxiosRequest();
    }, [searchedJobs, filteredJobs, BASE_URL, enableLoading, disableLoading])

    return (
        <div>
            <SearchBar grabFormData={grabFormData}/>
            <FilterSearchResultsForm grabFilteredFormData={grabFilteredFormData}/>
            {showLoadingSign()}
            {loadJobListingContainer()}
            <NextPageArrows flipPageNum={flipPageNum} pageNum={pageNum}/>
        </div>
    )
}

export default Home; 