import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { SEARCH } from "../utils/queries";
import Auth from "../utils/auth";
import { savePodcastIds, getSavedPodcastIds } from "../utils/localStorage";
import { getPodcastsBySearchTerm } from "../utils/API";
import PodcastCard from "../components/Cards/Cards";
import { RiSdCardFill } from "react-icons/ri";

// localStorage.setItem(
//   "searchResult",
//   JSON.stringify({
//     data: {
//       podcasts: {
//         paginatorInfo: {
//           currentPage: 0,
//           hasMorePages: true,
//           lastPage: 3,
//         },
//         data: [
//           {
//             title: "Hamsters In Paradise",
//             imageUrl:
//               "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/14144636/14144636-1642948795042-6a3a0446109e6.jpg",
//             numberOfEpisodes: 8,
//             id: "1836230",
//             url: "https://www.podchaser.com/podcasts/hamsters-in-paradise-1836230",
//           },
//           {
//             title: "The Hamsters",
//             imageUrl:
//               "https://d12xoj7p9moygp.cloudfront.net/images/default-podcast-image.png",
//             numberOfEpisodes: 1,
//             id: "2743477",
//             url: "https://www.podchaser.com/podcasts/the-hamsters-2743477",
//           },
//           {
//             title: "Creek Hamsters",
//             imageUrl:
//               "https://creekhamsters.files.wordpress.com/2015/03/creekhamsterscover-regular.jpg",
//             numberOfEpisodes: 8,
//             id: "186987",
//             url: "https://www.podchaser.com/podcasts/creek-hamsters-186987",
//           },
//           {
//             title: "Happy Hamsters",
//             imageUrl:
//               "https://i1.sndcdn.com/avatars-ylAHGsZKmwOsNTKV-ZjgX3Q-original.jpg",
//             numberOfEpisodes: 1,
//             id: "1152433",
//             url: "https://www.podchaser.com/podcasts/happy-hamsters-1152433",
//           },
//           {
//             title: "The HHL show | Hamsters Horses and Life",
//             imageUrl:
//               "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/606773/606773-1553250347845-1047aaa9be78b.jpg",
//             numberOfEpisodes: 12,
//             id: "681250",
//             url: "https://www.podchaser.com/podcasts/the-hhl-show-hamsters-horses-a-681250",
//           },
//           {
//             title: "Naked Genetics, from the Naked Scientists",
//             imageUrl:
//               "https://www.thenakedscientists.com/sites/default/files/media/media/images/NS_Genetics_1400.png",
//             numberOfEpisodes: 97,
//             id: "17168",
//             url: "https://www.podchaser.com/podcasts/naked-genetics-from-the-naked-17168",
//           },
//           {
//             title: "The Exotic Pet Vet on Pet Life Radio (PetLifeRadio.com)",
//             imageUrl: "http://petliferadio.com/ExoticPetVet1400.jpg",
//             numberOfEpisodes: 2,
//             id: "226512",
//             url: "https://www.podchaser.com/podcasts/the-exotic-pet-vet-on-pet-life-226512",
//           },
//           {
//             title: "The Adviser Talk",
//             imageUrl:
//               "https://assets.pippa.io/shows/5ef2973a4809863ba4dc98f3/1636402744254-b4c95f289fda929b75d8a6923067448a.jpeg",
//             numberOfEpisodes: 127,
//             id: "2171534",
//             url: "https://www.podchaser.com/podcasts/the-adviser-talk-2171534",
//           },
//           {
//             title: "The Happy Hamster Corner",
//             imageUrl:
//               "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/11094731/11094731-1607139136959-153b98216d0a7.jpg",
//             numberOfEpisodes: 85,
//             id: "3736871",
//             url: "https://www.podchaser.com/podcasts/the-happy-hamster-corner-3736871",
//           },
//           {
//             title: "The hamster care podcast!",
//             imageUrl:
//               "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7554993/7554993-1605657315983-22fd1ba6bcddf.jpg",
//             numberOfEpisodes: 3,
//             id: "2419263",
//             url: "https://www.podchaser.com/podcasts/the-hamster-care-podcast-2419263",
//           },
//         ],
//       },
//     },
//   })
// );

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
