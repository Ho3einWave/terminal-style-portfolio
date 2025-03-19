import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Github, ExternalLink, Code, Lock } from "lucide-react";

import { projects } from "@/constants/projects";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TerminalPrompt from "@/components/terminal-prompt";
import AsciiDecorator from "@/components/ascii-decorator";

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

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-200 p-3 font-mono">
            <div className="mx-auto max-w-5xl">
                <div className="mb-4">
                    <Link href="/">
                        <Button
                            variant="outline"
                            className="text-xs border-zinc-800 bg-zinc-900 text-zinc-200 hover:bg-zinc-800 hover:text-zinc-100 rounded-none"
                        >
                            <ArrowLeft className="mr-1 h-3 w-3" />
                            cd ..
                        </Button>
                    </Link>
                    <h1 className="text-xl font-bold mt-3 text-zinc-100">
                        ./projects<span className="animate-pulse">_</span>
                    </h1>
                    <TerminalPrompt
                        command="find . -name '*.project' | sort"
                        className="mt-2 justify-center"
                    />
                </div>

                <div className="text-center mb-4 text-zinc-600 hidden md:block">
                    <pre className="text-xs leading-tight">
                        {`
+----------------------------------------------------------------------+
|                                                                      |
|                        PROJECT REPOSITORY                            |
|                                                                      |
+----------------------------------------------------------------------+
`}
                    </pre>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {projects.map((project) => (
                        <Card
                            key={project.title}
                            className="overflow-hidden border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300 rounded-none shadow-sm relative flex flex-col"
                        >
                            <AsciiDecorator position="top-right" />
                            <div className="aspect-video w-full bg-zinc-950 relative">
                                <Image
                                    src={project.image || `/placeholder.svg`}
                                    alt={project.title}
                                    width={400}
                                    height={200}
                                    className="object-cover h-[300px] opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                                <div className="absolute top-0 right-0 bg-zinc-900/80 p-1">
                                    {project.isOpenSource ? (
                                        <Github className="h-3 w-3 text-zinc-400" />
                                    ) : (
                                        <Lock className="h-3 w-3 text-zinc-400" />
                                    )}
                                </div>
                                <div className="absolute top-0 left-0 bg-zinc-900/80 px-2 py-1">
                                    <span
                                        className={`text-[10px] ${
                                            project.status === "Active"
                                                ? "text-green-400"
                                                : project.status === "Completed"
                                                ? "text-blue-400"
                                                : "text-yellow-400"
                                        }`}
                                    >
                                        {project.status}
                                    </span>
                                </div>
                            </div>
                            <CardContent className="p-3 flex flex-col flex-grow">
                                <div className="flex flex-col flex-grow">
                                    <h2 className="font-medium text-zinc-100 text-sm">
                                        {project.title}
                                    </h2>
                                    <p className="text-xs text-zinc-400 mb-2 mt-2">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1 mb-2">
                                        {project.technologies.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-1.5 py-0.5 bg-zinc-800 rounded-none text-[10px] text-zinc-300 border border-zinc-700"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    {project.repository && (
                                        <Link
                                            href={project.repository}
                                            target="_blank"
                                        >
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="h-7 text-xs border-zinc-700 bg-zinc-900 text-zinc-200 hover:bg-zinc-800 hover:text-zinc-100 rounded-none"
                                            >
                                                <Code className="mr-1 h-3 w-3" />
                                                Source
                                            </Button>
                                        </Link>
                                    )}
                                    {project.link && (
                                        <Link
                                            href={project.link}
                                            target="_blank"
                                        >
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="h-7 text-xs border-zinc-700 bg-zinc-900 text-zinc-200 hover:bg-zinc-800 hover:text-zinc-100 rounded-none"
                                            >
                                                <ExternalLink className="mr-1 h-3 w-3" />
                                                Demo
                                            </Button>
                                        </Link>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </main>
    );
}
