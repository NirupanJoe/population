import { React } from 'react';

const PopulationBodyShell = (data, label) => {
	// eslint-disable-next-line react/destructuring-assignment
	const dataName = label[0].toUpperCase() + label.slice(1);

	return (
		<div
			className="attribute"
			role={ label }
			data-name={ dataName }
		>{data}</div>
	);
};

export default PopulationBodyShell;
