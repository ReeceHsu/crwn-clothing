import { BackgroundImage, DirectoryItemContainer, Body } from './directory-item.styles';

const DirectoryItem = ({ category }) => {
	const { imageUrl, title } = category;
	return (
		<DirectoryItemContainer>
			<BackgroundImage imageUrl={imageUrl} />
			<Body to={`shop/${title}`}>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</Body>
		</DirectoryItemContainer>
	);
};

export default DirectoryItem;