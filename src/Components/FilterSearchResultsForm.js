import React, {useState, useEffect, useMemo} from 'react';
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
  { name: 'full_time', value: '1', label: 'Full-time' },
  { name: 'part_time', value: '1', label: 'Part-time' },
]

const sortByOptions = [
    { name: 'sort_by', value: 'date', label: 'Date' },
    { name: 'sort_by', value: 'salary', label: 'Salary' },
    { name: 'sort_by', value: 'relevance', label: 'Relevance' },
  ]

  const jobTypeOptions = [
    { name: 'permanent', value: '1', label: 'Permanent' },
    { name: 'contract', value: '1', label: 'Contract' },
    { name: 'default', value: '', label: 'Default' },
  ]

const FilterSearchResultsForm = ({grabFilteredFormData}) => {
    const INITIAL_STATE = useMemo(() => {
      return {
        salary: '',
        full_time: '',
        part_time: '',
        permanent: '',
        contract: '',
        sort_by: '',
        default: '',
    }
  }, []);

    const  [formData, setFormData] =  useState(INITIAL_STATE);

	const handleChange = (evt) => {
    const value = evt.value;
    const name = evt.name;
   
      if(name === 'full_time'){
        setFormData({
          ...formData,
          [evt.name]: value, 
          part_time: ''
        })
      } else if(name === 'part_time'){
        setFormData({
          ...formData,
          [evt.name]: value, 
          full_time: ''
        })
      } else if(name === 'permanent'){
        setFormData({
          ...formData,
          [evt.name]: value, 
          contract: ''
        })
      } else if(name === 'contract'){
        setFormData({
          ...formData, 
          [evt.name]: value, 
          permanent: ''
        })
      } else if(name === 'default'){
        setFormData({
          ...formData, 
          [evt.name]: value, 
          permanent: '',
          contract: ''
        })
      } else {
        setFormData({
          ...formData,
          [evt.name]: value
        });
      }
    }
    
    useEffect(() => {
        const handleSubmit = () => {
            if(formData !== INITIAL_STATE){
                grabFilteredFormData(formData);
            }
        }

        handleSubmit();
    }, [formData, INITIAL_STATE, grabFilteredFormData])

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