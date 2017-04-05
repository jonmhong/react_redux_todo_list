// create a helper function here
function getId(state) {
	// loop through all the todos and find the maxId
	return state.todos.reduce((maxId, todo) => {
		return Math.max(todo.id, maxId)
	}, -1) + 1 // return maxId then add 1
}

let reducer = function(state, action) {
	switch(ac tion.type) { // look at action.type 
		case 'ADD_TODO': // if case is ADD_TODO
			return Object.assign({}, state, {
				// add new todo info
				todos: [{
					text: action.text,
					completed: false, // to know if its completed
					// id to keep track of things
					id: getId(state)
				}, ...state.todos] // ... is spread operator ES6 syntax
				// takes every item in that array and appends it
			})
			// Object.assign({a: 3}, {b: 2}) ==> {a: 3, b: 2} can take in two+ object parameters
			// and takes the properties of the second, third, etc object and adds it onto the first
			// it's similar to .append() but we don't want to do append; we want to create an entirely new state

		default: // add a default case in a switch statement
			return state; // just returns original state
	}
}


// reducer takes in current state and action as the input
// you can write reducers any way you want, as switch statements

export default reducer