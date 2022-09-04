import React from "react";
import { Navigate, useParams } from "react-router-dom";
import Auth from "../utils/auth";
import { savePodcastIds, getSavedPodcastIds } from "../utils/localStorage";
// import { getPodcastsBySearchTerm } from "../utils/API";
import PodcastCard from "../components/Cards/Cards";
import { RiSdCardFill } from "react-icons/ri";
let searchResult = JSON.parse(localStorage.getItem("searchResult")).data
  .podcasts.data;
console.log(searchResult);


//podcast component
const Podcast = ({podcast}) => (
    <div className="podcast-card card">
        <img
                src={podcast.imageUrl}
                alt={podcast.title}
                className="podcast-img card-img-top"
                ></img>
        <div className="card-body">
            <h5 className="card-title">{podcast.title}</h5>
            <p className="card-text">
                Episode Count: {podcast.numberOfEpisodes}
            </p>
            <a href={podcast.url} className="btn btn-primary">
                    Check It Out On Podchaser!
            </a>
        </div>
    </div>
)


//podcast component
const Podcast = ({ podcast }) => (
  <div className="podcast-card card">
    <img
      src={podcast.imageUrl}
      alt={podcast.title}
      className="podcast-img card-img-top"
    ></img>
    <div className="card-body">
      <h5 className="card-title">{podcast.title}</h5>
      <p className="card-text">Episode Count: {podcast.numberOfEpisodes}</p>
      <a href={podcast.url} className="btn btn-primary">
        Check It Out On Podchaser!
      </a>
    </div>
  </div>
);

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

  //need to add new logic to map over all results and create cards
  //change "results-container" class to card-group once logic is in place?
  return (
    <div className="main">
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block text-center">
          SEARCH RESULTS
        </h2>
      </div>
      <div className="results-container">
        <div className="podcast-card card">
          <img
            src={searchResult[0].imageUrl}
            alt={searchResult[0].title}
            className="podcast-img card-img-top"
          ></img>
          <div className="card-body">
            <h5 className="card-title">{searchResult[0].title}</h5>
            <p className="card-text">
              Episode Count: {searchResult[0].numberOfEpisodes}
            </p>
            <a href={searchResult[0].url} className="btn btn-primary">
              Check It Out On Podchaser!
            </a>
          </div>
          <div className="mapped-container">
            {searchResult.map((podcast) => (
              <Podcast key={podcast.id} podcast={podcast} />
            ))}
          </div>


    //need to add new logic to map over all results and create cards
    //change "results-container" class to card-group once logic is in place? 
    return (
        <div className="main">
            <div className="flex-row mb-3">
                <h2 className="bg-dark text-secondary p-3 display-inline-block text-center">
                    SEARCH RESULTS
                </h2>
            </div>
            <div className="results-container">
                <div className="podcast-card card">
                        <img
                            src={searchResult[0].imageUrl}
                            alt={searchResult[0].title}
                            className="podcast-img card-img-top"
                            ></img>
                    <div className="card-body">
                        <h5 className="card-title">{searchResult[0].title}</h5>
                        <p className="card-text">
                            Episode Count: {searchResult[0].numberOfEpisodes}
                        </p>
                        <a href={searchResult[0].url} className="btn btn-primary">
                                Check It Out On Podchaser!
                        </a>

                    </div>
                    <div className="mapped-container">
                        {searchResult.map(podcast => (
                            <Podcast key={podcast.id} podcast={podcast} />
                        ))}
                    </div>
                </div>
            </div>
            

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
