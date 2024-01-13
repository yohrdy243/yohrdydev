import { tecnologiesData } from "@/data/technologiesData";
import { ReactNode } from "react";
import styled from "styled-components";

export interface ITechnologiesItem {
	icon: ReactNode;
	color: string;
	name?: string;
	size?: string;
}

const TechnologiesList = styled.div`
	font-size: 0.9rem;
	padding: 1rem;
	gap: 8px;
	display: grid;
	gap: 1rem;
	grid-template-columns: repeat(5, 1fr);
`;

const TechnologyItem = styled.div<{ color: string; size?: string }>`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 0.7rem;
	padding-top: 1rem;
	&:hover {
		transition: ease-in-out;
		transition-duration: 200ms;
		color: ${({ color }) => color};
	}

	:first-child {
		font-size: ${({ size }) => (size ? size : `2rem`)};
	}
`;

export function Item({ icon, name, color, size }: ITechnologiesItem) {
	return (
		<TechnologyItem color={color} size={size}>
			<div>{icon}</div>
			{name && <span>{name}</span>}
		</TechnologyItem>
	);
}

export default function Technologies() {
	return (
		<>
			<h3>Las Tecnologias y Lenguajes que más uso</h3>
			<TechnologiesList>
				{tecnologiesData.map((item, index) => (
					<Item key={`TECHNOLOGY_${index}`} {...item} />
				))}
			</TechnologiesList>
		</>
	);
}
