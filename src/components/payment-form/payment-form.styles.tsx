import styled from 'styled-components';
import Button from '../button/button.component';

export const PaymentContainer = styled.div`
	height: 300px;
	display: flex;
	flex-direction: column;
	align-itms: center;
	justify-content: center;
`;

export const FormConainer = styled.form`
	height: 100px;
	min-width: 500px;
`;

export const PaymentButton = styled(Button)`
	margin-left: auto;
	margin-top: 30px;
`;
