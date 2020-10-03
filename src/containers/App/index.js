import React, { useState, useEffect } from "react";
import axios from "axios";
import CardCss from "./style";
import Stories from "../../components/Stories";
import SearchBar from "material-ui-search-bar";

function App() {
  const [stories, setStories] = useState([]);
  const [filterdStories, setFilteredStories] = useState([]);
  const [filter, setFilter] = useState(false);
  const [value, setValue] = useState("");
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
  useEffect(() => {
    if (value === "") {
      setFilter(false);
    } else {
      let filter = stories.filter((story) =>
        story.story.headline.toLowerCase().includes(value.toLowerCase())
      );
      setFilter(true);
      setFilteredStories(filter);
    }
  }, [value]);

  const doSomethingWith = (value) => {
    console.log(value);
  };
  console.log(filter === true);
  return (
    <CardCss>
      <SearchBar
        value={value}
        onChange={(newValue) => setValue(newValue)}
        onRequestSearch={() => doSomethingWith(value)}
        style={{ width: "50%", margin: "auto" }}
      />
      <div className="stories-container">
        {filter
          ? filterdStories &&
            filterdStories.map((story) => {
              return <Stories key={story.id} story={story} />;
            })
          : stories &&
            stories.map((story) => {
              return <Stories key={story.id} story={story} />;
            })}
      </div>
    </CardCss>
  );
}

export default App;
