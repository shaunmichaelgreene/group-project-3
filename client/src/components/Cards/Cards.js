import React from 'react';

const PodcastCard = ({ title, imageURL, numberOfEpisodes, url }) => {
  
  return (
    <div className = "podcast-card">
      <div className="image-container">
        <a href={imageURL} alt={title} className="podcast-img"></a>
      </div>
      <div className="project-item-details">
        <h2 className="podcast-url">
          <a href={url}>{title}</a>
        </h2>
        <p className="Number-of-episodes">{numberOfEpisodes}</p>
      </div>
    </div>
  );
};

export default PodcastCard;
