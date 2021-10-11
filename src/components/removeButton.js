import { React } from 'react';
import Remote from '../services/remote';

const RemoveButton = (id) =>
	<div
		className="attribute remove-population"
		role="removePopulation"
	>
		<button
			role="removeButton"
			className="remove-button"
			onClick={ () => Remote.removePopulation(id) }
		>X</button>
	</div>;

export default RemoveButton;
