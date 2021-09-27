import { React, useEffect } from 'react';
import './App.scss';
import AddButton from './components/addButton';
import PopulationTable from './components/populationTable';
import FormInput from './components/formInput';
import Remote from './services/remote';

const App = () => {
	useEffect(Remote.fetchPopulation, []);

	return <div role="App" className="App">
		{ FormInput() }
		{ AddButton() }
		{ PopulationTable() }
	</div>;
};

export default App;
