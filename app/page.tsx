import Link from "next/link";
import Image from "next/image";
import {
    Github,
    Twitter,
    Linkedin,
    Mail,
    ExternalLink,
    Code,
    Lock,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import GithubStats from "@/components/github-stats";
import TechStack from "@/components/tech-stack";
import TerminalPrompt from "@/components/terminal-prompt";
import WakaTimeStats from "@/components/wakatime-stats";
import BlogPosts from "@/components/blog-posts";
import PopularRepos from "@/components/popular-repos";
import AsciiDecorator from "@/components/ascii-decorator";
import MusicPlayer from "@/components/music-player";
import SocialButton from "@/components/social-button";
import { siteConfig } from "@/constants/site";
import { getLatestPosts } from "@/lib/mdx";
import { projects } from "@/constants/projects";

export default async function Home() {
    const posts = await getLatestPosts();

    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-200 p-3 font-mono">
            <div className="mx-auto max-w-5xl">
                {/* ASCII Header */}
                <div className="text-center mb-4 text-zinc-500 hidden md:block">
                    <pre className="text-[8px] leading-tight overflow-hidden">
                        {`  █     █░▓█████  ██▓     ▄████▄   ▒█████   ███▄ ▄███▓▓█████ 
▓█░ █ ░█░▓█   ▀ ▓██▒    ▒██▀ ▀█  ▒██▒  ██▒▓██▒▀█▀ ██▒▓█   ▀ 
▒█░ █ ░█ ▒███   ▒██░    ▒▓█    ▄ ▒██░  ██▒▓██    ▓██░▒███   
░█░ █ ░█ ▒▓█  ▄ ▒██░    ▒▓▓▄ ▄██▒▒██   ██░▒██    ▒██ ▒▓█  ▄ 
░░██▒██▓ ░▒████▒░██████▒▒ ▓███▀ ░░ ████▓▒░▒██▒   ░██▒░▒████▒
░ ▓░▒ ▒  ░░ ▒░ ░░ ▒░▓  ░░ ░▒ ▒  ░░ ▒░▒░▒░ ░ ▒░   ░  ░░░ ▒░ ░
  ▒ ░ ░   ░ ░  ░░ ░ ▒  ░  ░  ▒     ░ ▒ ▒░ ░  ░      ░ ░ ░  ░
  ░   ░     ░     ░ ░   ░        ░ ░ ░ ▒  ░      ░      ░   
    ░       ░  ░    ░  ░░ ░          ░ ░         ░      ░  ░
                        ░                                   `}
                    </pre>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-3 auto-rows-min">
                    {/* About Me - Compact */}
                    <Card className="md:col-span-3 bg-zinc-900/50 border border-zinc-800 overflow-hidden rounded-none hover:border-zinc-700 transition-all duration-300 shadow-md">
                        <CardContent className="p-3 flex flex-col gap-y-2 h-full">
                            <AsciiDecorator position="top-right" />
                            <div className="flex items-center gap-3">
                                <div className="w-16 h-16 overflow-hidden  rounded-none">
                                    <Image
                                        src={siteConfig.avatar}
                                        alt="Profile"
                                        width={200}
                                        height={200}
                                        className="object-cover rounded-sm"
                                    />
                                </div>
                                <div className="text-left">
                                    <h1 className="text-xl font-bold text-zinc-100">
                                        Hosein_Baseri
                                        <span className="animate-pulse">_</span>
                                    </h1>
                                    <p className="text-zinc-400 text-sm">
                                        {siteConfig.title}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-2 text-sm text-zinc-300 text-left border-l-2 border-zinc-700 pl-2">
                                <p>{siteConfig.bio}</p>
                            </div>

                            <div className="flex-grow flex items-end w-full">
                                <div className="mt-3 grid grid-cols-4 gap-2 w-full">
                                    <SocialButton
                                        icon={"github"}
                                        href={`https://github.com/${siteConfig.github_username}`}
                                        label="GitHub"
                                        command="open github"
                                    />
                                    <SocialButton
                                        icon={"twitter"}
                                        href={`https://twitter.com/${siteConfig.twitter_username}`}
                                        label="Twitter"
                                        command="open twitter"
                                    />
                                    <SocialButton
                                        icon={"linkedin"}
                                        href={`https://linkedin.com/in/${siteConfig.linkedin_username}`}
                                        label="LinkedIn"
                                        command="open linkedin"
                                    />
                                    <SocialButton
                                        icon={"mail"}
                                        href={`mailto:${siteConfig.email}`}
                                        label="Email"
                                        command="send email"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* GitHub Stats - Smaller */}
                    <Card className="md:col-span-3 bg-zinc-900/50 border border-zinc-800 overflow-hidden rounded-none hover:border-zinc-700 transition-all duration-300 shadow-md">
                        <CardContent className="p-3">
                            <AsciiDecorator position="top-right" />
                            <TerminalPrompt
                                command={`git stats --user ${siteConfig.global_username}`}
                                className="text-left mb-2"
                            />
                            <GithubStats />
                        </CardContent>
                    </Card>

                    {/* Tech Stack - Tall */}
                    <Card className="md:col-span-2 bg-zinc-900/50 border border-zinc-800 overflow-hidden rounded-none hover:border-zinc-700 transition-all duration-300 shadow-md">
                        <CardContent className="p-3">
                            <AsciiDecorator position="top-right" />
                            <TerminalPrompt
                                command="ls -la tech/"
                                className="text-left mb-2"
                            />
                            <TechStack />
                        </CardContent>
                    </Card>

                    {/* WakaTime Stats - Medium */}
                    <Card className="md:col-span-2 bg-zinc-900/50 border border-zinc-800 overflow-hidden rounded-none hover:border-zinc-700 transition-all duration-300 shadow-md">
                        <CardContent className="p-3">
                            <AsciiDecorator position="top-right" />
                            <TerminalPrompt
                                command="wakatime --all"
                                className="text-left mb-2"
                            />
                            <WakaTimeStats />
                        </CardContent>
                    </Card>

                    {/* Music Player */}
                    <Card className="md:col-span-2 bg-zinc-900/50 border border-zinc-800 overflow-hidden rounded-none hover:border-zinc-700 transition-all duration-300 shadow-md">
                        <CardContent className="p-3">
                            <AsciiDecorator position="top-right" />
                            <TerminalPrompt
                                command="mpv --playlist favorites.m3u"
                                className="text-left mb-2"
                            />
                            <MusicPlayer />
                        </CardContent>
                    </Card>

                    {/* Popular Repositories - Full width */}
                    <Card className="md:col-span-6 bg-zinc-900/50 border border-zinc-800 overflow-hidden rounded-none hover:border-zinc-700 transition-all duration-300 shadow-md">
                        <CardContent className="p-3">
                            <AsciiDecorator position="top-right" />
                            <div className="flex justify-between items-center mb-3">
                                <TerminalPrompt
                                    command="gh repo list --sort stars"
                                    className="text-left"
                                />
                                <Link
                                    href={`https://github.com/${siteConfig.github_username}`}
                                    target="_blank"
                                >
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="h-7 text-xs border-zinc-800 bg-zinc-900 text-zinc-200 hover:bg-zinc-800 hover:text-zinc-100 rounded-none"
                                    >
                                        View All
                                        <ExternalLink className="ml-1 h-3 w-3" />
                                    </Button>
                                </Link>
                            </div>
                            <PopularRepos />
                        </CardContent>
                    </Card>

                    {/* Blogs Section - Medium */}
                    <Card className="md:col-span-3 bg-zinc-900/50 border border-zinc-800 overflow-hidden rounded-none hover:border-zinc-700 transition-all duration-300 shadow-md">
                        <CardContent className="p-3">
                            <AsciiDecorator position="top-right" />
                            <TerminalPrompt
                                command="find ./blogs -type f -name '*.md' | sort -r"
                                className="text-left mb-2"
                            />
                            <BlogPosts posts={posts} />
                        </CardContent>
                    </Card>

                    {/* Projects Preview - Medium */}
                    <Card className="md:col-span-3 bg-zinc-900/50 border border-zinc-800 overflow-hidden rounded-none hover:border-zinc-700 transition-all duration-300 shadow-md">
                        <CardContent className="p-3">
                            <AsciiDecorator position="top-right" />
                            <div className="flex justify-between items-center mb-3">
                                <TerminalPrompt
                                    command="find ./projects -type f -name '*.featured'"
                                    className="text-left"
                                />
                                <Link href="/projects">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="h-7 text-xs border-zinc-800 bg-zinc-900 text-zinc-200 hover:bg-zinc-800 hover:text-zinc-100 rounded-none"
                                    >
                                        All Projects
                                        <ExternalLink className="ml-1 h-3 w-3" />
                                    </Button>
                                </Link>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                {projects.slice(0, 2).map((project) => (
                                    <div
                                        key={project.title}
                                        className="group relative overflow-hidden border border-zinc-800 bg-zinc-900 hover:border-zinc-700 transition-all duration-300 rounded-none shadow-sm"
                                    >
                                        <div className=" w-full bg-zinc-950 relative">
                                            <Image
                                                src={
                                                    project.image ||
                                                    `/placeholder.svg`
                                                }
                                                alt={project.title}
                                                width={400}
                                                height={200}
                                                className="object-cover h-[200px] opacity-80 group-hover:opacity-100 transition-opacity"
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
                                                        project.status ===
                                                        "Active"
                                                            ? "text-green-400"
                                                            : project.status ===
                                                              "Completed"
                                                            ? "text-blue-400"
                                                            : "text-yellow-400"
                                                    }`}
                                                >
                                                    {project.status}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-2">
                                            <h3 className="font-bold text-zinc-100 text-sm">
                                                {project.title}
                                            </h3>
                                            <div className="flex flex-wrap gap-1 text-xs mt-1">
                                                {project.technologies
                                                    .slice(0, 2)
                                                    .map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="px-1.5 py-0.5 bg-zinc-800 text-zinc-300 rounded-none text-[10px]"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                {project.technologies.length >
                                                    2 && (
                                                    <span className="px-1.5 py-0.5 bg-zinc-800 text-zinc-300 rounded-none text-[10px]">
                                                        +
                                                        {project.technologies
                                                            .length - 2}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex gap-1 mt-2 text-[10px]">
                                                {project.repository && (
                                                    <Link
                                                        href={
                                                            project.repository
                                                        }
                                                        className="text-zinc-400 hover:text-zinc-200 flex items-center"
                                                    >
                                                        <Code className="h-3 w-3 mr-1" />
                                                        Source
                                                    </Link>
                                                )}
                                                {project.repository &&
                                                    project.link && (
                                                        <span className="text-zinc-600">
                                                            |
                                                        </span>
                                                    )}
                                                {project.link && (
                                                    <Link
                                                        href={project.link}
                                                        className="text-zinc-400 hover:text-zinc-200 flex items-center"
                                                    >
                                                        <ExternalLink className="h-3 w-3 mr-1" />
                                                        Demo
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Social Links - Full width but compact */}
                    <Card className="md:col-span-6 bg-zinc-900/50 border border-zinc-800 overflow-hidden rounded-none hover:border-zinc-700 transition-all duration-300 shadow-md">
                        <CardContent className="p-3">
                            <div className="text-center text-zinc-500 text-xs mb-2">
                                <pre className="inline-block">
                                    {`+-----------------------+
|     CONNECT WITH ME    |
+-----------------------+`}
                                </pre>
                            </div>
                            <TerminalPrompt
                                command="ssh-connect --social"
                                className="text-left mb-2"
                            />
                            <div className="flex justify-center gap-3">
                                <Link
                                    href={`https://github.com/${siteConfig.github_username}`}
                                    target="_blank"
                                    className="h-8 w-8 rounded-none border-zinc-800 bg-zinc-900 text-zinc-200 hover:bg-zinc-800 hover:text-zinc-100 hover:scale-105 transition-all border-[1px] flex items-center justify-center"
                                >
                                    <Github className="h-4 w-4" />
                                    <span className="sr-only">GitHub</span>
                                </Link>
                                <Link
                                    href={`https://twitter.com/${siteConfig.twitter_username}`}
                                    target="_blank"
                                    className="h-8 w-8 rounded-none border-zinc-800 bg-zinc-900 text-zinc-200 hover:bg-zinc-800 hover:text-zinc-100 hover:scale-105 transition-all border-[1px] flex items-center justify-center"
                                >
                                    <Twitter className="h-4 w-4" />
                                    <span className="sr-only">Twitter</span>
                                </Link>
                                <Link
                                    href={`https://linkedin.com/in/${siteConfig.linkedin_username}`}
                                    target="_blank"
                                    className="h-8 w-8 rounded-none border-zinc-800 bg-zinc-900 text-zinc-200 hover:bg-zinc-800 hover:text-zinc-100 hover:scale-105 transition-all border-[1px] flex items-center justify-center"
                                >
                                    <Linkedin className="h-4 w-4" />
                                    <span className="sr-only">LinkedIn</span>
                                </Link>
                                <Link
                                    href={`mailto:${siteConfig.email}`}
                                    target="_blank"
                                    className="h-8 w-8 rounded-none border-zinc-800 bg-zinc-900 text-zinc-200 hover:bg-zinc-800 hover:text-zinc-100 hover:scale-105 transition-all border-[1px] flex items-center justify-center"
                                >
                                    <Mail className="h-4 w-4" />
                                    <span className="sr-only">Email</span>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    );
}
