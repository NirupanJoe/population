import { React } from 'react';
import context from '../core/context';

const TotalPopulation = () =>
	<input
		role="totalPopulation"
		type="number"
		value={ context.state.totalPopulation }
		onChange={ (evt) => context.actions
			.TotalPopulationInput(evt.target.value) }
	/>;

export default TotalPopulation;
