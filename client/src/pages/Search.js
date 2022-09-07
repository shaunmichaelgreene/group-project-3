import React, { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import { getPodcastsBySearchTerm } from "../utils/API";
import SearchResultsComp from "../components/SearchResultsComp";
import { RiSdCardFill } from "react-icons/ri";
// import { Link } from "react-router-dom";
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
  const loggedIn = Auth.loggedIn();

  //buttonSearch logic starts here
  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    if (searchTerm == "") {
      return;
    }
    // console.log(searchTerm);
    // const searchVariable = searchTerm;
    try {
      getPodcastsBySearchTerm(searchTerm) //api call with search term
        .then(function (response) {
          if (response.ok) {
            response.json().then(function (data) {
              // console.log("data", data);
              setSearchResult(data.data
                .podcasts.data); 
              // console.log("searchResult", searchResult);

          
            });
          }
        });
    } catch (e) {
      console.error(e);
    }
  }, [searchTerm]);


  return (
    <main className="flex-row justify-center mb-4">
      {/* <div className="search-form-container col-12 col-md-6"> */}
        <div className="search-form card col-12 col-md-6 opacity-75">
          <h4 className="card-header text-center">Find your favorite pawed-casts here!</h4>
          {loggedIn && (
            <div className="card-body">
              <div className="search-btn-container opacity-100">
                
                <button className="btn btn-primary" target="_blank"
                  onClick={(e) => setSearchTerm(e.target.textContent)}
                >
                  Dogs <GiSittingDog />
                </button>
                <button className="btn btn-primary" target="_blank" onClick={(e) => setSearchTerm(e.target.textContent)}>
                  Cats <FaCat />
                </button>
                <button className="btn btn-primary" target="_blank"
                onClick={(e) => setSearchTerm(e.target.textContent)}>
                  Whales <GiSpermWhale />
                </button>
                <button className="btn btn-primary" target="_blank"
                onClick={(e) => setSearchTerm(e.target.textContent)}>
                  Horses <FaHorse />
                </button>
                <button className="btn btn-primary" target="_blank"
                onClick={(e) => setSearchTerm(e.target.textContent)}>
                  Dragons <FaDragon />
                </button>
                <button className="btn btn-primary" target="_blank"
                onClick={(e) => setSearchTerm(e.target.textContent)}>
                  Raccoons <GiRaccoonHead />
                </button>
                <button className="btn btn-primary" target="_blank"
                onClick={(e) => setSearchTerm(e.target.textContent)}>
                  Birds <GiHummingbird />
                </button>
                <button className="btn btn-primary" target="_blank"
                onClick={(e) => setSearchTerm(e.target.textContent)}>
                  Turtles <GiTurtle />
                </button>
                <button className="btn btn-primary" target="_blank"
                onClick={(e) => setSearchTerm(e.target.textContent)}>
                  Dinosaurs <GiDinosaurRex />
                </button>
                <button className="btn btn-primary" target="_blank"
                onClick={(e) => setSearchTerm(e.target.textContent)}>
                  Insects <BsBugFill />
                </button>
                <button className="btn btn-primary" target="_blank"
                onClick={(e) => setSearchTerm(e.target.textContent)}>
                  Sheep <GiSheep />
                </button>
                <button className="btn btn-primary" target="_blank"
                onClick={(e) => setSearchTerm(e.target.textContent)}>
                  Puppies <FaDog />
                </button>
                <button className="btn btn-primary" target="_blank"
                onClick={(e) => setSearchTerm(e.target.textContent)}>
                  Kittens <GiCat />
                </button>
                <button className="btn btn-primary" target="_blank"
                onClick={(e) => setSearchTerm(e.target.textContent)}>
                  Squirrels <GiSquirrel />
                </button>
                <button className="btn btn-primary" target="_blank"
                onClick={(e) => setSearchTerm(e.target.textContent)}>
                  Elephants <GiElephant />
                </button>
                <button className="btn btn-primary" target="_blank"
                onClick={(e) => setSearchTerm(e.target.textContent)}>
                  Lions <GiLion />
                </button>
                <button className="btn btn-primary" target="_blank"
                onClick={(e) => setSearchTerm(e.target.textContent)}>
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
      {/* </div> */}
    </main>
  );
};

export default Search;



//CODE ARCHIVE - DO NOT DELETE


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

// let animalsArray = [
//   {
//     animal:"Dogs",
//     icon: "GiSittingDog",
//     id: 1
//   },
//   {
//     animal:"Cats",
//     icon: "FaCat",
//     id: 2
//   },
//   {
//     animal:"Whales",
//     icon: "GiSpermWhale",
//     id: 3
//   },
//   {
//     animal:"Horses",
//     icon: "FaHorse",
//     id: 4
//   },
//   {
//     animal:"Dragons",
//     icon: "Raccoons",
//     id: 5
//   },
//   {
//     animal:"Birds",
//     icon: "GiHummingBird",
//     id: 6
//   },
//   {
//     animal:"Turtles",
//     icon: "GiTurtle",
//     id: 7
//   },
//   {
//     animal:"Dinosaurs",
//     icon: "GiDinosaurRex",
//     id: 8
//   },
//   {
//     animal:"Insects",
//     icon: "BsBugFill",
//     id: 9
//   },
//   {
//     animal:"Sheep",
//     icon: "GiSheep",
//     id: 10
//   },
//   {
//     animal:"Puppies",
//     icon: "FaDog",
//     id: 11
//   },
//   {
//     animal:"Kittens",
//     icon: "GiCat",
//     id: 12
//   },
//   {
//     animal:"Squirrels",
//     icon: "GiSquirrel",
//     id: 13
//   },
//   {
//     animal:"Elephants",
//     icon: "GiElephant",
//     id: 14
//   },
//   {
//     animal:"Lions",
//     icon: "GiLion",
//     id: 15
//   },
//   {
//     animal:"Rabbits",
//     icon: GiRabbit,
//     id: 16
//   },
// ];

// const SearchButton = ({ podcast }) => (
//   <button className="btn btn-primary" 
//     onClick={(e) => setSearchTerm(e.target.textContent)}>
//     {podcast.animal} {`<`}{`${podcast.icon}`} {`/>`}
//   </button>
// );