"use client";

import {
	Content,
	Image,
	ProyectCardProps,
	TecnologiesContainer,
} from "@/components/ProyectCard";
import { fullProyectCardsData } from "@/data/proyectsData.";
import { tabletBp } from "@/ui/breakpoints";

import styled from "styled-components";
import { Item as TechnologyItem } from "@/components/Technologies";

const Container = styled.div`
	margin-top: 2rem;
	display: grid;
	grid-template-columns: repeat(2, 1fr);

	gap: 1rem;

	@media ${tabletBp} {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const CardContainer = styled.div`
	border: 1px solid transparent;
	border-radius: 0.5rem;
	background-color: #363636;
	width: 100%;

	&:hover {
		border-color: blue;
	}
`;

function ProyectCard({
	title,
	technologies,
	imagePath,
	description,
	fullDescription,
}: ProyectCardProps) {
	return (
		<CardContainer>
			<Image style={{ width: "100%" }} src={imagePath} alt={title} />

			<Content>
				<h5>{title}</h5>
				{typeof fullDescription != "string" ? (
					fullDescription?.map((topic, index) => (
						<p key={`${title}_topic_${index}`}>{topic}</p>
					))
				) : (
					<p>{fullDescription}</p>
				)}
				<p>Tecnologias Usadas</p>
				<TecnologiesContainer>
					{technologies.map((item, index) => (
						<TechnologyItem
							size="2rem"
							icon={item.icon}
							color={item.color}
							name={item.name}
							key={`${title}_TECHNOLOGY_${index}`}
						/>
					))}
				</TecnologiesContainer>
			</Content>
		</CardContainer>
	);
}

export default function Proyectos() {
	return (
		<>
			<h2>Mis Proyectos</h2>
			<Container>
				{fullProyectCardsData.map((data, key) => (
					<ProyectCard {...data} key={key} />
				))}
			</Container>
		</>
	);
}
