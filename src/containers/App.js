import React, { Component } from 'react';
import CardList from '../components/CardList';
import { robots } from '../components/robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css'; 

class App extends Component {
	constructor() {
		super()
		// State is something, that can CHANGE
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}
	// As the React function, we don't need to do arrow function
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ robots: users}));
	}

	onSearchChange = (event) => {
		//Update state (searchfield in our case). If you want to change state, you have to always do this...
		this.setState({searchfield: event.target.value})
	}
	render() {
		const {robots, searchfield} = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
			return !robots.length ?
	    	<h1>Loading</h1> :
			(
				<div className='tc'>
					<h1 className='f1'>Robofriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<ErrorBoundry>
							<CardList robots={filteredRobots} />
						</ErrorBoundry>
					</Scroll>
				</div>
	  		);
	  	}
	}

		

export default App;