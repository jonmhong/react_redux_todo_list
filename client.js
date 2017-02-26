// This is the starting point for our React app
// It requires a render function that references the (only) DOM element from the index.html that we want to mount
import React from 'react';
import { render } from 'react-dom';
import App from '../components/App'

// first input: define the encompassing components
// second input: DOM element we want to mount to
render(
	<App/>
	document.getElementById('app')
)
