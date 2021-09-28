import { React } from 'react';
import context from '../core/context';
import Container from './container';
import Input from './input';

const FormInput = () =>
	<div role="formInput" className="form-input">
		{Container(context.config.input, Input)}
	</div>;

export default FormInput;
