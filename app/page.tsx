"use client";
import styled from "styled-components";
import { tabletBp } from "@/ui/breakpoints";
import Technologies from "@/components/Technologies";
import Presentation from "@/components/Presentation";
import Proyects from "@/components/Proyects";
import Experience from "@/components/Experience";
import AboutMe from "@/components/AboutMe";
import Leyend from "@/components/Leyend";
import Freelance from "@/components/Freelance";

interface CardSpan {
	colspan: number;
	rowspan: number;
}

const BentoGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);

	gap: 0.8rem;

	@media ${tabletBp} {
		grid-template-columns: repeat(1, 1fr);
	}
`;

const Card = styled.div<CardSpan>`
	background: #212124;
	border-radius: 0.5rem;
	padding: 1.5rem;
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

export default function Home() {
	return (
		<BentoGrid>
			<Card colspan={3} rowspan={1}>
				<Presentation />
			</Card>
			<Card colspan={1} rowspan={1}>
				<AboutMe />
			</Card>
			<Card colspan={1} rowspan={4}>
				<Experience />
			</Card>
			<Card colspan={3} rowspan={2}>
				<Proyects />
			</Card>
			<Card colspan={2} rowspan={2}>
				<Technologies />
			</Card>
			<Card colspan={1} rowspan={2}>
				<Freelance />
			</Card>
			<Card colspan={4} rowspan={1}>
				<Leyend />
			</Card>
		</BentoGrid>
	);
}
