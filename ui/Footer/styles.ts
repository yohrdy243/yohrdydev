"use client";
import { styled } from "styled-components";
import { tabletBreakpoint } from "../breakpoints";

export const FooterContainer = styled.footer`
	color: white;
	padding: 2rem 4rem 2rem 4rem;
	display: flex;
	flex-direction: column;
	gap: 10px;

	@media ${tabletBreakpoint} {
		padding: 2rem 4rem 2rem 4rem;
	}
`;

export const FooterBottom = styled.div`
	border-width: 0;
	border-top-width: 1px;
	border-style: solid;
	border-color: white;
	padding: 10px 10px 10px 10px;
	display: flex;
	justify-content: space-between;
`;

export const SocialMediaContainer = styled.div`
	display: flex;
	gap: 10px;
`;
