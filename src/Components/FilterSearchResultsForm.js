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
  ]

const FilterSearchResultsForm = ({grabFilteredFormData}) => {
    const INITIAL_STATE = {
        salary: '',
        full_time: '',
        part_time: '',
        permanent: '',
        contract: '',
        sort_by: ''
    }
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
      } else {
        setFormData({
          ...formData,
          [evt.name]: value
        });
      }
    }

  //  makeOnlyOneValuePresent(evt.name);

        //   for (let prop in object) {
        //     if (object.hasOwnProperty(prop)) {
        //         if (object[prop] === value)
        //             return prop;
        //     }
        // }

    // if(formData.full_time === '1'){
    //   setFormData({
    //     ...formData,
    //     part_time: ''
    //   });
    // } else if (formData.part_time === '1'){
    //   setFormData({
    //     ...formData,
    //     full_time: ''
    //   });
    // }
	

  // const makeOnlyOneValuePresent = (name) => {
  //     const updatedForm = () => {
  //       if(name === 'full_time'){
  //         return {...formData, part_time: ''}
  //       } else if(name === 'part_time'){
  //         return {...formData, full_time: ''}
  //       }
  //     }
    
  //   setFormData(updatedForm());


  //     // if (formData[param.full_time] === '1'){
  //     //   setFormData({
  //     //     ...formData,
  //     //     part_time: ''
  //     //   });
  //     // } else {
  //     //   setFormData({
  //     //     ...formData,
  //     //     full_time: ''
  //     //   });
  //     // }
  //     setRender(render => render + 1);
  //   }
  
  


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