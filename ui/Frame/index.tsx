import {
	ContentWindow,
	HeaderWindow,
	MainContainer,
} from "./styles";
import NavButtons from "./NavButtons";
import NavBar from "./NavBar";

export default function Frame({ children }: { children: React.ReactNode }) {
	return (
		<MainContainer>
			<HeaderWindow>
				<NavButtons />
				<NavBar />
			</HeaderWindow>
			<ContentWindow>{children}</ContentWindow>
		</MainContainer>
	);
}
