import { React } from 'react';
import './App.scss';
import Screen from './components/screen';

const App = () =>
	<div role="App" className="App">
		{ Screen() }
	</div>;

export default App;
