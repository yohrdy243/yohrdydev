import styled from "styled-components";
import { tabletBp } from "@/ui/breakpoints";
import { IoIosMail } from "react-icons/io";
import {
	FaLinkedinIn,
	FaGithub,
	FaXTwitter,
	FaHandshakeSimple,
} from "react-icons/fa6";
import { Image } from "./ProyectCard";

const PhotoImage = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;

	@media ${tabletBp} {
		justify-content: center;
		align-items: center;
	}
`;

const Greeting = styled.div`
	display: flex;
	align-items: center;
	justify-content: start;
	font-size: 1.8rem;

	:last-child {
		color: #ffcc00;
		width: 2rem;
		height: 1rem;
	}
`;

const Container = styled.section`
	display: flex;
	justify-content: space-between;
	gap: 1rem;
	width: 100%;
	height: 100%;

	@media ${tabletBp} {
		flex-direction: column;
		gap: 0;
	}
`;

const PresentationContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const NameRol = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.3rem;

	> span:first-child {
		display: inline-flex;
		gap: 5px;
		align-items: center;
		font-size: 2rem;

		h1 {
			color: #5856d6;
			font-size: 2.5rem;
		}
	}

	> span:last-child {
		display: inline-block;
		gap: 5px;
		font-size: 1.3rem;
		align-items: center;

		h2 {
			color: #ffcc00;
			font-weight: normal;
			font-size: 1em;
		}

		span {
			font-size: 1em;
		}
	}
`;

const MainText = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const Badge = styled.span`
	background-color: #233876;
	font-size: 0.9rem;
	font-weight: 400;
	margin-right: 0.5rem;
	padding: 0.4rem 0.8em;
	border-radius: 0.3rem;
	width: fit-content;

	transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

	&:hover {
		background-color: #5ac8f5;
		color: rgba(0, 0, 0, 0.85);
	}
`;

const SocialNetworks = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1rem;
	margin-top: 2rem;

	& > * {
		font-size: 2rem;
		:hover {
			color: #4078c0;
		}
	}
`;

const ExternalLink = styled.a`
	display: flex;
	align-items: center;
`;

export default function Presentation() {
	return (
		<Container>
			<PresentationContainer>
				<MainText>
					<Greeting>
						<span>Hola</span>
						<FaHandshakeSimple />
					</Greeting>
					<NameRol>
						<span>
							Soy <h1>Yohrdy Guevara</h1>
						</span>
						<span>
							<h2>+ 2 años de Experiencia</h2>
							como Desarrollador de Software
						</span>
					</NameRol>
					<Badge>Disponible para Trabajar</Badge>
				</MainText>
				<SocialNetworks>
					<ExternalLink
						target="_blank"
						href="https://linkedin.com/in/yohrdyguevara"
					>
						<FaLinkedinIn />
					</ExternalLink>
					<ExternalLink target="_blank" href="https://github.com/yohrdy243">
						<FaGithub />
					</ExternalLink>
					<ExternalLink
						target="_blank"
						href="https://twitter.com/yohrdyguevara"
					>
						<FaXTwitter />
					</ExternalLink>
					<ExternalLink href="mailto:yohrdy243@gmail.com">
						<IoIosMail />
					</ExternalLink>
				</SocialNetworks>
			</PresentationContainer>
			<PhotoImage>
				<Image src={"/images/photo.webp"} alt="myphoto" width={300} height={300} />
			</PhotoImage>
		</Container>
	);
}
