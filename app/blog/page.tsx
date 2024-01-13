"use client";
import { IoIosConstruct } from "react-icons/io";
import styled from "styled-components";

const Container = styled.div`
	text-align: center;

	:first-child {
		width: 4rem;
		height: 4rem;
		padding: 1rem;
	}
`;
export default function page() {
	return (
		<Container>
			<IoIosConstruct />
			<h2>Proximamente</h2>
		</Container>
	);
}
