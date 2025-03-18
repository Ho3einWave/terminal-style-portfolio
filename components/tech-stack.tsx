"use client";

import { useState, useRef } from "react";
import {
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiTailwindcss,
    SiPrisma,
} from "@/components/icons";
import { Terminal, Database, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TechStack() {
    const [hoveredTech, setHoveredTech] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const technologies = [
        {
            name: "TypeScript",
            level: "Advanced",
            icon: SiTypescript,
            description:
                "Static typing for JavaScript with excellent IDE support",
            color: "border-blue-500/30 hover:border-blue-500/50",
            textColor: "text-blue-400",
            years: 3,
        },
        {
            name: "React",
            level: "Advanced",
            icon: SiReact,
            description: "Component-based UI library for building interfaces",
            color: "border-cyan-500/30 hover:border-cyan-500/50",
            textColor: "text-cyan-400",
            years: 4,
        },
        {
            name: "Next.js",
            level: "Advanced",
            icon: SiNextdotjs,
            description: "React framework with SSR, SSG, and API routes",
            color: "border-white/30 hover:border-white/50",
            textColor: "text-white",
            years: 3,
        },
        {
            name: "Node.js",
            level: "Intermediate",
            icon: SiNodedotjs,
            description: "JavaScript runtime for server-side applications",
            color: "border-green-500/30 hover:border-green-500/50",
            textColor: "text-green-400",
            years: 3,
        },
        {
            name: "Tailwind",
            level: "Advanced",
            icon: SiTailwindcss,
            description: "Utility-first CSS framework for rapid UI development",
            color: "border-cyan-400/30 hover:border-cyan-400/50",
            textColor: "text-cyan-400",
            years: 2,
        },
        {
            name: "Prisma",
            level: "Intermediate",
            icon: SiPrisma,
            description: "Next-generation ORM for Node.js and TypeScript",
            color: "border-purple-500/30 hover:border-purple-500/50",
            textColor: "text-purple-400",
            years: 2,
        },
        {
            name: "Docker",
            level: "Intermediate",
            icon: Server,
            description: "Containerization platform for application deployment",
            color: "border-blue-400/30 hover:border-blue-400/50",
            textColor: "text-blue-400",
            years: 2,
        },
        {
            name: "GraphQL",
            level: "Intermediate",
            icon: Database,
            description:
                "Query language for APIs and runtime for executing queries",
            color: "border-pink-500/30 hover:border-pink-500/50",
            textColor: "text-pink-400",
            years: 2,
        },
        {
            name: "AWS",
            level: "Intermediate",
            icon: Server,
            description: "Cloud computing platform for hosting and services",
            color: "border-yellow-500/30 hover:border-yellow-500/50",
            textColor: "text-yellow-400",
            years: 2,
        },
        {
            name: "MongoDB",
            level: "Intermediate",
            icon: Database,
            description: "NoSQL document database for modern applications",
            color: "border-green-500/30 hover:border-green-500/50",
            textColor: "text-green-400",
            years: 3,
        },
    ];

    // Calculate tooltip position based on scroll position
    const handleMouseEnter = (techName: string) => {
        setHoveredTech(techName);
    };

    return (
        <div className="space-y-2 flex flex-col h-full">
            <div
                className="grid grid-cols-1 gap-1.5 overflow-y-scroll max-h-[250px] custom-scrollbar pr-1 flex-grow"
                ref={containerRef}
            >
                {technologies.map((tech, index) => (
                    <div
                        key={tech.name}
                        className={`flex justify-between items-center p-2 bg-zinc-800/50 border ${tech.color} rounded-none hover:bg-zinc-800 transition-all duration-300 group relative`}
                        onMouseEnter={() => handleMouseEnter(tech.name)}
                        onMouseLeave={() => setHoveredTech(null)}
                    >
                        <div className="flex items-center">
                            <tech.icon
                                className={`h-4 w-4 mr-2 ${tech.textColor}`}
                            />
                            <span className="text-xs font-medium text-zinc-200">
                                {tech.name}
                            </span>
                        </div>
                        <div className="flex items-center">
                            <div className="text-[10px] text-zinc-400 mr-2">
                                {tech.years}+ yrs
                            </div>
                            <span className="text-[10px] text-zinc-300 px-1.5 py-0.5 bg-zinc-800 rounded-none border border-zinc-700">
                                {tech.level}
                            </span>
                        </div>

                        {hoveredTech === tech.name && (
                            <div className="absolute left-0 right-0 -bottom-[38px] z-10 bg-zinc-900 border border-zinc-700 p-1.5 text-[10px] text-zinc-300 shadow-lg">
                                {tech.description}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-2">
                <Button
                    variant="outline"
                    size="sm"
                    className="h-7 text-xs border-zinc-700 bg-zinc-800/50 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 rounded-none w-full"
                >
                    <Terminal className="h-3 w-3 mr-1" />
                    View all technologies
                </Button>
            </div>
        </div>
    );
}
