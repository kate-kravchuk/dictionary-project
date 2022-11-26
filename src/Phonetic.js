import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <section>
        <a href={props.phonetic.audio} target="_blank">
          How to pronounce?
        </a>
        <span className="text">{props.phonetic.text}</span>
      </section>
    </div>
  );
}
