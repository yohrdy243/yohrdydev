import styled from "styled-components";

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	flex-direction: column;
	width: 100%;
	height: 100%;
`;

export default function Freelance() {
	return (
		<Container>
			<h2>Hablemos de tu Proyecto!</h2>
			<p>
				<span>Hagamos que tu negocio sea más increible, escribeme un correo a yohrdy243@gmail.com</span>
			</p>
		</Container>
	);
}
