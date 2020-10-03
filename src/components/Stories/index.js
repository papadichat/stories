import React, { useState, useEffect } from "react";
import axios from "axios";
import CardCss from "./style";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ls from "local-storage";

function Stories({ story }) {
  const [like, setLike] = useState(false);
  const action = () => {
    setLike(!like);
  };
  useEffect(() => {
    setLike(ls.get(story.id) || false);
  }, []);
  useEffect(() => {
    ls.set(story.id, like);
  }, [like]);
  return (
    <CardCss>
      <div className="story-card">
        {like ? (
          <FavoriteIcon
            onClick={action}
            style={{
              position: "absolute",
              color: "#ff4d01",
              right: "0",
              cursor: "pointer",
            }}
          />
        ) : (
          <FavoriteBorderIcon
            onClick={action}
            style={{
              position: "absolute",
              color: "#ff4d01",
              right: "0",
              cursor: "pointer",
            }}
          />
        )}
        <div className="headline">
          {" "}
          <a href={story.story.url} target="_blank">
            {story.story.headline}
          </a>
        </div>
        <div className="author">{story.story.authors[0].slug}</div>
      </div>
    </CardCss>
  );
}

export default Stories;
