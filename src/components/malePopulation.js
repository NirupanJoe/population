import { React } from 'react';
import context from '../core/context';

const MalePopulation = () =>
	<input
		role="malePopulation"
		type="number"
		value={ context.state.malePopulation }
		onChange={ (evt) => context.actions
			.MalePopulationInput(evt.target.value) }
	/>;

export default MalePopulation;
