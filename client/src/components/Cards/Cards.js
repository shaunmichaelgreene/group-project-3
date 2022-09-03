import React from 'react';

const PodcastCard = ({ id, title, imageURL, numberOfEpisodes, url }) => {
  const searchResult = JSON.parse(localStorage.getItem("searchResult"));
  const resultsArray = searchResult.data.podcasts.data
  
  const cardBuilder = resultsArray.map(function(result) {
    id = result.id;
    imageURL = result.imageURL;
    numberOfEpisodes = result.numberOfEpisodes;
    title = result.title;
    url = result.url;

    return (
      <div className="podcast-card">
        <p>{title}</p>
        <p>{imageURL}</p>
        <p>{url}</p>
        <p>{numberOfEpisodes}</p>
        <p>{id}</p>
      </div>
    )
  })  

  
  // return (
  //   <div className = "podcast-card">
  //     <div className="image-container">
  //       <a href={imageURL} alt={title} className="podcast-img"></a>
  //     </div>
  //     <div className="project-item-details">
  //       <h2 className="podcast-url">
  //         <a href={url}>{title}</a>
  //       </h2>
  //       <p className="Number-of-episodes">{numberOfEpisodes}</p>
  //     </div>
  //   </div>
  // );
};

export default PodcastCard;
