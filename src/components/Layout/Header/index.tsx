import { Container, Link, Nav, Title } from "./styles";

const Header = () => {
	return(
		<Container>
			<Title>Digital Agency</Title>

			<Nav>
				<Link href="#container-head">home</Link>
				<Link href="#container-main">about</Link>
				<Link href="#container-testimonials">testimonials</Link>
				<Link href="#banner-contact">contact</Link>
			</Nav>
		</Container>
	);
};

export default Header;
