import { Container, Link, Nav, Title } from "./styles";

const Header = () => {
	return(
		<Container>
			<Title>Digital Agency</Title>

			<Nav>
				<Link>home</Link>
				<Link>about</Link>
				<Link>testimonials</Link>
				<Link>contact</Link>
			</Nav>
		</Container>
	);
};

export default Header;
