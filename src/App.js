import { React } from 'react';
import './App.scss';
import Location from './components/location';
import TotalPopulation from './components/totalPopulation';
import AddButton from './components/addButton';
import MalePopulation from './components/malePopulation';

const App = () =>
	<div role="App" className="App">
		Location:{ Location() }
		TotalPopulation:{ TotalPopulation() }
		MalePopulation:{ MalePopulation()}
		{ AddButton() }
	</div>;

export default App;
