import React from "react";
import person from "./Person";
const Person = (props) => {
  return (
    <div className="carte">
      <img src={props.person.Image} />
      <h1> {props.person.Name} </h1>
      <p>{props.person.Description}</p>
    </div>
  );
};

export default Person;
