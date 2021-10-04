import { React } from 'react';
import context from '../core/context';
import genInput from './genInput';
import { values, map } from '@laufire/utils/collection';

const InputForm = () =>
	<div role="formInput" className="form-input">
		{ values(map(context.config.inputs, (value) =>
			genInput(value)(context)))}
	</div>;

export default InputForm;
