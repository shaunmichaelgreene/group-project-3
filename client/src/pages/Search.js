import React, { useState } from "react";
// import PodcastCard from '../components/Cards/cards';

import { useQuery } from "@apollo/client";
import { SEARCH } from "../utils/queries";
import Auth from "../utils/auth";
import { savePodcastIds, getSavedPodcastIds } from "../utils/localStorage";
import { getPodcastsBySearchTerm } from "../utils/API";

const Search = (props) => {
  const [formState, setFormState] = useState({ search: "" });
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
    //   let searchResult = [];

    try {
      getPodcastsBySearchTerm(formState.searchInput) //api call with search term
        .then(function (response) {
          if (response.ok) {
            //if call is successful...
            // console.log(response.json());
            response.json().then(function (data) {
              //convert response to json

              //temporary logic to check if search result exists in local storage or not

              if (localStorage.getItem("searchResult") === null) {
                let searchResult = data; //if localStorage doesn't already contain the search result, add to local storage
                localStorage.setItem(
                  "searchResult",
                  JSON.stringify(searchResult)
                );
              } else {
                //if localStorage does already contain the data, fetch from local storage
                console.log(searchResult);
                searchResult = JSON.parse(localStorage.getItem("searchResult"));
                //will likely break this up into a separate helper function, just making sure the call logic is working.
              }
            });
          }
        });
      console.log(formState.searchInput);
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
