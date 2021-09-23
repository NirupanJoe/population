import { React, useEffect } from 'react';
import './App.scss';
import Location from './components/location';
import TotalPopulation from './components/totalPopulation';
import MalePopulation from './components/malePopulation';
import FemalePopulation from './components/femalePopulation';
import AddButton from './components/addButton';
import PopulationTable from './components/populationTable';
import Remote from './services/remote';

const App = () => {
	useEffect(Remote.fetchPopulation, []);

	return <div role="App" className="App">
		Location:{ Location() }
		TotalPopulation:{ TotalPopulation() }
		MalePopulation:{ MalePopulation()}
		FemalePopulation:{ FemalePopulation()}
		{ AddButton() }
		{ PopulationTable() }
	</div>;
};

export default App;
