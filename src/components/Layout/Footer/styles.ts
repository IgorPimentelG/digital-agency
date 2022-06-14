import styled from "styled-components";

export const Container = styled.footer`
	padding-top: 50px;
	position: relative;
	bottom: 0;
	width: 100%;
	background-color: ${({theme}) => theme.colors.background.tertiary};
`;

export const ContainerOptions = styled.div`
	flex-direction: column;
`;

export const Nav = styled.nav`
	display: flex;
	justify-content: space-around;
`;

export const Title = styled.h4`
	color: ${({theme}) => theme.colors.text.primary};
	margin-bottom: 40px;
`;

export const Option = styled.a`
	color: ${({theme}) => theme.colors.text.primary};
	margin-bottom: 15px;
	font-size: 0.9rem;
`;

export const Copyright = styled.p`
	text-align: center;
	font-size: 0.8rem;
	margin: 60px 0 30px 0;
`;
