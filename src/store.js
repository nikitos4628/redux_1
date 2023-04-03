import { legacy_createStore } from "redux";

const reducer = (state = 1, action) => {
	switch (action.type) {
		case 'INC': {
			return state + 1
		}
		case 'DEC': {
			return state - 1
		}
		case 'RESET': {
			return 0
		}
		default: {
			return state
		}
	}
}

export const store = legacy_createStore(reducer)

export const inc = {
	type: 'INC'
}

export const dec = {
	type: 'DEC'
}

export const reset = {
	type: 'RESET'
}