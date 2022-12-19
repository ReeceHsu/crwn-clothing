import Button from '../button/button.component';

import './card-dropdown.styles.scss';

const CardDropdown = () => {
	return (
		<div className='cart-dropdown-container'>
			<div className='cart-itmes' />
			<Button>GO TO CHECKOUT</Button>
		</div>
	);
};

export default CardDropdown;
