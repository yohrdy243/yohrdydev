"use client";
import styled from "styled-components";
import { ITechnologiesItem } from "./Technologies";
import { Item as TechnologyItem } from "./Technologies";

export interface ProyectCardProps {
	title: string;
	technologies: ITechnologiesItem[];
	imagePath: string;
	description: string;
	fullDescription?: string | string[];
}

export const CardContainer = styled.div`
	border: 1px solid transparent;
	border-radius: 0.5rem;
	background-color: #363636;

	&:hover {
		border-color: blue;
	}
`;

export const Image = styled.img`
	border-top-left-radius: 0.375rem;
`;

export const Content = styled.div`
	padding: 1.25rem;

	a {
		text-decoration: none;
	}

	h5 {
		margin-bottom: 0.5rem;
		font-size: 1.25rem;
		font-weight: bold;
		line-height: 1.2;
	}

	p {
		margin-bottom: 0.75rem;
		font-size: 1rem;
	}
`;

export const TecnologiesContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 0.5rem;
	& > * {
		size: 1rem;
	}
`;

export default function ProyectCard({
	title,
	technologies,
	imagePath,
	description,
}: ProyectCardProps) {
	return (
		<CardContainer>
			<Image style={{ width: "100%" }} src={imagePath} alt={title} />

			<Content>
				<h5>{title}</h5>
				<p>{description}</p>
				<TecnologiesContainer>
					{technologies.map((item, index) => (
						<TechnologyItem
							size="1.2rem"
							icon={item.icon}
							color={item.color}
							key={`${title}_TECHNOLOGY_${index}`}
						/>
					))}
				</TecnologiesContainer>
			</Content>
		</CardContainer>
	);
}
