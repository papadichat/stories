import React, { useState, useEffect } from "react";
import axios from "axios";
import CardCss from "./style";
import Stories from "../../components/Stories";

function App() {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://nl-static-site-assets.s3.ap-south-1.amazonaws.com/reports.json`
      )
      .then((res) => {
        console.log(res);
        const { data } = res;
        console.log(data);
        setStories(data.items);
        console.log(stories);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <CardCss>
      {stories &&
        stories.map((story) => {
          return <Stories story={story} />;
        })}
    </CardCss>
  );
}

export default App;
