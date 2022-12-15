import React from "react";

import './Card.css';

const Card = ({ prop }) => {
    if (prop.Poster === "N/A")
        prop.Poster = "../../movie_star_312306.webp";
    return (
        <div key={prop.key}>
            <div className="movie-container">
                <h5 className="card-head">{prop.Type}</h5>
                <div className="frame-container">
                    <div className="frame">
                        <p className="movie-name">{prop.Title}</p>
                    </div>
                    <div className="frame">
                        <p className="movie-name">{prop.Title}</p>
                    </div>
                    <div className="frame">
                        <p className="movie-name">{prop.Title}</p>
                    </div>
                    <div className="frame">
                        <p className="movie-name">{prop.Title}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;