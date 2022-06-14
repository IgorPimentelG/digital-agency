/* eslint-disable @typescript-eslint/no-empty-function */
import { Button } from "@components/UI";
import { Card, Content, Image, Label, Title } from "./styles";

const CardBanner = () => {
	return(
		<Card>
			<Image src={require("../../../assets/images/customer-support.png")}/>
			<Content>
				<Title>Be a part of the <br/>next big thing</Title>
				<Label>
					We work with Brans, Startups, to SMEs.<br/>
					Colaborate for more impact and growt
				</Label>
				<Button
					label="CONTACT US"
					onClick={() => {}}
				/>
			</Content>
		</Card>
	);
};

export default CardBanner;
