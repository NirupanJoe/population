import { React } from 'react';
import './App.scss';
import Location from './components/location';
import TotalPopulation from './components/totalPopulation';
import AddButton from './components/addButton';
import MalePopulation from './components/malePopulation';
import FemalePopulation from './components/femalePopulation';

const App = () =>
	<div role="App" className="App">
		Location:{ Location() }
		TotalPopulation:{ TotalPopulation() }
		MalePopulation:{ MalePopulation()}
		FemalePopulation:{ FemalePopulation()}
		{ AddButton() }
	</div>;

export default App;
