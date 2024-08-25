// import { Component } from "react";
import './searchBox.css';

const SearchBox  = (props) => {


    const { placeholder, onChangeHandler, className } = props;

    return (
        <input
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
        />
    )
    
}

export default SearchBox;