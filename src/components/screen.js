import { React } from 'react';
import AddButton from './addButton';
import Location from './location';
import TotalPopulation from './totalPopulation';

const Screen = () =>
	<div role="screen">
		Population:{ Location() }
		TotalPopulation:{ TotalPopulation() }
		{ AddButton() }
	</div>;

export default Screen;
