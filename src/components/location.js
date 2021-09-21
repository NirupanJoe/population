import { React } from 'react';
import context from '../core/context';

const Location = () =>
	<input
		role="location"
		value={ context.state.location }
		onChange={ (evt) => context.actions
			.LocationInput(evt.target.value) }
	/>;

export default Location;
