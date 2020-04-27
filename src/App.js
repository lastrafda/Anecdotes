import React, { useState } from 'react';
import './App.css';

const App = ({anecdotes}) => {
	const initialPoints = Array(anecdotes.length).fill(0)
	const [selected, setSelected] = useState(0)
	const [points, setPoints] = useState(initialPoints)
	const vote = () => {
		const copy = [...points]
		copy[selected] = copy[selected] + 1
		setPoints(copy)
	}
	const getRandom = () => setSelected(Math.floor(Math.random() * anecdotes.length))
	const mostVoted = points.reduce((previousValue, currentValue, currentIndex, arr) => currentValue > arr[previousValue] ? currentIndex : previousValue, 0)
	
	return (
	    <div>
			<p>{anecdotes[selected]}</p>
			<button onClick={vote}>Vote</button>
			<button onClick={getRandom}>Get another one!</button>
			<h2>Anecdote with most votes</h2>
			<p>{anecdotes[mostVoted]}</p>
   		</div>
  	)
}

export default App;
