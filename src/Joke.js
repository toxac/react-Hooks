import React from "react";
import Error from "./Error";

const Joke = ({ joke }) => {
  const errorView = <Error error={joke.message} />;
  const jokeSingleView = <h1>{joke.joke}</h1>;
  const jokeTwoPart = (
    <div>
      <h2>
        <i>{joke.setup}</i>
      </h2>
      <h1>{joke.delivery} </h1>
      <p> Category : {joke.category} </p>
    </div>
  );
  const displayJoke = joke.type === "twopart" ? jokeTwoPart : jokeSingleView;
  return <div>{joke.error ? errorView : displayJoke}</div>;
};

export default Joke;
