import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>
        <strong>{props.meaning.partOfSpeech}</strong>
      </h3>

      <p>{props.meaning.definition}</p>
      <em>
        <p className="example">{props.meaning.example}</p>
        <Synonyms synonyms={props.meaning.synonyms} />
      </em>
    </div>
  );
}
