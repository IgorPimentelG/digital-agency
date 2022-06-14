import { BsSpotify, BsSlack } from "react-icons/bs";
import { FaDropbox, FaVideo } from "react-icons/fa";
import { Container, IconZoom, Info, Item, Label, RootContainer } from "./styles";

const Companies = () => {
	return(
		<RootContainer>

			<Info>Trusted Bt 4,000+ K</Info>

			<Container>
				<Item>
					<BsSpotify size={25}/>
					<Label>Spotify</Label>
				</Item>

				<Item>
					<BsSlack size={25}/>
					<Label>slack</Label>
				</Item>

				<Item>
					<FaDropbox size={30}/>
					<Label>Dropbox</Label>
				</Item>

				<Item>
					<IconZoom>
						<FaVideo fill="white"/>
					</IconZoom>
					<Label>zoom</Label>
				</Item>
			</Container>
		</RootContainer>
	);
};

export default Companies;
