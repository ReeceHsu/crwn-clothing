import { useContext } from 'react';

import { Footer, ProductCardContainer } from './product-card.styles';

import Button from '../button/button.component';
import { CartContext } from '../../context/cart.context';

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	const { addItemToCart } = useContext(CartContext);

	const addProductToCart = () => addItemToCart(product);

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
