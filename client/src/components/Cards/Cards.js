import React from 'react';
import styles from "./card.module.css";

const PodcastCard = (props) => {
  return (
    <div className = {styles.Cards} >
      <div className={styles.image}>
        <a href={props.imageURL} alt="null" className={styles.image} ></a>
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
