import { React } from 'react';
import AddButton from './addButton';
import Location from './location';

const Screen = () =>
	<div role="screen">
		Population:{ Location() }
		{ AddButton() }
	</div>;

export default Screen;
