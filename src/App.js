import { React, useEffect } from 'react';
import './App.scss';
import AddButton from './components/addButton';
import PopulationTable from './components/populationTable';
import InputForm from './components/formInput';
import Remote from './services/remote';

const App = () => {
	useEffect(Remote.fetchPopulation, []);

	return <div role="App" className="App">
		{ InputForm() }
		{ AddButton() }
		{ PopulationTable() }
	</div>;
};

export default App;
