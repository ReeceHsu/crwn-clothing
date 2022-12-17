import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

import './sign-up-form.styles.scss';

const defaultFormFileds = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};
const SignUpForm = () => {
	const [formFileds, setFormFields] = useState(defaultFormFileds);
	const { displayName, email, password, confirmPassword } = formFileds;

	console.log(formFileds);

	const handleSubmit = async event => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert('passwords do not match');
			return;
		}
		try {
			const { user } = await createAuthUserWithEmailAndPassword(email, password);

			await createUserDocumentFromAuth(user, { displayName });
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				alert('Cannot create user, email already in use');
			}
			console.log('user creation encountered an error', error);
		}
	};

	const handleChange = event => {
		const { name, value } = event;

		setFormFields({ ...formFileds, [name]: value });
	};

	return (
		<div className='sign-up-container'>
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput label='Display Name' required onChange={handleChange} name='displayName' value={displayName} />
				<FormInput label='Email' required onChange={handleChange} name='email' value={email} />
				<FormInput label='Password' required onChange={handleChange} name='password' value={password} />
				<FormInput
					label='Confirm Password'
					required
					onChange={handleChange}
					name='confirmPassword'
					value={confirmPassword}
				/>
				<Button type='submit'>Sign Up</Button>
			</form>
		</div>
	);
};

export default SignUpForm;
