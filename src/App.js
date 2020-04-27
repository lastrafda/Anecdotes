import React, { useState } from 'react';
import './App.css';

const App = (props) => {
	const initialVotes = Array(props.anecdotes.length).fill(0)
	const [selected, setSelected] = useState(0)
	const [votes, setVotes] = useState(initialVotes)
	const vote = () => {
		const copy = Array.from(votes)
		copy[selected] = copy[selected] + 1
		setVotes(copy)
	}
	const getRandom = () => setSelected(Math.floor(Math.random() * props.anecdotes.length))
	return (
	    <div>
			<p>{props.anecdotes[selected]}</p>
			<button onClick={vote}>Vote</button>
			<button onClick={getRandom}>Get another one!</button>
   		</div>
  	)
}

export default App;
