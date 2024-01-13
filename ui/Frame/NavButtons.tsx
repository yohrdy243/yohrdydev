import { NavigationButton, NavigationButtons } from "./styles";
import { AiOutlineMinus } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { TiArrowMaximise } from "react-icons/ti";

export default function NavButtons() {
	return (
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
	);
}
