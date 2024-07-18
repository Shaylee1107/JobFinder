import React, {useState} from 'react';

const SearchBarForm = ({grabFormData}) => {
    const INITIAL_STATE = {
        title: '',
        location: ''
    }
    const  [formData, setFormData] =  useState(INITIAL_STATE);

	const  handleChange = (evt) => {
        const value = evt.target.value;
		setFormData({
            ...formData,
            [evt.target.name]: value
          });
	};

    const handleSubmit = (event) => {
        event.preventDefault();
        grabFormData(formData);
        setFormData(INITIAL_STATE);
    }

return  (
  <form onSubmit={handleSubmit}>
  	  <label>Job Title:
  	    <input  type="text"  name="title" value={formData.title} onChange={handleChange} />
  	  </label>
        <label>Location:
  	    <input  type="text"  name="location" value={formData.location} onChange={handleChange} />
  	  </label>
      <button>Search</button>
  </form>
)
}

export default SearchBarForm; 