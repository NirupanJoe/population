import { React } from 'react';
import Location from './location';
import TotalPopulation from './totalPopulation';
import MalePopulation from './malePopulation';
import FemalePopulation from './femalePopulation';

const FormInput = () =>
	<div role="formInput" className="form-input">
		Location:{ Location() }
		MalePopulation:{ MalePopulation()}
		FemalePopulation:{ FemalePopulation()}
		TotalPopulation:{ TotalPopulation() }
	</div>;

export default FormInput;
