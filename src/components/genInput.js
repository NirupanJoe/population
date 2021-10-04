/* eslint-disable react/display-name */
import { React } from 'react';

const genInput = (data) => (context) => {
	const { label, type } = data;
	const { state } = context;
	const updateName = label[0].toLowerCase() + label.slice(1);

	return (
		<label key={ label } role="genInput">
			<div role={ label }>{label}</div>
			<input
				role={ `${ label }Input` }
				placeholder={ label }
				type={ type }
				value={ state[updateName] }
				onChange={ (evt) => context.actions[`set${ label }`](evt.target.value) }
			/>
		</label>
	);
};

export default genInput;
