import {
    LogosTypescriptIcon,
    LogosReact,
    LogosNextjsIcon,
    LogosTailwindcssIcon,
    LogosNodejsIconAlt,
    SimpleIconsExpress,
    LogosMongodbIcon,
    LogosMysql,
    SimpleIconsShadcnui,
    LogosGraphql,
    LogosBun,
} from "@/components/icons";

export interface Technology {
    name: string;
    level: "Beginner" | "Intermediate" | "Advanced";
    icon: React.ComponentType<any>;
    description: string;
    color: string;
    years: number;
}

export const technologies: Technology[] = [
    {
        name: "TypeScript",
        level: "Advanced",
        icon: LogosTypescriptIcon,
        description: "Static typing for JavaScript with excellent IDE support",
        color: "border-blue-500/30 hover:border-blue-500/50",
        years: 3,
    },
    {
        name: "React",
        level: "Advanced",
        icon: LogosReact,
        description: "Component-based UI library for building interfaces",
        color: "border-cyan-500/30 hover:border-cyan-500/50",
        years: 3,
    },
    {
        name: "Tailwind",
        level: "Advanced",
        icon: LogosTailwindcssIcon,
        description: "Utility-first CSS framework for rapid UI development",
        color: "border-cyan-500/30 hover:border-cyan-500/50",
        years: 2,
    },
    {
        name: "Next.js",
        level: "Advanced",
        icon: LogosNextjsIcon,
        description: "React framework with SSR, SSG, and API routes",
        color: "border-white/30 hover:border-white/50",
        years: 2,
    },
    {
        name: "Shadcn/UI",
        level: "Intermediate",
        icon: SimpleIconsShadcnui,
        description: "Component library for building modern UI",
        color: "border-purple-500/30 hover:border-purple-500/50",
        years: 1,
    },
    {
        name: "GraphQL",
        level: "Intermediate",
        icon: LogosGraphql,
        description: "Query language for APIs",
        color: "border-pink-500/30 hover:border-pink-500/50",
        years: 1,
    },
    {
        name: "Bun",
        level: "Intermediate",
        icon: LogosBun,
        description: "JavaScript runtime for server-side development",
        color: "border-green-500/30 hover:border-green-500/50",
        years: 1,
    },
    {
        name: "Node.js",
        level: "Advanced",
        icon: LogosNodejsIconAlt,
        description: "JavaScript runtime for server-side development",
        color: "border-green-500/30 hover:border-green-500/50",
        years: 3,
    },
    {
        name: "Express",
        level: "Intermediate",
        icon: SimpleIconsExpress,
        description: "Web application framework for Node.js",
        color: "border-gray-500/30 hover:border-gray-500/50",
        years: 3,
    },
    {
        name: "MongoDB",
        level: "Intermediate",
        icon: LogosMongodbIcon,
        description: "NoSQL database for modern applications",
        color: "border-green-500/30 hover:border-green-500/50",
        years: 3,
    },
    {
        name: "MySQL",
        level: "Beginner",
        icon: LogosMysql,
        description: "Relational database for structured data",
        color: "border-blue-500/30 hover:border-blue-500/50",
        years: 1,
    },
];
