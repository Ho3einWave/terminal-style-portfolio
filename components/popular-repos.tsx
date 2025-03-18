"use client";

import Link from "next/link";
import { Star, GitFork, ExternalLink } from "lucide-react";
import { usePopularRepos } from "@/hooks/use-popular-repos";

export default function PopularRepos() {
    const { data: repos = [], isLoading, isError } = usePopularRepos();

    const getLanguageColor = (language: string) => {
        const colors: Record<string, string> = {
            TypeScript: "bg-blue-500",
            JavaScript: "bg-yellow-400",
            CSS: "bg-purple-500",
            HTML: "bg-orange-500",
            Python: "bg-green-500",
        };
        return colors[language] || "bg-gray-500";
    };

    if (isLoading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {[...Array(4)].map((_, index) => (
                    <div
                        key={index}
                        className="border border-zinc-800 bg-zinc-900 rounded-none p-3 animate-pulse h-32"
                    />
                ))}
            </div>
        );
    }

    if (isError) {
        console.error("Failed to load repositories");
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {repos.map((repo) => (
                <div
                    key={repo.name}
                    className="border border-zinc-800 bg-zinc-900 rounded-none p-3 hover:border-zinc-700 transition-all duration-300 shadow-sm group relative"
                >
                    <div className="absolute top-0 right-0 text-zinc-700 text-[8px] leading-none">
                        <pre>{`+---+\n|   |\n+---+`}</pre>
                    </div>

                    <div className="flex items-start justify-between">
                        <h3 className="font-medium text-zinc-100 text-sm truncate">
                            {repo.name}
                        </h3>
                        <Link
                            href={repo.url}
                            target="_blank"
                            className="text-zinc-400 hover:text-zinc-200 transition-colors"
                        >
                            <ExternalLink className="h-3.5 w-3.5" />
                        </Link>
                    </div>

                    <p className="text-xs text-zinc-400 mt-1 mb-2 line-clamp-2 h-8">
                        {repo.description}
                    </p>

                    <div className="flex items-center gap-3 text-xs text-zinc-400">
                        <div className="flex items-center">
                            <div
                                className={`h-2 w-2 ${getLanguageColor(
                                    repo.language
                                )} mr-1`}
                            ></div>
                            <span>{repo.language}</span>
                        </div>

                        <div className="flex items-center">
                            <Star className="h-3 w-3 mr-1" />
                            <span>{repo.stars}</span>
                        </div>

                        <div className="flex items-center">
                            <GitFork className="h-3 w-3 mr-1" />
                            <span>{repo.forks}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
