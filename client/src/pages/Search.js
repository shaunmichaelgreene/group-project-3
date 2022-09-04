import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { SEARCH } from "../utils/queries";
import Auth from "../utils/auth";
import { savePodcastIds, getSavedPodcastIds } from "../utils/localStorage";
import { getPodcastsBySearchTerm } from "../utils/API";
import PodcastCard from "../components/Cards/Cards";
import { RiSdCardFill } from "react-icons/ri";
import SearchResults from "./SearchResults";



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

    if (!searchInput) {
      return false;
    }

    try {
      getPodcastsBySearchTerm(formState.searchInput) //api call with search term
        .then(function (response) {
          if (response.ok) {
            //if call is successful...
            response.json().then(function (data) {
              //convert response to json
              let searchResult = data; // add to local storage
              localStorage.setItem(
                "searchResult",
                JSON.stringify(searchResult)
              );
              // debugger;
              console.log(searchResult);
              return <Navigate to="/search-results" />;

              // return <Navigate to="/search-results" />;
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
                {/* <SearchResults/> */}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Search;

//CODE ARCHIVE - DO NOT DELETE
//button search logic and JSX
// const buttonSearch = async (searchTerm) => {
//     console.log(searchTerm);
//     try {
//         getPodcastsBySearchTerm(searchTerm) //api call with search term
//             .then(function (response) {
//                 if (response.ok) {
//                     response.json().then(function (data) {
//                         if (localStorage.getItem("searchResult") === null) {
//                             let searchResult = data; //if localStorage doesn't already contain the search result, add to local storage
//                             localStorage.setItem(
//                                 "searchResult",
//                                 JSON.stringify(searchResult)
//                             );
//                         } else {
//                             let searchResult = JSON.parse(
//                                 localStorage.getItem("searchResult")
//                             );
//                             console.log(searchResult);
//                             console.log(
//                                 searchResult.data.podcasts.data[0].title
//                             );
//                             console.log(
//                                 searchResult.data.podcasts.data[0].imageUrl
//                             );
//                             console.log(
//                                 searchResult.data.podcasts.data[0]
//                                     .numberOfEpisodes
//                             );
//                             console.log(
//                                 searchResult.data.podcasts.data[0].url
//                             );
//                         }
//                     });
//                 }
//             });
//     } catch (e) {
//         console.error(e);
//     }
// };

// const getLocalStorage = () => {
//     localStorage.getItem("searchResult", JSON.stringify("searchResult"));
// };
// let savedPodcasts = JSON.parse(localStorage.getItem("searchResult"));
// getLocalStorage();

{
  /*<h4>Or choose from one of our popular categories!</h4>
                    <div className="search-btn-container">
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
        </div> */
}

//original search form handler logic:
// getPodcastsBySearchTerm(formState.searchInput) //api call with search term
// .then(function (response) {
//   if (response.ok) {
//     //if call is successful...
//     // console.log(response.json());
//     response.json().then(function (data) {
//       //convert response to json

//       //temporary logic to check if search result exists in local storage or not

//       if (localStorage.getItem("searchResult") === null) {
//         let searchResult = data; //if localStorage doesn't already contain the search result, add to local storage
//         localStorage.setItem(
//           "searchResult",
//           JSON.stringify(searchResult)
//         );
//       } else {
//         //if localStorage does already contain the data, fetch from local storage
//         let searchResult = JSON.parse(
//           localStorage.getItem("searchResult")
//         );
//         console.log(searchResult);
//         //will likely break this up into a separate helper function, just making sure the call logic is working.
//       }
//     });
//   }
// });
// console.log(formState.searchInput);
// } catch (e) {
// console.error(e);
// }
// };
