import React, { Component } from 'react'

class TextDisplay extends Component {

	render() {
		return (
			<div>
				<div>Im going to display text from parent: {this.props.text}</div>
				<button onClick={this.handleClick.bind(this)}>delete one letter</button>
			</div>
		)
	}

}

export default TextDisplay