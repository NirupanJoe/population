import { React } from 'react';
import context from '../core/context';
import Population from '../services/populationService';

const AddButton = () =>
	<button
		role="add-button"
		disabled={ Population.isActive(context) }
		onClick={ () => context.actions.AddPopulation() }
	>
		Add
	</button>;

export default AddButton;
