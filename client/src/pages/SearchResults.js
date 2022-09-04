import React from "react";
import { Navigate, useParams } from "react-router-dom";
import Auth from "../utils/auth";
import { savePodcastIds, getSavedPodcastIds } from "../utils/localStorage";
// import { getPodcastsBySearchTerm } from "../utils/API";
import PodcastCard from "../components/Cards/Cards";
import { RiSdCardFill } from "react-icons/ri";


const SearchResults = () => {

  // does not work - additional tweaking needed
//   if (Auth.loggedIn) {
//     alert('You must logged in to see this page. Please use the navigation links sign up or log in. Click OK to redirect')

//     return <Navigate to="/" />;
//   }

//does not work - undefined
//   if (loading) {
//     return <div>Loading...</div>;
//   }
let searchResult = JSON.parse(localStorage.getItem("searchResult")).data.podcasts.data;
console.log(searchResult);
  
//need to add new logic to map over all results and create cards
  return (
    <div>
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          SEARCH RESULTS:
        </h2>
      </div>

      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-8">
          <p>{searchResult[0].title}</p>
          <p>{searchResult[0].url}</p>
          <p>{searchResult[0].id}</p>
          <p>{searchResult[0].imageUrl}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;



// const resultsObject = ({ id, title, imageURL, numberOfEpisodes, url }) => {
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