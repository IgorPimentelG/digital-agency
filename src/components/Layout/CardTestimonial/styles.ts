import styled from "styled-components";

export const Card = styled.div`
	padding: 30px;
	margin: 10px;
	flex-direction: column;
	align-items: center;
	border-radius: 10px;
	background-color: ${({theme}) => theme.colors.background.tertiary};
`;

export const Image = styled.img`
	object-fit: contain;
	width: 100px;
	border: 1px solid #D3D3D3;
	border-radius: 100px;
`;

export const LabelName = styled.p`
	text-transform: capitalize;
	font-weight: bold;
	margin: 5px 0 30px 0;
`;

export const LabelDescription = styled.p`
	text-align: center;
	font-size: 0.9rem;
`;
