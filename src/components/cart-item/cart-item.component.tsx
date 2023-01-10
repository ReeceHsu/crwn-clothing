import { FC } from 'react';
import { CartItemContainer, ItemDetails } from './cart-item.styles';

import { CartItem as ICartItem } from '../../store/cart/cart.types';

type CartITemsProps = { cartItem: ICartItem };

const CartItem: FC<CartITemsProps> = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<CartItemContainer>
			<img src={imageUrl} alt={`${name}`} />
			<ItemDetails>
				<span className='name'>{name}</span>
				<span>
					{quantity} x {price}
				</span>
			</ItemDetails>
		</CartItemContainer>
	);
};

export default CartItem;
