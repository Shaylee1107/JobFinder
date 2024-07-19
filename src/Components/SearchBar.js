import React from 'react';
import "./SearchBar.css";
import SearchBarForm from './SearchBarForm';

const SearchBar = ({grabFormData}) => {
    return (
        <div className="Formcontainer">
            <SearchBarForm grabFormData={grabFormData}/>
        </div>
    )
}

export default SearchBar; 