import { BaseButton, GoogleSignInButton, InvertedButton, ButtonSpinner } from './button.styles';

export const BUTTON_TYPE_CLASSES = {
	base: 'base',
	google: 'google-sign-in',
	inverted: 'inverted',
};

const getButton = (buttontype = BUTTON_TYPE_CLASSES.base) =>
	({
		[BUTTON_TYPE_CLASSES.base]: BaseButton,
		[BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
		[BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
	}[buttontype]);

const Button = ({ children, buttontype, isLoading, ...otherProps }) => {
	const CustomButton = getButton(buttontype);
	return (
		<CustomButton disabled={isLoading} {...otherProps}>
			{isLoading ? <ButtonSpinner /> : children}
		</CustomButton>
	);
};

export default Button;
