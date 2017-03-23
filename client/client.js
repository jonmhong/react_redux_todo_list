// all the components will be in es6 syntax
import React from 'react';
import { render } from 'react-dom';
import App from '../components/App'

// first input: define the encompassing components
// second input: DOM element we want to mount to
render(
	<App/>
	document.getElementById('app')
)
