import React from "react";
import {
	HeaderContainer,
	LogoContainer,
	NavItem,
	NavListContainer,
} from "./styles";

import Link from "next/link";

function ListLinkItem({
	children,
	href,
}: {
	children: React.ReactNode;
	href: string;
}) {
	return (
		<NavItem>
			<Link href={href}>{children}</Link>
		</NavItem>
	);
}

export default function Header() {
	return (
		<HeaderContainer>
			<LogoContainer>{`<YohrdyGuevara.dev> `}</LogoContainer>
			<nav>
				<NavListContainer>
					<ListLinkItem href="/">Home</ListLinkItem>
					<ListLinkItem href="/proyectos">Proyectos</ListLinkItem>
					<ListLinkItem href="/blog">Blog</ListLinkItem>
					<ListLinkItem href="/contacto">Contacto</ListLinkItem>
				</NavListContainer>
			</nav>
		</HeaderContainer>
	);
}
