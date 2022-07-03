import React from 'react';
import './App.css';
import Jokes from "./components/Jokes"
import JokesData from "./components/JokesData"


function App() {
  const jokeElements = JokesData.map(jokes => {
    return <Jokes setup={jokes.setup} punchine={jokes.punchline} />
  }) 
  return (
    <div>
      {jokeElements}
    </div>
  );
}

export default App;