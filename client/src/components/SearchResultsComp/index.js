import React from "react";
import { useState, useEffect } from "react";

const SearchResultsComp = (props) => {

// console.log(props.searchResult);
    const Podcast = ({ podcast }) => (
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
                <p className="card-text description">
                    About: {podcast.description}
                </p>
                <a href={podcast.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    Check It Out On Podchaser!
                </a>
                
            </div>
        </div>
    );

    return (
        <div className="main">
            {!!props.searchTerm &&
            (<div className="flex-row mb-3">
                <h2 className="bg-dark p-3 display-inline-block text-center results-heading">
                    Showing Results for {props.searchTerm}
                </h2>
            </div>)}
            {/* {loggedIn && ( */}
                <div className="results-container">
                    <div className="mapped-container">
                        {props.searchResult.map((podcast) => (
                            <Podcast key={podcast.id} podcast={podcast} 
                            />
                        ))}
                    </div>
                </div>
            {/* )} */}
        </div>
    );
};

export default SearchResultsComp;
