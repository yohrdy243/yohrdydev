import { ListLinkItem } from "@/components/ListLinkItem";
import { CiHome, CiMonitor, CiReceipt, CiUser } from "react-icons/ci";
import { NavListContainer } from "./styles";


export default function NavBar() {
	return (
		<NavListContainer>
			<ListLinkItem href="/">
				<CiHome />
				<span>Home</span>
			</ListLinkItem>
			<ListLinkItem href="/proyectos">
				<CiMonitor />
				<span>Proyectos</span>
			</ListLinkItem>
			<ListLinkItem href="/blog">
				<CiReceipt />
				<span>Blog</span>
			</ListLinkItem>
		</NavListContainer>
	);
}
