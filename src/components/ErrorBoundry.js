import React, { Component } from 'react';

/*
	Well ideally with this ErrorBoundry component we can wrap the component or we can wrap a component such
	as the CardList component with an ErrorBoundry component and if the CardList component fails we can
	catch it in the ErrorBoundry.
*/
class ErrorBoundry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}
	/*
	 	It's called componentDidCatch and this componentDidCatch is kind
		of like the try catch block in javascript if anything errors out it will run this lifecycle hook
	*/
	componentDidCatch(error, info) {
		this.setState({ hasError: true })
	}

	render() {
		if (this.state.hasError) {
			return <h1>Oooops. This is wrong</h1>
		}
		return this.props.children
	}
}

export default ErrorBoundry;