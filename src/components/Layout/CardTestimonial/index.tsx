import { Card, Image, LabelDescription, LabelName } from "./styles";

const CardTestimonial: React.FC<{
	image: string;
	name: string;
}> = ({ image, name }) => {
	return(
		<Card>
			<Image src={require(`../../../assets/images/${image}`)}/>

			<LabelName>{name}</LabelName>

			<LabelDescription>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi,
			in malesuada felis malesuada vel.
			</LabelDescription>
		</Card>
	);
};

export default CardTestimonial;
