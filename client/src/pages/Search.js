import React, { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { SEARCH } from "../utils/queries";
import Auth from "../utils/auth";
import { savePodcastIds, getSavedPodcastIds } from "../utils/localStorage";
import { getPodcastsBySearchTerm } from "../utils/API";
import SearchResultsComp from "../components/SearchResultsComp";
import PodcastCard from "../components/Cards/Cards";
import { RiSdCardFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { BsBugFill } from "react-icons/bs";
import {
  FaDragon,
  FaDog,
  FaCat,
  FaHorse,
  FaFrog,
  FaHome,
} from "react-icons/fa";
import {
  GiSpermWhale,
  GiSittingDog,
  GiDolphin,
  GiHummingbird,
  GiTurtle,
  GiDinosaurRex,
  GiPig,
  GiSheep,
  GiCat,
  GiSquirrel,
  GiElephant,
  GiLion,
  GiRabbit,
  GiRaccoonHead,
} from "react-icons/gi";
const Search = (props) => {
  let navigate = useNavigate();
  let path = `/search-results`;
  const loggedIn = Auth.loggedIn();

  //buttonSearch logic starts here
  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")
  //  = async (searchTerm) => {

  useEffect(() => {
    if (searchTerm == "") {
      return;
    }
    console.log(searchTerm);
    // const searchVariable = searchTerm;
    try {
      getPodcastsBySearchTerm(searchTerm) //api call with search term
        .then(function (response) {
          if (response.ok) {
            response.json().then(function (data) {
              console.log("data", data);
              setSearchResult(data.data
                .podcasts.data); 
              console.log("searchResult", searchResult);

              // setAnimals(searchResult)
          
            });
          }
        });
    } catch (e) {
      console.error(e);
    }
  }, [searchTerm]);

  //buttonSearch logic ends here

  return (
    <main className="flex-row justify-center mb-4">
      <div className="search-form-container col-12 col-md-6">
        <div className="search-form card">
          <h4 className="card-header">Find your favorite pawed-casts here!</h4>
          {loggedIn && (
            <div className="card-body">
              <div className="search-btn-container">
                <button
                  onClick={(e) => setSearchTerm(e.target.textContent)}
                >
                  Dogs <GiSittingDog />
                </button>
                <button onClick={(e) => setSearchTerm(e.target.textContent)}>
                  Cats <FaCat />
                </button>
                <button onClick={(e) => setSearchTerm(e.target.textContent)}>
                  Whales <GiSpermWhale />
                </button>
                <button onClick={(e) => setSearchTerm(e.target.textContent)}>
                  Horses <FaHorse />
                </button>
                <button onClick={(e) => setSearchTerm(e.target.textContent)}>
                  Dragons <FaDragon />
                </button>
                <button onClick={(e) => setSearchTerm(e.target.textContent)}>
                  Raccoons <GiRaccoonHead />
                </button>
                <button onClick={(e) => setSearchTerm(e.target.textContent)}>
                  Dolphins <GiDolphin />
                </button>
                <button onClick={(e) => setSearchTerm(e.target.textContent)}>
                  Birds <GiHummingbird />
                </button>
                <button onClick={(e) => setSearchTerm(e.target.textContent)}>
                  Turtles <GiTurtle />
                </button>
                <button onClick={(e) => setSearchTerm(e.target.textContent)}>
                  Dinosaurs <GiDinosaurRex />
                </button>
                <button onClick={(e) => setSearchTerm(e.target.textContent)}>
                  Insects <BsBugFill />
                </button>
                <button onClick={(e) => setSearchTerm(e.target.textContent)}>
                  Pigs <GiPig />
                </button>
                <button onClick={(e) => setSearchTerm(e.target.textContent)}>
                  Sheep <GiSheep />
                </button>
                <button onClick={(e) => setSearchTerm(e.target.textContent)}>
                  Puppies <FaDog />
                </button>
                <button onClick={(e) => setSearchTerm(e.target.textContent)}>
                  Kittens <GiCat />
                </button>
                <button onClick={(e) => setSearchTerm(e.target.textContent)}>
                  Squirrels <GiSquirrel />
                </button>
                <button onClick={(e) => setSearchTerm(e.target.textContent)}>
                  Elephants <GiElephant />
                </button>
                <button onClick={(e) => setSearchTerm(e.target.textContent)}>
                  Frogs <FaFrog />
                </button>
                <button onClick={(e) => setSearchTerm(e.target.textContent)}>
                  Lions <GiLion />
                </button>
                <button onClick={(e) => setSearchTerm(e.target.textContent)}>
                  Rabbits <GiRabbit />
                </button>
              </div>
            </div>
          )}
          {!loggedIn && (
            <div>You must be logged in to do that!</div>
          )}
          <div className="search-results-container">
            <SearchResultsComp searchTerm={searchTerm} searchResult={searchResult}/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Search;

// const [isClicked, setIsClicked] = useState(false)
// when you click one of the serach buttons setIsClicked(true);

// isClicked ? <SearchResults animals={animals}/> : null


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

// const [formState, setFormState] = useState({ search: "" });
// const [search, { error }] = useQuery(SEARCH);

// const getLocalStorage = () => {
//     localStorage.getItem("searchResult", JSON.stringify("searchResult"));
// };
// let savedPodcasts = JSON.parse(localStorage.getItem("searchResult"));
// getLocalStorage();



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

//original formState logic
// update state based on form input changes
// const handleChange = (event) => {
//   const { name, value } = event.target;

//   setFormState({
//     ...formState,
//     [name]: value,
//   });
// };

//search form handler logic (removed 9/5/2022)
// const handleFormSubmit = async (event) => {
//   event.preventDefault();

//   if (!searchInput) {
//     return false;
//   }

//   try {
//     getPodcastsBySearchTerm(formState.searchInput) //api call with search term
//       .then(function (response) {
//         // const navigate = useNavigate();
//         if (response.ok) {
//           //if call is successful...
//           response.json().then(function (data) {
//             //convert response to json
//             let searchResult = data; // add to local storage
//             localStorage.setItem(
//               "searchResult",
//               JSON.stringify(searchResult)
//             );
//             // debugger;
//             console.log(searchResult);
//             // return <Navigate to="/search-results" />;

//             // return <Navigate to="/search-results" />;
//           });
//         }
//       });
//     console.log(formState.searchInput);
//   } catch (e) {
//     console.error(e);
//   }
// };
