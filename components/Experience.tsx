import React from "react";
import styled from "styled-components";

interface ListItemProps {
	date: string;
	title: string;
	description: string;
	enterprise: string;
}
const List = styled.ol`
	margin-top: 1rem;
	list-style: none;
`;

const Item = styled.li`
	margin-top: 2rem;
	margin-bottom: 2rem;
`;


const Time = styled.time`
	font-size: 0.9rem;
	font-weight: normal;
	line-height: 1.125rem;
`;

const Heading = styled.h3`
	font-size: 1rem;
	font-weight: 600;
`;

const Paragraph = styled.p`
	margin-bottom: 1rem;
	font-size: 0.9rem;
	font-weight: normal;
`;

const ListItem = ({ date, title, description, enterprise }: ListItemProps) => (
	<Item>
		<Time>{date}</Time>
		<Heading>{title}</Heading>
		<Time>{enterprise}</Time>
		<Paragraph>{description}</Paragraph>
	</Item>
);

const experienceData: ListItemProps[] = [
	{
		date: "Febrero 2022 - Enero 2024",
		title: "Desarrollador Fullstack",
		description:
			"Cree una aplicación de control de servicios con React, Firebase, Tailwind CSS y Bootstrap Icons. Optimicé procesos de liquidación a través del sistema, mejorando la eficiencia y generando un aumento significativo en los procesos de la empresa.",
		enterprise: "Transportes Bagservis",
	},
	{
		date: "Octubre 2023 - Noviembre 2023",
		title: "Desarrollador Freelance",
		description:
			"Desarrollé el frontend para un Sistema de Control de Pacientes con Diagnóstico por IA, utilizando eficientemente las últimas características de Next.js.",
		enterprise: "Aliviate",
	},
	{
		date: "Septiembre 2023 - Octubre 2023",
		title: "Desarrollador Freelance",
		description:
			"Desarrollé una landing page para una empresa de courier con Next.js y SSG. Incluí descripciones de servicios y contacto automático, mejorando la velocidad de carga y proporcionando una experiencia eficiente para los usuarios.",
		enterprise: "Limcourier",
	},
];
export default function Experience() {
	return (
		<>
			<h3>Experiencia Laboral</h3>
			<List>
				{experienceData.map((data, index) => (
					<ListItem {...data} key={`EXPERIENCE_${index}`} />
				))}
			</List>
		</>
	);
}
