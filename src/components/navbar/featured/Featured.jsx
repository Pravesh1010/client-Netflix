import React from "react";
import "./featured.scss";
const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && ( 
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://wallpapercave.com/wp/wp6581266.jpg"
        alt=""
        width="100%"
      />
      <div className="info">
        <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt=""
        />
        <span className="desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
          maiores sequi saepe neque, sunt labore, odit accusantium sint fuga
          quibusdam animi delectus enim culpa eaque iste natus. Illum, numquam
          vitae.
        </span>
        <div className="buttons">
          <button className="play">
            <i class="bi bi-play-fill"></i>
            <span>Play</span>
          </button>
          <button className="more">
            <i class="bi bi-info-circle"></i>
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
