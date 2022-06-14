import styled from "styled-components";

export const RootContainer = styled.div`
	flex-direction: column;
	margin: 80px 0;
	align-items: center;
`;

export const Container = styled.div`
	padding: 20px;
	border-radius: 10px;
	justify-content: space-between;
	background-color: ${({theme}) => theme.colors.background.tertiary};
`;

export const Label = styled.h3`
	color: ${({theme}) => theme.colors.text.primary};
	font-size: 1.7rem;
	margin: 0 30px 0 10px;
`;

export const IconZoom = styled.div`
	padding: 10px;
	align-items: center;
	justify-content: center;
	border-radius: 15px;
	background-color: ${({theme}) => theme.colors.text.primary};
`;

export const Item = styled.div`
	align-items: center;
	justify-content: center;
`;

export const Info = styled.p`
	color: ${({theme}) => theme.colors.text.secondary};
	margin-bottom: 10px;
`;
