const podchaserToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NzI0NjlhNi1kMDA5LTRhMzItYjkzZi1hMzkwNTdhOGFmOGMiLCJqdGkiOiIyM2JmNmM5NzQ2ODI4ZDJiMDQ4YzUyYjAyYTAwODdiNzY0NmFlZGQ1MjNlMGUzNWM2OTJmYjQ1MDcxNGNiZDE0MzU3NzJkZGZkNWQzOGE0NSIsImlhdCI6MTY2MTkwNTE0Ny43NzU0NzEsIm5iZiI6MTY2MTkwNTE0Ny43NzU0NzQsImV4cCI6MTY5MzQ0MTE0Ny43NjEzNzksInN1YiI6IiIsInNjb3BlcyI6WyIqIl19.p_6DO0d4bHed1lPeumBVdTUDhpO5RzhY6A5UizgzEcr1LB85S-OolpI6Od7ZApah4GxVYhjQWoXkhAZoAsRXblLuZx4Q0MTWmT8iXSvJfuru67bfJVczAbnD2vp1y2uboR0sVP_xZyUCKiRnrzBKuM0qxyYYieBdEjFnHTljvZsbbOCiXmNhvlRkdNhBkxbisn6ufmGvSdAH4NJm726WnMXq9cx6sB_enSXGIWXRyei3e_oexWoVzkuxVJsnGaSJ6IpKQ8SDANJAx0xkSb-flEu0cTXB_HOqV2nNAHsvysWAlACtW7mq92Qqr0q5jbnhTV6cmzneYIRIQUW4pGWO_cnAcgfZ0i9Qh4B3AzPQXeeJm9IQv4JiffxLJiJmnBYfa6UDR26gJE7n7G_FL9wUTK5UXn73xk3m_8-lTa1vCLxfo7haXQ6vWkDwtmIYN4GHugqlMpV49Z_gtLY0hc_-XP0b-PxO896-OL_rJpTyHMBbYzHbenAWH2xZHUiRfT1mwRdTrI8JSbhPfVPuWB9rq3j-xFd3Udrq_8b7iWsF8S_knAS-Gxe0NmyQzPJOj-mB3ji1mKWy9mkTqbuLOsapEceoH84Rca7BgCqjxAub2_qt9A6MvYOeQ0zAtQSFtQh1iDod4MrcO4WGm_eeEjBpWqZFg0YglPNqSTFe8pkMvT0"

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