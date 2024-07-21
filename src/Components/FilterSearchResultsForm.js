import React, {useState, useEffect} from 'react';
import './FilterSearchResultsForm.css';
import Select from 'react-select';

const salaryOptions = [
    { name: 'salary', value: '25000', label: '$25,000' },
    { name: 'salary', value: '35000', label: '$35,000' },
    { name: 'salary', value: '45000', label: '$45,000' },
    { name: 'salary', value: '65000', label: '$65,000' },
    { name: 'salary', value: '85000', label: '$85,000' },
    { name: 'salary', value: '100000', label: '$100,000' },
  ]

const hoursOptions = [
  { name: 'hours', value: 'full-time', label: 'Full-time' },
  { name: 'hours', value: 'part-time', label: 'Part-time' },
]

const sortByOptions = [
    { name: 'sort_by', value: 'hybrid', label: 'Hybrid' },
    { name: 'sort_by', value: 'date', label: 'Date' },
    { name: 'sort_by', value: 'salary', label: 'Salary' },
    { name: 'sort_by', value: 'relevance', label: 'Relevance' },
  ]

  const jobTypeOptions = [
    { name: 'job_type', value: 'permanent', label: 'Permanent' },
    { name: 'job_type', value: 'contract', label: 'Contract' },
  ]

const FilterSearchResultsForm = ({grabFilteredFormData}) => {
    const INITIAL_STATE = {
        salary: '25000',
        hours: 'full-time',
        job_type: 'permanent',
        sort_by: 'salary'
    }
    const  [formData, setFormData] =  useState(INITIAL_STATE);

	const  handleChange = (evt) => {
        const value = evt.value;
		setFormData({
            ...formData,
            [evt.name]: value
          });
	};

    useEffect(() => {
        const handleSubmit = () => {
            if(formData !== INITIAL_STATE){
                grabFilteredFormData(formData);
            }
        }

        handleSubmit();
    }, [formData])

return  (
  <form className="filterContainer">
    <Select className="dropDownOptions" placeholder="Salary" options={salaryOptions} onChange={handleChange} />
    <Select className="dropDownOptions" placeholder="Hours" options={hoursOptions} onChange={handleChange}/>
    <Select className="dropDownOptions" placeholder="Sort by" options={sortByOptions} onChange={handleChange}/>
    <Select className="dropDownOptions" placeholder="Job Type" options={jobTypeOptions} onChange={handleChange}/>
  </form>
)
}

export default FilterSearchResultsForm;