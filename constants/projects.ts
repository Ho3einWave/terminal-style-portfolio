export interface Project {
    title: string;
    status: "Active" | "Completed" | "On Hold";
    description: string;
    technologies: string[];
    image?: string;
    isOpenSource: boolean;
    link?: string;
    repository?: string;
}

export const projects: Project[] = [
    {
        title: "Radio Javan Downloader",
        status: "Active",
        description:
            "Web Application for downloading any kind of media from radiojavan.com website",
        isOpenSource: false,
        image: "https://data.port0.ir/proj/rjdl.png",
        technologies: [
            "React",
            "Typescript",
            "Tanstack Query",
            "Zustand",
            "TailwindCSS",
            "NextUI",
            "Express",
            "NodeJS",
        ],
        link: "https://rj.hoseinwave.ir",
    },
    {
        title: "Persian TTS",
        status: "Active",
        description:
            "A web app that convert farsi text to speech with igap messenger api.",
        isOpenSource: true,
        image: "https://data.port0.ir/proj/persiantts.png",
        technologies: [
            "React",
            "Vite",
            "Typescript",
            "wavesurfer.js",
            "Zustand",
            "TailwindCSS",
            "Framer Motion",
        ],
        link: "https://persian-tts.0xloop.eu.org/",
        repository: "https://github.com/Ho3einWave/persian-tts-ai-front",
    },
    {
        title: "Weather App",
        status: "Active",
        description:
            "A Web Application that shows current and forecast weather information based on location",
        isOpenSource: true,
        image: "https://data.port0.ir/proj/weather.png",
        technologies: [
            "React",
            "Vite",
            "Typescript",
            "Tanstack Query",
            "Zustand",
            "TailwindCSS",
            "Framer Motion",
        ],
        link: "https://weather.projects.hoseinwave.ir/",
        repository: "https://github.com/Ho3einWave/weatherapp",
    },
];
