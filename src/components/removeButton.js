import { React } from 'react';
import Remote from '../services/remote';

const RemoveButton = (id) =>
	<button
		role="removeButton"
		onClick={ () => Remote.removePopulation(id) }
	>X</button>;

export default RemoveButton;