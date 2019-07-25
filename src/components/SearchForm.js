import React, { useState } from 'react';
import './SearchForm.css'

const SearchForm = (props) => {
  const [searchedUsers, setSearchedUsers] = useState([]);
  let textInput = null;

  const onSubmit = (e) => {
    e.preventDefault();
    const searchText = textInput.value.trim();
    if (searchText && props.userSearch) {
      props.userSearch(searchText);
    }
    
    setSearchedUsers(su => [...su, searchText])
    console.log(searchedUsers)
    //localStorage.setItem('searched_users', JSON.stringify(searchText))
    textInput.value = '';
  }
  
  return (
    <form className="search-form" onSubmit={onSubmit}>
      <input type="text" className="search-input" ref={(input) => { textInput = input }} aria-label="Seach and image" placeholder="search by user..." />
      <button className="button">SEARCH</button>
    </form>
  );
}

export default SearchForm;