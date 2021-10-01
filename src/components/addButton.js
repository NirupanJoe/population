import { React } from 'react';
import context from '../core/context';
import Population from '../services/populationService';

const AddButton = () =>
	<button
		role="addButton"
		disabled={ Population.isValid(context) }
		onClick={ () => Population.createPopulation(context) }
	>
		Add
	</button>;

export default AddButton;
