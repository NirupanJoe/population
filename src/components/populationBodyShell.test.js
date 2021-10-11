import { render } from '@testing-library/react';
import { rndString } from '@laufire/utils/random';
import PopulationBodyShell from './populationBodyShell';

describe('PopulationBodyShell', () => {
	const data = rndString();
	const label = rndString();

	test('PopulationBodyShell render', () => {
		const component = render(PopulationBodyShell(data, label))
			.getByRole(label);

		expect(component).toBeInTheDocument();
		expect(component).toHaveTextContent(data);
		expect(component).toHaveClass('attribute');
	});
});
