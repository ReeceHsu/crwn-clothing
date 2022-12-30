import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';

import { selectrCategoriesMap, selectCategoriesLoading } from '../../store/categories/categories.selector';
import './category.styles.scss';

const Category = () => {
	const { category } = useParams();
	const categoriesMap = useSelector(selectrCategoriesMap);
	const isLoading = useSelector(selectCategoriesLoading);
	const [products, setProducts] = useState(categoriesMap[category]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<Fragment>
			<div>{category.toUpperCase()}</div>
			{isLoading ? (
				<Spinner />
			) : (
				<div className='category-container'>
					{products && products.map(product => <ProductCard key={product.id} product={product} />)}
				</div>
			)}
		</Fragment>
	);
};

export default Category;
