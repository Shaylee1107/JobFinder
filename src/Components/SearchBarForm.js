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
    }

return  (
  <form className="search-bar-form" onSubmit={handleSubmit}>
  	  <label className="label montserrat left-label">Job Title:
  	    <input  className="input" type="text"  name="title" value={formData.title} onChange={handleChange} />
  	  </label>
      <label className="label montserrat right-label">Location:
  	    <input  className="input" type="text"  name="location" value={formData.location} onChange={handleChange} />
  	  </label>
      <button className='button montserrat'>Search</button>
  </form>
)
}

export default SearchBarForm; 