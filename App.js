import React, { useState } from "react";
import ReactPlayer from 'react-player'
function App() {
  const [l, setL] = useState("");
  const [text, settext] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setL(event.target.value);
  }

  function handleClick(event) {
    settext(l);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Anime</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter url"
          value={l}
        />
        <button type="submit">Submit</button>
      </form>

      <ReactPlayer
          url={text}
          className='react-player'
          playing
        />
    </div>
  );
}

export default App;