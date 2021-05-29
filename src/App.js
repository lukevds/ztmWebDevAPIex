import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			jokes: [],
			quantity: 1,
			getJoke: () => {
				return fetch('https://api.chucknorris.io/jokes/random')
							.then(res => res.json())
							.then(joke => { 
								let newJokes = this.state.jokes;
								newJokes.push(joke.value);
								this.setState({ jokes: newJokes })
							});
			}
		}
	}

	//componentDidMount() {
		//this.state.getJoke();
	//}

	onQuantityChange = (event) => {
		this.setState({ quantity: event.target.value })
		this.state.getJoke();
	}

	render () {
		const { jokes } = this.state;

		const jokesArray = jokes.map((joke, i) => {
			return (
				<p key={i}>
					{joke}
				</p>
			);
		});

		//todo 
		//make it so that the input works properly when
		//lowering the quantity
		return (
			<div className="App">
				<h1>Chuck Norris joke generator</h1>
				<p>Number of jokes:</p>
				<input 
					type="number" 
					min="1" 
					max="5" 
					onChange={this.onQuantityChange}
				/>
				{jokesArray}
			</div>
		);
	}
}

export default App;
