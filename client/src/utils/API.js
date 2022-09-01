const podchaserToken = `${process.env.REACT_APP_API_KEY}`
// console.log (podchaserToken)

//NEW PODCAST QUERIES (PODCHASER)
export const getPodcastsBySearchTerm = (searchTerm) => {
    return fetch(`https://api.podchaser.com/graphql`, {
        method: 'POST',
        headers: {
            // 'Content-Type': 'application/json',
            'Content-Type': 'application/graphql',
            authorization: `Bearer ${podchaserToken}`,
        },
        body: `query {
            podcasts(searchTerm: "${searchTerm}", filters: {language: "en"}) 
                {
                    paginatorInfo {
                    currentPage,
                    hasMorePages,
                    lastPage,
                    },
                    data {
                        title,
                        imageUrl,
                        numberOfEpisodes,
                        id,
                        url,
                }
            }
        }`
    })
}


// route to get logged in user's info (needs the token)
export const getMe = (token) => {
    return fetch('/api/users/me', {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
  };
  
  export const createUser = (userData) => {
    return fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };
  
  export const loginUser = (userData) => {
    return fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };
  
  // save book data for a logged in user
  export const savePodcast = (podcastData, token) => {
    return fetch('/api/users', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(bookData),
    });
  };
  
  // remove saved book data for a logged in user
  export const deletePodcast = (podcastId, token) => {
    return fetch(`/api/users/books/${bookId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  };
  
  // make a search to google books api
//   export const searchGoogleBooks = (query) => {
//     return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
//   };