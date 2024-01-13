import { ProyectCardProps } from "@/components/ProyectCard";
import {
	emailJS,
	firebase,
	formik,
	javascript,
	nextJs,
	react,
	tailwind,
	tremor,
	typescript,
} from "@/data/technologiesData";

export const proyectCardsData: ProyectCardProps[] = [
	{
		title: "Aliviate App",
		technologies: [react, nextJs, typescript, tailwind, tremor, formik],
		imagePath: "/images/proyect-3.webp",
		description:
			"Aplicacion para el control de citas y diagnosticos automaticos",
	},
	{
		title: "LimCourier Landing Page",
		technologies: [react, typescript, tailwind, emailJS, firebase],
		imagePath: "/images/proyect-2.webp",
		description:
			"Landing Page para la empresa de courier hecha con NextJS como SSG",
	},
];

export const fullProyectCardsData: ProyectCardProps[] = [
	{
		title: "Control Bagservis",
		technologies: [react, javascript, tailwind, tremor, formik],
		imagePath: "/images/proyect-1.webp",
		description:
			"Aplicacion para el control de citas y diagnosticos automaticos",
		fullDescription: [
			`• Desarrollé una aplicación de control de servicios utilizando React para la interfaz de usuario y conectado a una base de datos no relacional Firestore de Firebase.`,
			`• Utilicé Tailwind CSS para el diseño y Bootstrap Icons para los iconos de la interfaz.`,
			`• Implementé la aplicacion gestionar servicios y datos relacionados, logrando una mayor eficiencia en los procesos de liquidación de servicios de clientes y proveedores.`,
			`• Estos cambios resultaron en una mejora significativa en la eficiencia de los procesos principales de la empresa (Tareos, Liquidaciones de Servicios) lo que se tradujo en una mayor productividad y satisfacción del cliente.`,
		],
	},
	{
		title: "LimCourier",
		technologies: [react, typescript, tailwind, emailJS, firebase],
		imagePath: "/images/proyect-2.webp",
		description:
			"Landing Page para la empresa de courier hecha con NextJS como SSG",
		fullDescription: [
			`• Desarrollé una landing page para una empresa de courier utilizando Next.js con generación de páginas estáticas (SSG)`,
			`• Con el Servicio de Email JS se genero un contacto automático me diante envio de correos`,
			`• Se uso Tailwind para los estilos y Vanilla para los interceptores`,
			`• Cada servicio cuenta con su propia pagina para la descripcion del servicio`,
			`• El video y recursos pesados se usa el almacenamiento de Firebase para realizar la solicitud del recurso`,
		],
	},
	{
		title: "Aliviate App",
		technologies: [react, nextJs, typescript, tailwind, tremor, formik],
		imagePath: "/images/proyect-3.webp",
		description:
			"Aplicacion para el control de citas y diagnosticos automaticos",

		fullDescription: [
			`• Desarrollé el frontend para un Sistema de Control de Pacientes con Diagnóstico por IA, implementando de manera efectiva las características más recientes de Next.js, como Server Components y Server Actions.`,
			`• Utilicé Server Components para modularizar el código y mejorar la eficiencia en la carga de la interfaz de usuario, logrando tiempos de respuesta más rápidos.`,
			`• Además, aproveché Server Actions para realizar peticiones al backend de manera eficiente, mejorando la comunicación entre el frontend y el servidor.`,
			`• Esta implementación avanzada no solo garantizó una experiencia de usuario más fluida, sino que también optimizó los tiempos de carga, destacando mi capacidad para utilizar las últimas tecnologías de Next.js en proyectos de salud innovadores.`,
		],
	},
	{
		title: "AR Consultoria",
		technologies: [
			react,
			nextJs,
			typescript,
			tailwind,
			emailJS,
			firebase,
			formik,
		],
		imagePath: "/images/proyect-4.webp",
		description:
			"Aplicacion para el control de citas y diagnosticos automaticos",
		fullDescription: [
			`• Creé una landing page estática (SSG) para una empresa de consultoría.`,
			`• Utilicé Tailwind para los estilos y CSS para animaciones como carrousel mostrando los clientes.`,
			`• De describe la cultura de la empresa y los propietarios.`,
			`• Se incorporó una base de datos en Firebase para programar y almacenar eventos destinados a la divulgación y publicidad de la empresa.`,
			`• El proyecto sigue aun en desarrollo`,
		],
	},
];
