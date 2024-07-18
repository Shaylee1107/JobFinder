import React, {useState} from 'react';

const SearchBarForm = () => {
    const INITIAL_STATE = {
        title: '',
        location: ''
    }
    const  [formData, setFormData] =  useState(INITIAL_STATE);

	const  handleChange = (event) => {
		setFormData(event.target.value);
	};

return  (
  <form>
  	  <label>Job Title:
  	    <input  type="text"  value={formData.title} onChange={handleChange} />
  	  </label>
        <label>Location:
  	    <input  type="text"  value={formData.location} onChange={handleChange} />
  	  </label>
      <button>Search</button>
  </form>
)
}

export default SearchBarForm; 