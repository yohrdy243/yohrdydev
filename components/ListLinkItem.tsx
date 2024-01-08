"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

export const NavItem = styled.li<{ isActive?: boolean }>`
	
	color: ${({ isActive }) => (isActive ? `#2e6ec1` : `#9a9a9a`)};
	background-color: ${({ isActive }) => isActive && `#433f3f`};

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	padding: 10px;
	gap: 4px;
	min-width: 50px;
	font-weight: 600px;
	line-height : 14px;

	&:hover {
		transition: all;
		animation-duration: 0.2s;
		background-color: #433f3f;
	}

	&:active {
		color: #2e6ec1;
		transition: all;
		animation-duration: 0.2s;
	}

	:first-child {
		font-size: 25px;
	}

	
`;
export function ListLinkItem({
	children,
	href,
}: {
	children: React.ReactNode;
	href: string;
}) {
	const currentPath = usePathname();
	const isActive = currentPath === href ? true : false;
	return (
		<Link href={href}>
			<NavItem isActive={isActive}>{children}</NavItem>
		</Link>
	);
}
