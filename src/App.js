import { useDispatch, useSelector } from 'react-redux';
import { dec, inc, reset } from './store';

import './App.css';

function App() {
	const count = useSelector(state => state)
	const dispatch = useDispatch()

	return (
	<div className="App">
	<div>{count}</div>
		<button onClick={() => dispatch(dec)}>-</button>
		<button onClick={() => dispatch(inc)}>+</button>
		<button onClick={() => dispatch(reset)}>reset</button>
		
	</div>
);
}

export default App;
