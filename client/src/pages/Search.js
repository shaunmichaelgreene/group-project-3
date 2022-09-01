import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { SEARCH } from '../utils/queries';
import Auth from '../utils/auth';
import PodcastCard from '../components/Cards/cards';

const Search = (props) => {

    const [formState, setFormState] = useState({ search: '' });
    // const [search, { error }] = useQuery(SEARCH);
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };

    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
    
      try {
        //fetch or search function
      
      } catch (e) {
        console.error(e);
      }
    
    };

    return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-md-6">
        <div className="card">
          <h4 className="card-header">Find your favorite pawed-casts here!</h4>
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
              <input
                className="form-input"
                placeholder="Enter your search term(s) here..."
                name="searchInput"
                type="searchInput"
                id="searchInput"
                value={formState.searchInput}
                onChange={handleChange}
                />
              <button className="btn d-block w-100" type="submit">
                Search!
              </button>
            </form>
          </div>
        </div>
        <div className="podcasts">
          <PodcastCard />
        </div>
      </div>
    </main>
  );
};

export default Search;