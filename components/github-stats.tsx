"use client";

import { useState, useEffect } from "react";
import { BarChart, GitFork, Star, Users, Github, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { siteConfig } from "@/constants/site";
import { useGithubStats } from "@/hooks/use-github-stats";

export default function GithubStats() {
    const { data: stats, isLoading } = useGithubStats();
    const [terminalLines, setTerminalLines] = useState<string[]>([]);
    const username = siteConfig.github_username;

    useEffect(() => {
        // Terminal animation
        const lines = [
            `> git clone https://github.com/${username}`,
            `Cloning into '${username}'...`,
            `remote: Enumerating objects: 1349, done.`,
            `remote: Counting objects: 100% (1349/1349), done.`,
            `remote: Compressing objects: 100% (612/612), done.`,
            `Receiving objects: 100% (1349/1349), 8.32 MiB | 5.21 MiB/s, done.`,
            `Resolving deltas: 100% (724/724), done.`,
            `> cd ${username}`,
            `> ls -la`,
            `total 156`,
            `drwxr-xr-x  15 user  staff   480 Mar 18 14:22 .`,
            `drwxr-xr-x   5 user  staff   160 Mar 18 14:22 ..`,
            `drwxr-xr-x  12 user  staff   384 Mar 18 14:22 .git`,
            `-rw-r--r--   1 user  staff  1853 Mar 18 14:22 README.md`,
            `drwxr-xr-x   8 user  staff   256 Mar 18 14:22 projects`,
            `drwxr-xr-x  10 user  staff   320 Mar 18 14:22 src`,
            `> cat README.md`,
            `# ${username}`,
            `Welcome to my GitHub profile! Check out my repositories and projects.`,
            `> _`,
        ];

        let currentLine = 0;
        const interval = setInterval(() => {
            if (currentLine < lines.length) {
                setTerminalLines((prev) => [...prev, lines[currentLine]]);
                currentLine++;
            } else {
                clearInterval(interval);
            }
        }, 300);

        return () => {
            clearInterval(interval);
        };
    }, [username]);

    return (
        <div className="space-y-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <div className="flex items-center p-2 bg-zinc-800/50 border border-zinc-700 rounded-none">
                    <div className="mr-2">
                        <GitFork className="h-3 w-3 text-zinc-300" />
                    </div>
                    <div>
                        <div className="text-xs text-zinc-400">Repos</div>
                        <div className="text-sm font-bold text-zinc-200">
                            {isLoading ? "..." : stats?.repos || 0}
                        </div>
                    </div>
                </div>
                <div className="flex items-center p-2 bg-zinc-800/50 border border-zinc-700 rounded-none">
                    <div className="mr-2">
                        <Star className="h-3 w-3 text-zinc-300" />
                    </div>
                    <div>
                        <div className="text-xs text-zinc-400">Stars</div>
                        <div className="text-sm font-bold text-zinc-200">
                            {isLoading ? "..." : stats?.stars || 0}
                        </div>
                    </div>
                </div>
                <div className="flex items-center p-2 bg-zinc-800/50 border border-zinc-700 rounded-none">
                    <div className="mr-2">
                        <Users className="h-3 w-3 text-zinc-300" />
                    </div>
                    <div>
                        <div className="text-xs text-zinc-400">Followers</div>
                        <div className="text-sm font-bold text-zinc-200">
                            {isLoading ? "..." : stats?.followers || 0}
                        </div>
                    </div>
                </div>
                <div className="flex items-center p-2 bg-zinc-800/50 border border-zinc-700 rounded-none">
                    <div className="mr-2">
                        <BarChart className="h-3 w-3 text-zinc-300" />
                    </div>
                    <div>
                        <div className="text-xs text-zinc-400">Commits</div>
                        <div className="text-sm font-bold text-zinc-200">
                            {isLoading ? "..." : stats?.contributions || 0}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-700 rounded-none overflow-hidden">
                <div className="bg-zinc-800 px-2 py-1 text-xs text-zinc-300 flex items-center justify-between">
                    <div className="flex items-center">
                        <Terminal className="h-3 w-3 mr-1" />
                        <span>terminal</span>
                    </div>
                    <div className="flex space-x-1">
                        <div className="h-2 w-2 rounded-full bg-red-500"></div>
                        <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    </div>
                </div>
                <div className="p-2 h-[150px] overflow-y-auto custom-scrollbar font-mono text-[10px] leading-tight">
                    {terminalLines.map((line, index) => (
                        <div
                            key={index}
                            className="text-zinc-300 whitespace-pre-wrap"
                        >
                            {line}
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex gap-2">
                <Link
                    href={`https://github.com/${username}`}
                    target="_blank"
                    className="flex-1"
                >
                    <Button
                        variant="outline"
                        className="w-full h-8 text-xs border-zinc-700 bg-zinc-800/50 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 rounded-none"
                    >
                        <Github className="h-3 w-3 mr-1" />
                        View GitHub Profile
                    </Button>
                </Link>
            </div>
        </div>
    );
}
