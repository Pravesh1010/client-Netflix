import React from "react";
import { useState } from "react";
import "./listItem.scss";

function ListItem({index}) {
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://lh3.googleusercontent.com/a-/AOh14Gji_wB4Swi7efLPSuAvVUERZmv5RwN9t_vzjr8llg=s360-p-rw-no"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <i class="bi bi-play-fill icon"></i>
              <i class="bi bi-plus icon"></i>
              <i class="bi bi-hand-thumbs-up icon"></i>
              <i class="bi bi-hand-thumbs-down icon"></i>
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              recusandae tenetur numquam maxime porro ea voluptatum
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}

export default ListItem;
