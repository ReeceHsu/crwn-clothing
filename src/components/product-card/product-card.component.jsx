import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

import { Footer, ProductCardContainer } from './product-card.styles';

import Button from '../button/button.component';

const ProductCard = ({ product }) => {
	const dispatch = useDispatch();
	const { name, price, imageUrl } = product;
	const cartItems = useSelector(selectCartItems);

	const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

	return (
		<ProductCardContainer>
			<img src={imageUrl} alt={`${name}`} />
			<Footer>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</Footer>
			<Button type='button' buttontype='inverted' onClick={addProductToCart}>
				Add to card
			</Button>
		</ProductCardContainer>
	);
};

export default ProductCard;
