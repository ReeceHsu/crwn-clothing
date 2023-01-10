import { FC } from 'react';
import { CategoryItem } from '../../store/categories/categories.types';
import ProductCard from '../product-card/product-card.component';

import { CategoryPreviewContainer, Title, Preivew } from './category-preview.styles';

type CategoryPreviewProps = {
	title: string;
	products: CategoryItem[];
};

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
	return (
		<CategoryPreviewContainer>
			<h2>
				<Title to={title}>{title.toUpperCase()}</Title>
			</h2>
			<Preivew>
				{products
					.filter((_, idx) => idx < 4)
					.map(product => (
						<ProductCard key={product.id} product={product} />
					))}
			</Preivew>
		</CategoryPreviewContainer>
	);
};

export default CategoryPreview;
