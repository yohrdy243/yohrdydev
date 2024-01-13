/* eslint-disable react/jsx-key */
import { CiLocationArrow1 } from "react-icons/ci";
import ProyectCard, { CardContainer } from "./ProyectCard";
import styled from "styled-components";
import Link from "next/link";
import { proyectCardsData } from "@/data/proyectsData.";

const Container = styled.div`
	margin-top: 2rem;
	display: flex;
	flex: 1;
	gap: 1rem;
`;

const SeeMoreCard = styled(CardContainer)`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	svg {
		width: 2rem;
		height: 2rem;
	}
`;



export default function Proyects() {
	return (
		<>
			<h3>Mis Proyectos</h3>
			<Link href={"/proyectos"}>
				<Container>
					{proyectCardsData.map((data, key) => (
						<ProyectCard {...data} key={key} />
					))}
					<SeeMoreCard>
						<CiLocationArrow1 />
						<p>Ver Más</p>
					</SeeMoreCard>
				</Container>
			</Link>
		</>
	);
}
