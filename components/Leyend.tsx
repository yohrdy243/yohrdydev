import { FaHeart } from "react-icons/fa";
import styled from "styled-components";

export default function Leyend() {
	const year = new Date().getFullYear();
	const CustonSpan = styled.span`
		svg {
			color: #5856d6;
		}
	`;

	return (
		<CustonSpan>
			Hecho con <FaHeart /> por Yohrdy Guevara | {year}
		</CustonSpan>
	);
}
