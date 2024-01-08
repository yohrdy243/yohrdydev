import "./globals.css";
import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import Frame from "@/ui/Frame";
import { SFProDisplay } from "@/ui/fonts";
import { BackgroundImage } from "@/ui/styles";

export const metadata: Metadata = {
	title: "Yohrdy Guevara",
	description: "Yohrdy Guevara Developer Portfolio",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es">
			<StyledComponentsRegistry>
				<body className={SFProDisplay.className}>
					<Frame>{children}</Frame>
				</body>
			</StyledComponentsRegistry>
		</html>
	);
}
