import React, { useState } from "react";
import Button from "./Button";
import './Jokes.css'
const Jokes = () => {
    const [joke, setJoke] = useState("");

    const fetchApi = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
        .then((res) => res.json())
        .then((data) => setJoke(data.joke));
    }

    return(
        <div className="joke">
            <Button callApi={fetchApi} />
            <p>{joke}</p>
        </div>
    );
}
export default Jokes;