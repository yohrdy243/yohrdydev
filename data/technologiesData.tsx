import { ITechnologiesItem } from "@/components/Technologies";
import { TiCss3 } from "react-icons/ti";
import {
	SiReact,
	SiJavascript,
	SiTypescript,
	SiNextdotjs,
	SiTailwindcss,
	SiStyledcomponents,
	SiExpress,
	SiMongodb,
} from "react-icons/si";

export const react: ITechnologiesItem = {
	icon: <SiReact style={{ fontSize: "1.2em" }} />,
	name: "React",
	color: "#43c3ec",
};

export const nextJs: ITechnologiesItem = {
	icon: <SiNextdotjs />,
	name: "NextJS",
	color: "#ffffff",
};

export const javascript: ITechnologiesItem = {
	icon: <SiJavascript />,
	name: "Javascript",
	color: "#f7f605",
};

export const typescript: ITechnologiesItem = {
	icon: <SiTypescript />,
	name: "Typescript",
	color: "#2f74c0",
};

export const css: ITechnologiesItem = {
	icon: <TiCss3 />,
	name: "CSS",
	color: "#254bdd",
};

export const tailwind: ITechnologiesItem = {
	icon: <SiTailwindcss style={{ fontSize: "1.2em" }} />,
	name: "Tailwind CSS",
	color: "#36b7f0",
};

export const styledComponents: ITechnologiesItem = {
	icon: (
		<SiStyledcomponents
			style={{ fontSize: "2em", marginTop: "-10px", marginBottom: "-10px" }}
		/>
	),
	name: "Styled Components",
	color: "#ffd25d",
};

export const reactBootstrap: ITechnologiesItem = {
	icon: (
		<svg
			fill="currentColor"
			height="1em"
			width="1em"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 2127.98 2016.87"
		>
			<path
				className="cls-1"
				d="M888 1119.17c16-32.62 32.84-65.37 50.17-97.35l.15-.27 18.39-35.68 27.16-45 .17-.29c10.14-17.26 20.66-34.68 31.27-51.78l18.69-30.87c24.88-41.19 44.88-71.23 76.43-114.76 17-23.43 33.12-44 58.66-75.92l.06-.06 1.26-1.59.49-.63c10.37-13.22 20.84-26.25 31.11-38.73l.34-.42.2-.25c23.83-29.51 48.12-59.13 72.19-88l9.57-11.48V356.54H1267c-9.23-8.68-18.66-17.3-28.08-25.69-76.32-67.72-152.43-120.85-226.27-157.79-75.71-37.92-145.63-57.14-207.8-57.14-44.39 0-84.06 9.94-117.91 29.53-32.55 18.84-59.9 46.91-81.31 83.44-20.06 34.23-34.84 75.89-43.95 123.81-17.54 92.37-13.74 208 11 334.34 3.12 15.9 6.56 32 10.25 48-19.74 6-38.91 12.18-57.13 18.53-119.26 41.58-219 95.91-288.42 157.14-36 31.71-63.84 65.23-82.89 99.62-20.24 36.57-30.51 74.08-30.51 111.49 0 75 41.55 151 120.15 219.94 74 64.93 178.65 121.62 302.55 164 11.51 3.91 23.22 7.71 35 11.34-4.12 17.93-7.93 36-11.36 54-23.56 124.08-26.31 237.62-8 328.35 9.51 47 24.61 87.89 44.89 121.57 21.56 35.8 48.93 63.44 81.34 82.13 34.15 19.69 74.34 29.67 119.45 29.67 61.42 0 130.09-18.21 204.11-54.13 72.56-35.21 146.63-85.64 220.13-149.89 11.33-9.9 23-20.49 34.66-31.53h17.41v-174.39l-6.34-7.8-3-3.67-79.82-98.55-44.35-54.75c-22.39-27.64-58.25-78.79-101-144-34-51.84-58.76-93.47-70.5-113.63l-1.28-2.21c-20.49-35.33-35.71-63.79-47.93-86.64-15.3-28.63-30.39-57.87-44.91-87l2.66-5.17zm-80.86-172.89c-13.53-34.7-25.92-69.13-37-102.81 34.57-7.13 70.51-13.53 107.32-19.11-12.28 20.11-24.34 40.41-36 60.64s-23.12 40.69-34.32 61.28zm-38.25 462.1c11.45-34.86 24.31-70.56 38.39-106.59 11.29 20.7 22.87 41.3 34.58 61.53 12.27 21.19 25 42.48 37.95 63.58-38.46-5.32-75.62-11.53-110.92-18.51zM707.18 397.16c9-61.74 29.14-105.87 55.37-121.06 10.89-6.31 25.34-9.5 42.93-9.5 38.47 0 88.24 15.1 143.91 43.67 60.34 31 125.77 77.11 189.22 133.45q5.9 5.24 12.07 10.89c-55.81 61.71-110.81 130.28-163.68 204.1-90.08 8.8-176.68 21.94-257.76 39.11-2.93-12.84-5.68-25.75-8.2-38.5l-.24-1.32c-19.33-98.76-24.04-189-13.62-260.84zm11.31 727c-38.1 84-70.48 167.16-96.37 247.46-9-2.8-17.89-5.72-26.65-8.7-103-35.21-188.79-80.66-248.08-131.43-45.37-38.85-72.45-79.83-72.45-109.63 0-30.59 27.09-70 74.34-108.2 55-44.47 133.27-85.11 226.19-117.5 15.79-5.48 31.87-10.73 48-15.64 25.53 79.13 57.48 160.99 95.01 243.63zm.12 474.92c2.86-15 6-30.09 9.43-45.09 80 16.37 167.59 28.71 260.75 36.71 53.38 74.34 108.84 143.37 165.05 205.44-6.94 6.39-13.94 12.68-20.9 18.79-81.37 71.13-163.09 122.55-236.28 148.71l-1.52.54c-32.8 11.58-62.09 17.45-87 17.45-18.38 0-33.22-3.18-44.11-9.46-26.51-15.29-47.14-58.46-56.6-118.45-11.06-69.91-7.19-157.97 11.17-254.65z"
				transform="translate(-123.98 -115.92)"
				id="_Group_"
				data-name="&lt;Group&gt;"
			/>
			<path
				className="cls-1"
				d="M2195.07 1205.1q-56.26-103.45-165.54-134.23a2.85 2.85 0 0 1-1.79-2.85 3 3 0 0 1 1.37-2.68c54.24-30.16 95.93-73.11 125.15-127.9q44.15-82.89 44.16-199.49c0-128.25-32.45-223.65-97.06-287.11s-150.62-95-257.7-95h-578.35c-1.25 0-2.27 1.31-2.27 2.93V1894.3c0 1.62 1 2.93 2.27 2.93h546.57q115.42 0 199.11-33.69c55.91-22.42 101.4-52.68 137.21-90.68s61.92-83.33 78.66-136c16.74-52.23 25.1-108.8 25.1-169.24.04-105.37-19.08-192.57-56.89-262.52zm-722.32-628c0-1.62 1-2.93 2.27-2.93h339.46c56.95 0 100.51 16 130.65 47.55s45.2 86.4 45.2 164.18c0 69.18-16.74 121.92-50.25 159.08s-75.37 55.32-125.63 55.32H1475c-1.25 0-2.27-1.31-2.27-2.93zm518.16 1035.8c-34.86 42.76-84.41 64-148.07 64H1475c-1.25 0-2.27-1.31-2.27-2.93v-476.4c0-1.62 1-2.93 2.27-2.93h367.82c63.66 0 112.57 19.89 148.07 61.35s52.93 99.82 52.93 176.3c.02 77.77-17.76 138.27-52.91 180.61z"
				transform="translate(-123.98 -115.92)"
			/>
		</svg>
	),
	name: "React Bootstrap",
	color: "#41e0fd",
};

