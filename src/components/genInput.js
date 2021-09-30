import { React } from 'react';
import context from '../core/context';

// TODO: Use a higher order function.
const GenInput = (data, key) => {
	const { name, type } = data;
	const updateName = name[0].toLowerCase() + name.slice(1);
	// TODO: The role should be the key.

	return (
		<label key={ key } role="genInput">
			<div role={ name }>{name}</div>
			<input
				placeholder={ name }
				type={ type }
				value={ context.state[updateName] }
				onChange={ (evt) => context.actions[`set${ name }`](evt.target.value) }
			/>
		</label>
	);
};

export default GenInput;
