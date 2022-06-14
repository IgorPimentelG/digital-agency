import styled from "styled-components";

export const RootContainer = styled.div`
	flex: 1;
	height: 100vh;
	flex-direction: column;
	align-items: center;
`;

export const ContainerHead = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	background: linear-gradient(140deg, rgba(142,173,213,0.4) 0%, rgba(0,212,255,0) 35%);
`;

export const ContentHead = styled.div`
	margin: 0 150px;
`;

export const ContentMain = styled.div`
	width: 100%;
	align-items: center;
	justify-content: flex-end;
`;

export const ContainerInfo = styled.div`
	flex-direction: column;
	justify-content: center;
`;

export const ContainerImage = styled.div`
	flex: 1;
	justify-content: flex-end;
	align-items: center;
`;

export const Title = styled.h1`
	font-size: 3rem;
	margin: 10px 0;
	line-height: 50px;
`;

export const Label = styled.p`
	margin: 10px 0 30px 0;
	font-weight: 400px;
	text-transform: capitalize;
`;

export const Image = styled.img`
	object-fit: contain;
	height: 90%;
`;

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

