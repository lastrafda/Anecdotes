import React, { useState, useEffect } from 'react';
import './App.css';
import { Button } from 'semantic-ui-react';
import Navbar from './components/Navbar'
import Rankings from './components/Rankings'


const App = ({anecdotes}) => {
	const initialPoints = Array(anecdotes.length).fill(0)
	const [selected, setSelected] = useState(0)
	const [points, setPoints] = useState(initialPoints)
	const [ranks, setRanks] = useState(Array(anecdotes.length))

	const vote = () => {
		const cPoints = [...points]
		const cRanks = [...ranks]
		cPoints[selected] = cPoints[selected] + 1
		setPoints(cPoints)
		cRanks[selected].points = cPoints[selected]
		setRanks(cRanks)
	}
	const getRandom = () => setSelected(Math.floor(Math.random() * anecdotes.length))
	const mostVoted = points.reduce((previousValue, currentValue, currentIndex, arr) => currentValue > arr[previousValue] ? currentIndex : previousValue, 0) 
	// initialize ranks value
	useEffect(() => {
		anecdotes.forEach((items, i) => {
			ranks[i] = {
				anecdote : items,
				points: 0
			}
		});
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	const sortRanks = () => {
		const cRank = [...ranks]
		if (typeof(ranks[0])!== 'undefined') {
			return cRank.sort((a, b) => (a.points > b.points) ? -1 : 1)		
		}
	}
	const hasVotes = typeof(sortRanks()) !== 'undefined'
	let sortedAnecdotes
	if (hasVotes) {
		sortedAnecdotes = sortRanks()
	} else {
		sortedAnecdotes = ranks
	}
	return (
	    <div>
			<Navbar></Navbar>
			<div className='main-container'>
				<h1>Choose your favorite anecdote!</h1>
				<p>{anecdotes[selected]}</p>
				<div>
					<Button className="ui primary button" onClick={vote}>Vote</Button>
					<Button className="ui secondary button" onClick={getRandom}>another one!</Button>
				</div>
				<h2>Anecdote with most votes</h2>
				<p>{anecdotes[mostVoted]}</p>
				<div>
					<h3>Rankings</h3>
					<Rankings data={sortedAnecdotes}></Rankings>
				</div>
			</div>
   		</div>
  	)
}

export default App;
