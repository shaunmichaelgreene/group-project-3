import React from 'react';

const PodcastCard = (props) => {
  return (
    <div className = "podcast-card" >
      <div className="image-container">
        <a href={props.imageURL} alt="null" className="podcast-img" ></a>
      </div>
      <div className="podcast-item-details">
        <h2 className="podcast-url" >
          <a href={props.url} key={props.url}>{props.title}</a>
        </h2>
        <p className="Number-of-episodes" key={props.numberOfEpisodes}>{props.numberOfEpisodes} </p>
      </div>
    </div>
  );
};

export default PodcastCard;
