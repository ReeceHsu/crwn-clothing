import { render, screen } from '@testing-library/react';
import Button, { BUTTON_TYPE_CLASSES } from './button.component';

describe('button', () => {
	it('render button', () => {
		const { asFragment } = render(<Button />);
		expect(asFragment()).toMatchSnapshot();
	});

	it('should be disabled if isLoading is true', () => {
		render(<Button isLoading={true}>Test</Button>);
		expect(screen.getByRole('button')).toBeDisabled();
	});

	it('should render google button when passed google type', () => {
		render(<Button buttontype={BUTTON_TYPE_CLASSES.google}>Test</Button>);
		expect(screen.getByRole('button')).toHaveStyle('background-color: #4285f4');
	});

	it('should render inverted button when passed inverted type', () => {
		render(<Button buttontype={BUTTON_TYPE_CLASSES.inverted}>Test</Button>);
		expect(screen.getByRole('button')).toHaveStyle('background-color: white');
	});
});
