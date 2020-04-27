import React, { useState } from 'react';
import './App.css';

const App = (props) => {
	const initialPoints = Array(props.anecdotes.length).fill(0)
	const [selected, setSelected] = useState(0)
	const [points, setPoints] = useState(initialPoints)
	const vote = () => {
		const copy = [...points]
		copy[selected] = copy[selected] + 1
		setPoints(copy)
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
