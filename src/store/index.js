import { legacy_createStore } from "redux";

import {rootReducer} from './root-reducer';
import { loadState, saveState } from "./local-storage";
import { throttle } from "lodash";

// export const store = legacy_createStore(rootReducer);

export const cofigureStore = () => {
	const persistedState = loadState()

	const store = legacy_createStore(
		rootReducer,
		persistedState, 
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

	store.subscribe(throttle(() => {
		saveState({
			todos: store.getState().todos
		})
	}, 1000))

  return store
}