import { React } from 'react';
import { render } from '@testing-library/react';
import FormInput from './formInput';
import * as Location from './location';
import * as MalePopulation from './malePopulation';
import * as FemalePopulation from './femalePopulation';
import * as TotalPopulation from './totalPopulation';

const expectations = [
	['location', Location],
	['malePopulation', MalePopulation],
	['femalePopulation', FemalePopulation],
	['totalPopulation', TotalPopulation],
];

test.each(expectations)('formInput render %p', (role, component) => {
	jest.spyOn(Location, 'default').mockReturnValue(<div role="location"/>);
	jest.spyOn(MalePopulation, 'default')
		.mockReturnValue(<div role="malePopulation"/>);
	jest.spyOn(FemalePopulation, 'default')
		.mockReturnValue(<div role="femalePopulation"/>);
	jest.spyOn(TotalPopulation, 'default')
		.mockReturnValue(<div role="totalPopulation"/>);

	const { getByRole } = render(FormInput());

	expect(getByRole('formInput')).toBeInTheDocument();
	expect(getByRole(role)).toBeInTheDocument();
	expect(component.default).toBeCalledWith();
	expect(getByRole('formInput')).toHaveClass('form-input');
	expect(getByRole('formInput')).toHaveTextContent('Location:MalePopulation'
	+ ':FemalePopulation:TotalPopulation');
});
