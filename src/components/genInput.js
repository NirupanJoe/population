import { React } from 'react';
import context from '../core/context';

const GenInput = (data, key) => {
	const { name, type } = data;
	const updateName = name[0].toLowerCase() + name.slice(1);

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
