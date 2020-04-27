import React, { useState } from 'react';
import './App.css';

const App = (props) => {
	const [selected, setSelected] = useState(0)
	const showAnecdote = () => setSelected(Math.floor(Math.random() * props.anecdotes.length))

	return (
	    <div>
			<p>{props.anecdotes[selected]}</p>
			<button onClick={showAnecdote}>Get another one!</button>
   		</div>
  	)
}

export default App;
