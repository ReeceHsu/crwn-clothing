import SginUpForm from '../../components/sign-up-form/sign-up-form.component';
import SginInForm from '../../components/sign-in-form/sign-in-form.component';
import './authentication.styles.scss';

const Authentication = () => {
	return (
		<div className='authentication-container'>
			<SginInForm />
			<SginUpForm />
		</div>
	);
};

export default Authentication;
