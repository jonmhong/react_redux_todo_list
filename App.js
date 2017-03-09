// 2 Create this component next, every component needs the React library
// App.js will access all other components
import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './DataList'
// connect creates a function that takes a component and returns a new connected component, which
// listens for changes in the store, and gets it from the provider
import { connect } from 'react-redux'

//ES6 class syntax
class App extends Component {
	render() {
		return(
			<div>
				<div>Input Data Here</div>
				<TodoInput dispatch={this.props.dispatch}/>
				<TodoList todos={this.props.todos}/>
			</div>
			)
	}
}


// var App = React.createClass({
// 	// every component needs a render function
// 	render () {
// 		return <div>This is a React app now!</div>
// 	}
// })

// var App = React.createClass({
// 	render() {
// 		return(
// 			<div>
// 				<div>This is definitely a React app now!!!</div>
// 				<div>This is another line within the same func</div>
// 			</div>
// 			)
// 	}
// })

// the connect is going to expect a function, and it's going to call state to that function
// you want
function mapStateToProps(state) {
	return state 
}

// need to export in order for the client.js to import this file
// syntax: conntect(mapStateToProps) adds on to App component
export default connect(mapStateToProps)(App)

// the bundle.js hasn't been built yet
// so this is where webpack comes in