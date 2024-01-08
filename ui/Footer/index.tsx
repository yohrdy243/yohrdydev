import { LogoContainer } from "../Header/styles";
import { GeistMono } from "../fonts";
import { FooterBottom, FooterContainer, SocialMediaContainer } from "./styles";
import { BsTwitter, BsInstagram } from "react-icons/bs";

export default function Footer() {
	return (
		<FooterContainer>
			<LogoContainer className={GeistMono}>{`</YohrdyGuevara.dev>`}</LogoContainer>
			<FooterBottom>
				<div>Create by Ewi Dev</div>
				<SocialMediaContainer>
					<BsTwitter />
					<BsInstagram />
				</SocialMediaContainer>
			</FooterBottom>
		</FooterContainer>
	);
}
