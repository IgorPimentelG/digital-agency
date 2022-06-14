import { Container, Label } from "./styles";

const Button: React.FC<{
	label: string;
	onClick: () => void;
}> = ({ label, onClick }) => {
	return(
		<Container onClick={onClick}>
			<Label>{label}</Label>
		</Container>
	);
};

export default Button;
