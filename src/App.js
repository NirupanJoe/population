import { React } from 'react';
import './App.scss';
import Location from './components/location';
import TotalPopulation from './components/totalPopulation';
import AddButton from './components/addButton';

const App = () =>
	<div role="App" className="App">
		Location:{ Location() }
		TotalPopulation:{ TotalPopulation() }
		{ AddButton() }
	</div>;

export default App;
