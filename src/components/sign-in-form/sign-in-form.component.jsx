import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { signInWithGooglePopup, signInAuthWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.scss';

const defaultFormFileds = {
	email: '',
	password: '',
};
const SignInForm = () => {
	const [formFileds, setFormFields] = useState(defaultFormFileds);
	const { email, password } = formFileds;

	const resetFormFields = () => {
		setFormFields(defaultFormFileds);
	};

	const handleSubmit = async event => {
		event.preventDefault();

		try {
			await signInAuthWithEmailAndPassword(email, password);
			resetFormFields();
		} catch (error) {
			switch (error.code) {
				case 'auth/wrong-password':
					alert('incorrect password for email');
					break;
				case 'auth/user-not-found':
					alert('no user associated with this email');
					break;
				default:
					console.log(error);
			}
		}
	};

	const handleChange = event => {
		const { name, value } = event.target;

		setFormFields({ ...formFileds, [name]: value });
	};

	const logGoogleUser = async () => {
		await signInWithGooglePopup();
	};

	return (
		<div className='sign-up-container'>
			<h2>Already have an account?</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email} />
				<FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password} />
				<div className='buttons-container'>
					<Button buttontype={BUTTON_TYPE_CLASSES.base} type='submit'>
						Sign In
					</Button>
					<Button buttontype={BUTTON_TYPE_CLASSES.google} type='button' onClick={logGoogleUser}>
						Google SIGN IN
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
