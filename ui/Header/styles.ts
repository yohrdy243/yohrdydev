"use client";
import styled from "styled-components";
import { tabletBp} from "../breakpoints";

export const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 3rem 1rem 3rem;
	height: 2rem;

	color: white;

	@media ${tabletBp} {
		padding: 1rem 4rem 1rem 4rem;
	}
`;

export const NavListContainer = styled.ul`
	display: flex;
	list-style: none;
	gap: 2px;
	margin: 0;
	padding-right: 2rem;
	justify-content: center;
`;



export const LogoContainer = styled.h1`
	font-size: 1.5rem;
	font-weight: 700;
	letter-spacing: 0.1rem;
	cursor: pointer;
	transition: all;
	animation-duration: 0.2s;

	&:hover {
		color: cyan;
	}

	&:active {
		color: blue;
	}
`;