export const tremor: ITechnologiesItem = {
	icon: (
		<svg
			style={{ marginTop: "-0.5rem" }}
			height="2em"
			width="2em"
			viewBox="0 0 326 73"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M26.405 72.575C17.06 72.575 9.08 67.85 9.08 55.88V31.835H0.365V19.655H9.605V5.69L23.78 0.439995V19.655H35.225V31.835H23.78V52.415C23.78 57.035 26.09 59.345 31.025 59.345C32.6 59.345 34.07 59.03 35.225 58.715V71.42C33.86 71.84 30.08 72.575 26.405 72.575ZM44.8801 71V19.655H59.3701V27.11C61.8901 21.44 66.6151 17.975 73.1251 17.975C74.1751 17.975 76.2751 18.185 76.9051 18.29V33.2C75.2251 32.78 73.5451 32.675 71.5501 32.675C65.9851 32.675 60.8401 36.35 59.5801 41.285V71H44.8801ZM107.782 72.575C92.9775 72.575 80.7975 62.705 80.7975 44.96C80.7975 28.79 92.4525 17.975 107.152 17.975C123.427 17.975 132.667 29.315 132.667 45.17C132.667 46.43 132.562 48.635 132.457 49.475H96.1275C96.4425 56.51 102.952 60.395 109.357 60.395C116.287 60.395 122.167 58.505 128.887 54.095V66.8C124.162 69.845 118.072 72.575 107.782 72.575ZM96.4425 39.605H117.862C117.547 34.775 114.187 30.155 107.152 30.155C100.747 30.155 96.7575 34.985 96.4425 39.605ZM201.307 17.975C210.967 17.975 219.682 24.59 219.682 36.77V71H204.982V40.445C204.982 34.88 201.937 31.415 197.002 31.415C193.327 31.415 190.387 33.515 188.287 36.455V36.77V71H173.587V40.445C173.587 34.88 170.647 31.415 165.712 31.415C161.827 31.415 158.887 33.62 156.787 36.77V71H142.087V19.655H156.577V23.75C159.412 20.495 163.717 17.975 170.227 17.975C176.212 17.975 181.777 20.495 185.032 25.325C187.657 22.28 192.802 17.975 201.307 17.975ZM255.974 72.575C239.384 72.575 228.044 60.605 228.044 45.17C228.044 29.84 239.384 17.975 255.974 17.975C272.564 17.975 284.009 29.84 284.009 45.17C284.009 60.605 272.564 72.575 255.974 72.575ZM255.974 58.715C263.114 58.715 268.784 53.675 268.784 45.17C268.784 36.875 263.114 31.73 255.974 31.73C248.939 31.73 243.269 36.875 243.269 45.17C243.269 53.675 248.939 58.715 255.974 58.715ZM293.435 71V19.655H307.925V27.11C310.445 21.44 315.17 17.975 321.68 17.975C322.73 17.975 324.83 18.185 325.46 18.29V33.2C323.78 32.78 322.1 32.675 320.105 32.675C314.54 32.675 309.395 36.35 308.135 41.285V71H293.435Z"></path>
		</svg>
	),
	name: "tremor",
	color: "#1e293b",
};

