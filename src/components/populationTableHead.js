import { React } from 'react';

const PopulationTableHead = (head, key) =>
	<div
		key={ key }
		className="attribute"
		role="populationTableHead"
	>
		{head}
	</div>;

export default PopulationTableHead;
