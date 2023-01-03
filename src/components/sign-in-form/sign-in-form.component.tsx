import { useState, FormEvent, ChangeEvent } from 'react';
import { AuthError, AuthErrorCodes } from 'firebase/auth';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { googleSignInStart, emailSignInStart } from '../../store/user/user.action';

import { SignUpContainer, ButtonsContainer } from './sign-in-form.styles';

const defaultFormFileds = {
	email: '',
	password: '',
};
const SignInForm = () => {
	const dispatch = useDispatch();
	const [formFileds, setFormFields] = useState(defaultFormFileds);
	const { email, password } = formFileds;

	const resetFormFields = () => {
		setFormFields(defaultFormFileds);
	};

	const signInWithGoogle = async () => {
		dispatch(googleSignInStart());
	};

	const handleSubmit = async (event: FormEvent<HTMLInputElement>) => {
		event.preventDefault();

		try {
			dispatch(emailSignInStart(email, password));
			resetFormFields();
		} catch (error) {
			switch ((error as AuthError).code) {
				case AuthErrorCodes.INVALID_PASSWORD:
					alert('incorrect password for email');
					break;
				case AuthErrorCodes.USER_DELETED:
					alert('no user associated with this email');
					break;
				default:
					console.log(error);
			}
		}
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormFields({ ...formFileds, [name]: value });
	};

	return (
		<SignUpContainer>
			<h2>Already have an account?</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={e => handleSubmit}>
				<FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email} />
				<FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password} />
				<ButtonsContainer>
					<Button type='submit'>Sign In</Button>
					<Button buttontype={BUTTON_TYPE_CLASSES.google} type='button' onClick={signInWithGoogle}>
						Google SIGN IN
					</Button>
				</ButtonsContainer>
			</form>
		</SignUpContainer>
	);
};

export default SignInForm;
