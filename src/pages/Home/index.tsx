/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-empty-function */
import { CardBanner, CardTestimonial, Companies, Footer, Header } from "@components/Layout";
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
	ContentMain,
	ContainerTestimonials,
	TitleTestimonials,
	LabelTestimonials
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


			<ContainerTestimonials>

				<LabelTestimonials>
					testimonials
				</LabelTestimonials>
				<TitleTestimonials>
					Read What Other<br/>Have To Say
				</TitleTestimonials>

				<div>
					<CardTestimonial
						name="andrew rathore"
						image="western-man-4975942-4159828 1.png"
					/>

					<CardTestimonial
						name="vera duncan"
						image="asian-woman-4975939-4159825 1.png"
					/>

					<CardTestimonial
						name="mark smith"
						image="black-woman-4975941-4159827 1.png"
					/>
				</div>
			</ContainerTestimonials>

			<CardBanner/>

			<Footer/>
		</RootContainer>
	);
};

export default HomePage;
