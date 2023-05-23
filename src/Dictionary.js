import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }
  function handlePhotoResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "0b2bf100cdt092834da45do9a6a6377e";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    let photoApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios.get(photoApiUrl).then(handlePhotoResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h2>What word do you want to look up?</h2>
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Search for a word"
            autoFocus={true}
            onChange={handleKeywordChange}
          />
        </form>
        <div className="hint">
          suggested words:dog, apple, umbrella, plant...
        </div>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
