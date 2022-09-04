import React, { useEffect, useState } from "react";

import { useQuery } from "@apollo/client";
import { SEARCH } from "../utils/queries";
import Auth from "../utils/auth";
import { savePodcastIds, getSavedPodcastIds } from "../utils/localStorage";
import { getPodcastsBySearchTerm } from "../utils/API";
import PodcastCard from "../components/Cards/Cards";
import { RiSdCardFill } from "react-icons/ri";

const Search = (props) => {
    const [formState, setFormState] = useState({ search: "" });

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

        if (!searchInput) {
          return false;
        }

        function loadResult() {
            setIsLoading(true);
            // try {
            getPodcastsBySearchTerm(formState.searchInput) //api call with search term
                .then((response) => response.json())
                .then(function (data) {
                    setResults([...results, data]);
                    setIsLoading(false);
                });
        }                
        const [results, setResults]  = useState([]);
        const [isLoading, setIsLoading] = useState(true);
        useEffect(() => {
            loadResult();
        }, []);
    
        if (results.length === 0) {
            return <p>Loading...</p>;
        }
        return (
            <div>
                <ul>
                    {results.map((result) => {
                        return <li key={result.key}>{result.result}</li>;
                    })}
                </ul>
            </div>
        );
                                
    }
        
   

//   const resultsObject = ({ id, title, imageURL, numberOfEpisodes, url }) => {
//     const searchResult = JSON.parse(localStorage.getItem("searchResult"));
//     const resultsArray = searchResult.data.podcasts.data
    
//     const renderArray = resultsArray.map(result => {
//       id = result.id;
//       imageURL = result.imageURL;
//       numberOfEpisodes = result.numberOfEpisodes;
//       title = result.title;
//       url = result.url;

//       //push to global array variable 


  
//       return (

//         <div className="podcast-card">
//           <p>{renderArray[0].title}</p>
//           <p>{imageURL}</p>
//           <p>{url}</p>
//           <p>{numberOfEpisodes}</p>
//           <p>{id}</p>
//         </div>
//       )
//     })
 

//   const getLocalStorage = () => {
//     localStorage.getItem("searchResult", JSON.stringify("searchResult"));
//   };
//   const resultsArray = searchResult.data.podcasts.data
//   let savedPodcasts = JSON.parse(localStorage.getItem("searchResult"))
//   getLocalStorage();

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
          <h4>Or choose from one of our popular categories!</h4>
          {/* <div className="search-btn-container">
            <button onClick={(e) => buttonSearch(e.target.textContent)}>
              Dogs
            </button>
            <button onClick={(e) => buttonSearch(e.target.textContent)}>
              Cats
            </button>
            <button onClick={(e) => buttonSearch(e.target.textContent)}>
              Whales
            </button>
            <button onClick={(e) => buttonSearch(e.target.textContent)}>
              Horses
            </button>
            <button onClick={(e) => buttonSearch(e.target.textContent)}>
              Dragons
            </button>
          </div>
        </div> */}
        </div>
        <div>

        </div>

               {/* <div className="container"></div>
                    {savedPodcasts.map(savedPodcast => (
                    <PodcastCard key={savedPodcast.id} podcast="podcast" />
                    ))}
                    </div> */}
            <div>
        </div> 
        </div>
     </main>
    );
};

export default Search;
        