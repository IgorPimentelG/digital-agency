/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Companies, Footer, Header } from "@components/Layout";
import { Button } from "@components/UI";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import {
	RootContainer,
	ContainerHead,
	ContainerInfo,
	Label,
	Title,
	Image,
	ContentHead,
	ContainerImage,
	Main,
	ContentMain
} from "./styles";

const HomePage = () => {
	return(
		<RootContainer>
			<ContainerHead>

				<Header/>

				<ContentHead>
					<ContainerInfo>
						<Title>
							Building Digital<br/> Products, Brands<br/> & Experience
						</Title>

						<Label>
						Digital agency is your online team mangement tool<br/>that easy and prompt
						</Label>

						<Button
							label="CONTACT US"
							onClick={() => {}}
						/>
					</ContainerInfo>

					<ContainerImage>
						<Image src={require("../../assets/images/business-people-discussing-business-idea.png")}/>
					</ContainerImage>
				</ContentHead>
			</ContainerHead>

			<Companies/>

			<Main>
				<div>
					<Image src={require("../../assets/images/designer-team-working-on-creative-design.png")}/>
					<ContentMain>
						<ContainerInfo>
							<Title>Branding & Design <br/>System</Title>
							<Label>
							Commonly used in the graphic, print & publishing industris<br/>
							for previewing visual layout and<br/> mockups
							</Label>
							<BsArrowRight size={30}/>
						</ContainerInfo>
					</ContentMain>
				</div>

				<div>
					<ContainerInfo>
						<Title>Custome & Plugin <br/>Development</Title>
						<Label>
							Commonly used in the graphic, print & publishing industris<br/>
							for previewing visual layout and<br/> mockups
						</Label>
						<BsArrowLeft size={30}/>
					</ContainerInfo>
					<Image src={require("../../assets/images/businessman-analyzing-data.png")}/>
				</div>
			</Main>

			<Label>TESTIMONIALS</Label>
			<Title>Read what other<br/> have to say</Title>

			<Footer/>
		</RootContainer>
	);
};

export default HomePage;
