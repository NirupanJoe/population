import { React } from 'react';
import context from '../core/context';
import Population from '../services/populationService';
import Remote from '../services/remote';

const AddButton = () =>
	<button
		role="addButton"
		disabled={ Population.isValid(context) }
		onClick={ () => Remote.addPopulation(context) }
	>
		Add
	</button>;

export default AddButton;
