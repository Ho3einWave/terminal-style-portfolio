"use client";

import { useState, useRef } from "react";
import { technologies } from "@/constants/tech-stack";

export default function TechStack() {
    const [hoveredTech, setHoveredTech] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Calculate tooltip position based on scroll position
    const handleMouseEnter = (techName: string) => {
        setHoveredTech(techName);
    };

    return (
        <div className="space-y-2 flex flex-col h-full">
            <div
                className="grid grid-cols-1 gap-1.5 overflow-y-scroll max-h-[290px] custom-scrollbar pr-1 flex-grow"
                ref={containerRef}
            >
                {technologies.map((tech, index) => (
                    <div
                        key={tech.name}
                        className={`flex justify-between items-center p-2 bg-zinc-800/50 rounded-none hover:bg-zinc-800 transition-all duration-300 group relative border border-zinc-700`}
                        onMouseEnter={() => handleMouseEnter(tech.name)}
                        onMouseLeave={() => setHoveredTech(null)}
                    >
                        <div className="flex items-center">
                            <tech.icon className={`h-4 w-4 mr-2`} />
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
        </div>
    );
}
