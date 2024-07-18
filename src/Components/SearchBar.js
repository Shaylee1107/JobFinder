import React from 'react';
import "./SearchBar.css";
import SearchBarForm from './SearchBarForm';

const SearchBar = () => {
    const grabFormData = (formData) => {
        console.log(formData, 'formData')
    }

    return (
        <div className="Formcontainer">
            <SearchBarForm grabFormData={grabFormData}/>
        </div>
    )
}

export default SearchBar; 