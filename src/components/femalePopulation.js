import { React } from 'react';
import context from '../core/context';

const FemalePopulation = () =>
	<input
		role="femalePopulation"
		type="number"
		value={ context.state.femalePopulation }
		onChange={ (evt) => context.actions
			.FemalePopulationInput(evt.target.value) }
	/>;

export default FemalePopulation;
