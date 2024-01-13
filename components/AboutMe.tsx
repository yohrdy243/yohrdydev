import React from "react";
import styled from "styled-components";

const Paragraph = styled.p`
	font-size: 0.9rem;
`;
export default function AboutMe() {
	return (
		<>
			<h3>Sobre Mi</h3>
			<Paragraph>
				Hola, Soy Yohrdy Guevara tengo 23 años y soy desarrollador de Software
				enfocado en el Desarrollo Web
			</Paragraph>
			<Paragraph>
				Llevo programando desde los 17 años y ademas de la programacion me gusta
				realizar mantenimietno a equipos informativos.
			</Paragraph>
			<Paragraph>
				Además de la programacion me gusta mucho la musica, se tocar algunos
				instrumentos y siempre he querido crear mi propia musica
			</Paragraph>
			<Paragraph>
				Tambien me gusta jugar videojuegos pero es un pasatiempo que he ido
				perdicendo en el tiempo.
			</Paragraph>
			<h4>Bienvenido a mi Porfolio!</h4>
		</>
	);
}
