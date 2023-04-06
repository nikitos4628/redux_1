import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo} from './store';

import './App.css';

function App() {
	
	return (
	<div className="App">
		<AddTodo/>
		<TodoList/>
	</div>
	);
}

const AddTodo = () => {
	const dispatch = useDispatch()

	const handleSumbit = (e) => {
		e.preventDefault()
		dispatch(addTodo(e.target.title.value))
		e.target.reset()
	}

	return (
		<form onSubmit={handleSumbit}>
			<input type='text' name='title' placeholder='Name Todo'/>
			<input type='submit' value='Add Todo'/>
		</form>
	)
}

const TodoList = () => {
	const todos = useSelector(state => state)
	const dispatch = useDispatch()
	const content = todos.map((e) => (
		<li key={e.id}>
			<input
				type="checkbox"
				checked={e.completed}
				onChange={() => dispatch(toggleTodo(e.id))}
			/>
			{e.title}
			<button 
				onClick={() => dispatch(deleteTodo(e.id))}
			>
					delete
			</button>
		</li>
	))

	return (
		<ul>
			{content}
		</ul>
	)
}


export default App;
