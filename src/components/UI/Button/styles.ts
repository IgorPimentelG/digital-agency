import styled from "styled-components";

export const Container = styled.button`
	padding: 10px 20px;
	border-radius: 5px;
	width: fit-content;
	background-color: ${({theme}) => theme.colors.background.secondary};
`;

export const Label = styled.span`
	color: #fff;
	text-transform: uppercase;
`;
