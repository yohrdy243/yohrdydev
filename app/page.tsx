"use client";
import Image from "next/image";
import styled from "styled-components";
import { GiHand } from "react-icons/gi";
import { tabletBp } from "@/ui/breakpoints";
import { FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";

interface CardSpan {
	colspan: number;
	rowspan: number;
}

const BentoGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(8, 1fr);
	gap: 0.8rem;

	@media ${tabletBp} {
		grid-template-columns: repeat(1, 1fr);
	}
`;
const Card = styled.div<CardSpan>`
	background: #212124;
	border-radius: 0.5rem;
	padding: 1rem;
	border: 1px transparent solid;
	grid-column: ${({ colspan }) => `span ${colspan || 1}`};
	grid-row: ${({ rowspan }) => `span ${rowspan || 1}`};
	transition: border-color 0.3s ease-in-out;

	&:hover {
		border-color: blue;
	}

	@media ${tabletBp} {
		grid-column: span 1;
		grid-row: span 1;
	}

	animation-duration: 1s;
	animation: slidein 1s ease-in-out;
`;

const PhotoImage = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;

	@media ${tabletBp} {
		justify-content: center;
		align-items: center;
	}
`;

const Greeting = styled.span`
	color: #9a9a9a;
	font-weight: 700;
	font-size: medium;
	display: flex;
	gap: 0.3rem;

	:last-child {
		color: #ffcc00;
	}
`;

const PresentationContainer = styled.section`
	display: flex;
	justify-content: space-between;
	gap: 9rem;

	@media ${tabletBp} {
		flex-direction: column;
		justify-content: start;
		gap: 0;
	}
`;

const SocialNetworks = styled.div`
	display: flex;
	flex-direction: row;
	gap: 0.5rem;

	& > * {
		font-size: 1.5rem;
		:hover {
			color: #4078c0;
		}
	}
`;

const ExternalLink = styled.a`
	display: flex;
	align-items: center;
`;
export default function Home() {
	return (
		<BentoGrid>
			<Card colspan={3} rowspan={4}>
				<PresentationContainer>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
						}}
					>
						<div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
							<Greeting>
								Hola
								<GiHand />
							</Greeting>
							<span
								style={{ display: "inline-flex", gap: 5, alignItems: "center" }}
							>
								Soy{" "}
								<h1 style={{ margin: 0, color: "#5856D6" }}>Yohrdy Guevara</h1>
							</span>
							<span style={{ display: "inline-flex", gap: 5 }}>
								<h2
									style={{
										color: "#ffcc00",
										margin: 0,
										fontSize: "1rem",
										fontWeight: "normal",
									}}
								>
									+ 3 años de Experiencia
								</h2>
								como Desarrollador de Software
							</span>
						</div>
						<SocialNetworks>
							<ExternalLink
								target="_blank"
								href="https://linkedin.com/in/yohrdyguevara"
							>
								<FaLinkedinIn />
							</ExternalLink>
							<ExternalLink>
								<FaGithub />
							</ExternalLink>
							<ExternalLink>
								<FaXTwitter />
							</ExternalLink>
						</SocialNetworks>
					</div>
					<PhotoImage>
						<Image src={"/photo.webp"} alt="myphoto" width={200} height={200} />
					</PhotoImage>
				</PresentationContainer>
			</Card>
			<Card colspan={1} rowspan={6}>
				There is my Info
			</Card>
			<Card colspan={1} rowspan={4}>
				There is my Contact
			</Card>
			<Card colspan={2} rowspan={2}>
				There is my Projects
			</Card>
			<Card colspan={1} rowspan={2}>
				There is my Skills
			</Card>
			<Card colspan={1} rowspan={1}>
				There is my Education
			</Card>
			<Card colspan={1} rowspan={2}>
				<div>Create by Ewi Dev</div>
			</Card>
			<Card colspan={1} rowspan={1}>
				There is my Experience
			</Card>
		</BentoGrid>
	);
}
