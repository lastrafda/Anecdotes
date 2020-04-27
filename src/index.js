import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const anecdotes = [
	'Adding manpower to a late software project makes it later!',
	'Premature optimization is the root of all evil.',
	'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
	'Every good work of software starts by scratching a developer\'s personal itch',
	'Perfection (in design) is achieved not when there is nothing more to add, but rather when there is nothing more to take away',
	'Documentation is the castor oil of programming. Managers think it is good for programmers and programmers hate it!.',
	'An organization that treats its programmers as morons will soon have programmers that are willing and able to act like morons only.',
	'Before software can be reusable it first has to be usable.',
	'Why do we never have time to do it right, but always have time to do it over?.'
]

ReactDOM.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
