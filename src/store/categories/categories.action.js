import { CATEGORIES_ACTION_TYPES } from './categories.types';
import { createAction } from '../../utils/reducer/reducer.utils';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPES.fetchCategoryStart);

export const fetthCategoriesSuccess = categoryArray =>
	createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoryArray);

export const fetchCategoriesFailed = error => createAction(CATEGORIES_ACTION_TYPES.fetchCategoriesFailed, error);

export const fetchCategoriesAsync = () => async dispatch => {
	dispatch(fetchCategoriesStart());
	try {
		const categoriesArray = await getCategoriesAndDocuments('categories');
		dispatch(fetthCategoriesSuccess(categoriesArray));
	} catch (error) {
		dispatch(fetchCategoriesAsync());
	}
};
