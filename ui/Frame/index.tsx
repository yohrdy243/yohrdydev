import { AiOutlineMinus } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { TiArrowMaximise } from "react-icons/ti";
import { CiMonitor } from "react-icons/ci";
import { CiReceipt } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import {
	ContentWindow,
	HeaderWindow,
	MainContainer,
	NavigationButton,
	NavigationButtons,
} from "./styles";
import { NavListContainer } from "../Header/styles";
import { ListLinkItem } from "@/components/ListLinkItem";


export default function Frame({ children }: { children: React.ReactNode }) {
	return (
		<MainContainer>
			<HeaderWindow>
				<NavigationButtons>
					<NavigationButton backgroundColor="#ff5753" color="#940102">
						<MdClose />
					</NavigationButton>
					<NavigationButton backgroundColor="#ffbd2f" color="#ac5600">
						<AiOutlineMinus />
					</NavigationButton>
					<NavigationButton backgroundColor="#00c83a" color="#005500">
						<TiArrowMaximise />
					</NavigationButton>
				</NavigationButtons>
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
					<ListLinkItem href="/contacto">
						<CiUser />
						<span>Contacto</span>
					</ListLinkItem>
				</NavListContainer>
			</HeaderWindow>
			<ContentWindow>{children}</ContentWindow>
		</MainContainer>
	);
}
