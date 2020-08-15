import React from "react";
import axios from "axios";
import Error from "./Error";
import Joke from "./Joke";

const Jokes = (props) => {
  const jokeURL = "https://sv443.net/jokeapi/v2/joke/Any";
  // Initial state hook to store joke
  const [joke, setJoke] = React.useState({});
  const [jokeCount, setJokeCount] = React.useState(0);
  const [error, setError] = React.useState({});

  React.useEffect(() => {
    // Using effects to fetch new jokes when component is mounted
    // Effects will also run everytime the count increase and hence will fetch a new joke
    axios
      .get(jokeURL)
      .then((response) => {
        // handle success, storing new joke to state
        setJoke(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
        setError(error);
      });
  }, [jokeCount]);

  const handleClick = () => {
    // Increase count for number of jokes viewed
    setJokeCount((prevState) => prevState + 1);
  };

  return (
    <div>
      <h1>{jokeCount}</h1>
      <Joke joke={joke} />
      <button onClick={handleClick}> Get New Joke </button>
    </div>
  );
};

export default Jokes;
