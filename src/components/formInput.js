import { React } from 'react';
import context from '../core/context';
import Container from './container';
import GenInput from './genInput';

const FormInput = () =>
	<div role="formInput" className="form-input">
		{Container(context.config.genInput, GenInput)}
	</div>;

export default FormInput;
