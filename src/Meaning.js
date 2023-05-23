import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>{props.meaning.definition}</p>
      <em>
        <p>{props.meaning.example}</p>
        <strong>
          <Synonyms synonyms={props.meaning.synonyms} />
        </strong>
      </em>
    </div>
  );
}
