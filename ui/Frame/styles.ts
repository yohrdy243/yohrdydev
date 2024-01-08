"use client";
import styled from "styled-components";
import { desktopBp, desktopMiniBp, laptopBp, mobileBp, tabletBp } from "../breakpoints";

export const MainContainer = styled.main`
	display: flex;
	flex-direction: column;
	border: 1.5px solid black;
	border-radius: 10px;
	color: white;
	margin-left: auto;
	margin-right: auto;
	box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
	margin-top: 0;

	@media ${mobileBp} {
		border-radius: 0;
		max-width: 100%;
	}

	@media ${laptopBp} {
		max-width: 70rem;
		margin-top: 0.3rem;
	}
	
	@media ${desktopMiniBp} {
		max-width: 80rem;
		margin-top: 1rem;
		
	}
	
	@media ${desktopBp} {
		max-width: 100rem;
		margin-top: 2rem;
	}

	
`;

export const HeaderWindow = styled.div`
	background-color: #363636;
	border-bottom: 1.5px solid black;
	border-bottom-color: black;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	padding: 8px 8px 0.6rem 8px;
	display: flex;
	flex-direction: column;
`;

export const ContentWindow = styled.div`
	background-color: #161618;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	
	@media ${mobileBp}{
		padding: 1rem;
	}


	@media ${tabletBp} {
		padding	: 1rem;
	}
	@media ${laptopBp} {
		padding: 2rem 2rem;

	}

	@media ${desktopMiniBp} {
		padding: 3rem 6rem;
	}

	@media ${desktopBp} {
		padding: 4rem 10rem;
	}
`;

export const NavigationButtons = styled.div`
	display: flex;
	gap: 0.5rem;
`;

export const NavigationButton = styled.span<{
	backgroundColor?: string;
	color?: string;
}>`
	display: flex;
	justify-content: center;
	align-items: baseline;
	width: 1rem;
	height: 1rem;
	border-radius: 50px;
	background-color: ${(props) => props.backgroundColor || "white"};
	color: ${(props) => props.color || "white"};

	&:hover {
		filter: contrast(0.5);
	}

	> svg {
		display: none;
	}

	&:hover > svg {
		transition: all ease-in-out;
		transition-duration: 0.1s;
		display: block;
	}
`;