export const formik: ITechnologiesItem = {
	icon: (
		<svg
			height="1em"
			width="1em"
			viewBox="0 0 34.7 34.7"
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
		>
			<g transform="matrix(.400018502 0 0 .400018502 5.34987738 .55385626)">
				<path d="m38.869 0 9.694 5.5746-38.176 21.954-9.694-5.5747z" />
				<path d="m48.954 6.7451-37.936 21.806-.0013 11.032 37.936-21.806z" />
				<path d="m33.698 28.276-22.601 12.991-.0012 11.033 22.601-12.991z" />
				<path d="m25.035 45.717-13.99 8.0421-.0013 11.033 13.991-8.0421z" />
				<path d="m.0037583 23.017 9.751 5.6047-.00375 11.035-9.751-5.6046z" />
				<path d="m.096543 35.657 9.6327 5.5367-.00376 11.035-9.6327-5.5366z" />
				<path d="m.092298 48.221 9.6359 5.5386-.00401 11.763-9.6359-5.5386z" />
				<path d="m21.564 84-9.694-5.5746 37.743-21.704 9.6939 5.5746z" />
				<path d="m11.102 77.471 37.879-21.773.0012-11.032-37.879 21.773z" />
				<path d="m26.3 55.974 22.601-12.991.0013-11.033-22.601 12.991z" />
				<path d="m34.964 38.532 13.99-8.0421.0012-11.033-13.99 8.0421z" />
				<path d="m59.996 61.306-9.7509-5.6046.0037-11.035 9.751 5.6046z" />
				<path d="m59.904 48.595-9.6327-5.5367.0037-11.035 9.6327 5.5366z" />
				<path d="m59.908 36.031-9.636-5.5386.0039-11.552 9.636 5.5385z" />
			</g>
		</svg>
	),
	name: "Formik",
	color: "blue",
};

export const emailJS: ITechnologiesItem = {
	icon: (
		<svg
			height={"1em"}
			width={"1em"}
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			viewBox="0 0 510.88 512"
			fill="currentColor"
		>
			<rect x="270.57" width="240.31" height="240.31" rx="24"></rect>{" "}
			<path d="M215.12 254.73V68.5a29.16 29.16 0 0 0-8.55-20.64 29.19 29.19 0 0 0-41.28 0L16.18 197a55.27 55.27 0 0 0 0 78.14l220.71 220.68a55.27 55.27 0 0 0 78.14 0l149.11-149.11a29.19 29.19 0 0 0 0-41.28l-1.14-1.12a29.16 29.16 0 0 0-20.64-8.55H256.15a41 41 0 0 1-41.03-41.03z"></path>
		</svg>
	),
	name: "EmailJS",
	color: "#fca253",
};

export const firebase: ITechnologiesItem = {
	icon: (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 48 48"
			width="1em"
			height="1em"
			fill="currentColor"
		>
			<path d="M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z" />
			<path d="M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z" />
			<path d="M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z" />
			<path d="M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743 c-0.609,0.342-1.352,0.342-1.961,0L8,37z" />
		</svg>
	),

	name: "Firebase",
	color: "#FFCA28",
};

export const express: ITechnologiesItem = {
	icon: <SiExpress />,
	name: "Express",
	color: "#259dff",
};

export const mongo: ITechnologiesItem = {
	icon: <SiMongodb />,
	name: "Mongo DB",
	color: "#4ca93e",
};

export const tecnologiesData: ITechnologiesItem[] = [
	react,
	nextJs,
	javascript,
	typescript,
	formik,
	css,
	tailwind,
	styledComponents,
	reactBootstrap,
	express,
];