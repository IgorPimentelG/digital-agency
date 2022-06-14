import styled from "styled-components";

export const Card = styled.div`
	padding: 10px 30px;
	margin: 80px 0;
	justify-content: space-around;
	border-radius: 10px;
	background-color: ${({theme}) => theme.colors.background.tertiary};
`;

export const Image = styled.img`
	object-fit: contain;
	width: 40%;
`;

export const Content = styled.div`
	flex-direction: column;
	justify-content: center;
`;

export const Title = styled.h1`
	font-size: 2rem;
	margin-bottom: 15px;
`;

export const Label = styled.p`
	font-size: 0.8rem;
	margin-bottom: 20px
`;
