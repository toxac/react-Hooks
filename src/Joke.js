import React from "react";
import Error from "./Error";

const Joke = (props) => {
  const errorView = <Error error={props.message} />;
  const jokeSingleView = <h1>{props.joke}</h1>;
  const jokeTwoPart = (
    <div>
      <h2>
        <i>{props.setup}</i>
      </h2>
      <h1>{props.delivery} </h1>
    </div>
  );
  const displayJoke = props.type === "twopart" ? jokeTwoPart : jokeSingleView;
  return <div>{props.error ? errorView : displayJoke}</div>;
};

export default Joke;
