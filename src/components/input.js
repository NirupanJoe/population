import { React } from 'react';
import context from '../core/context';

const Input = (data, key) => {
	const { name, type } = data;
	const updateName = name[0].toLowerCase() + name.slice(1);

	return (
		<label key={ key } role="input">
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

export default Input;
