import { Container, ContainerOptions, Copyright, Nav, Option, Title } from "./styles";

const Footer = () => {
	return(
		<Container>
			<Nav>
				<ContainerOptions>
					<Title>Digital Agency</Title>
					<Option>
							Building Digital Products,<br/>
							Brands & Experience
					</Option>
				</ContainerOptions>

				<ContainerOptions>
					<Title>Resources</Title>
					<Option>Guides</Option>
					<Option>Blog</Option>
					<Option>Cuistomer Stories</Option>
					<Option>Glossery</Option>
				</ContainerOptions>

				<ContainerOptions>
					<Title>Company</Title>
					<Option>About Us</Option>
					<Option>Careers</Option>
					<Option>Partners</Option>
					<Option>Contact Us</Option>
				</ContainerOptions>

				<ContainerOptions>
					<Title>Social Media</Title>
					<Option>LinkedIn</Option>
					<Option>Facebook</Option>
					<Option>Instagram</Option>
					<Option>Twitter</Option>
				</ContainerOptions>
			</Nav>

			<Copyright>© Digital Agency. Todos os direitos reservados</Copyright>
		</Container>
	);
};

export default Footer;
