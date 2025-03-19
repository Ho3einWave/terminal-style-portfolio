import Link from "next/link";
import { notFound } from "next/navigation";
import {
    ArrowLeft,
    Calendar,
    Clock,
    Tag,
    Github,
    Twitter,
    LinkIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TerminalPrompt from "@/components/terminal-prompt";
import { getAllPosts, Post, getPostBySlug } from "@/lib/mdx";
import CopyLinkButton from "@/components/CopyLinkButton";
import { siteConfig } from "@/constants/site";
interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}) {
    const { slug } = await params;
    const { frontmatter } = await getPostBySlug(slug);

    return {
        title: `${frontmatter.title} | Hosein's Blog`,
        description: frontmatter.excerpt || "",
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const { content, frontmatter } = await getPostBySlug(slug);

    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-200 p-3 font-mono">
            <div className="mx-auto max-w-5xl">
                <div className="mb-4">
                    <Link href="/blog">
                        <Button
                            variant="outline"
                            className="text-xs border-zinc-800 bg-zinc-900 text-zinc-200 hover:bg-zinc-800 hover:text-zinc-100 rounded-none"
                        >
                            <ArrowLeft className="mr-1 h-3 w-3" />
                            cd ../
                        </Button>
                    </Link>
                    <h1 className="text-xl font-bold mt-3 text-zinc-100">
                        ./blog/{slug}
                        <span className="animate-pulse">_</span>
                    </h1>
                    <TerminalPrompt
                        command={`cat ./blog/${slug}.md`}
                        className="mt-2"
                    />
                </div>

                <Card className="border border-zinc-800 bg-zinc-900/50 rounded-none shadow-sm overflow-hidden">
                    <CardContent className="p-4">
                        <div className="mb-6">
                            <h1 className="text-2xl font-bold text-zinc-100 mb-3">
                                {frontmatter.title}
                            </h1>

                            <div className="flex items-center gap-3 mb-4 text-xs text-zinc-500">
                                <div className="flex items-center">
                                    <Calendar className="h-3 w-3 mr-1" />
                                    <span>
                                        {new Date(
                                            frontmatter.date
                                        ).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                        })}
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <Clock className="h-3 w-3 mr-1" />
                                    <span>{frontmatter.readingTime?.text}</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-1 mb-4">
                                {frontmatter.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="flex items-center px-1.5 py-0.5 bg-zinc-800 rounded-none text-[10px] text-zinc-300 border border-zinc-700"
                                    >
                                        <Tag className="h-2 w-2 mr-1" />
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="border-y border-zinc-800 py-4">
                                <p className="text-sm text-zinc-300 italic">
                                    {frontmatter.excerpt}
                                </p>
                            </div>
                        </div>

                        <article className="prose prose-invert prose-sm max-w-none">
                            {content}
                        </article>

                        <div className="mt-8 pt-4 border-t border-zinc-800">
                            <div className="text-sm text-zinc-400 mb-3">
                                Share this post:
                            </div>
                            <div className="flex gap-2">
                                <Link
                                    href={`https://twitter.com/intent/tweet?url=${siteConfig.url}/blog/${slug}&text=${frontmatter.title}`}
                                    target="_blank"
                                    className="h-8 text-xs border-[1px] border-zinc-700 bg-zinc-800/50 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 rounded-none flex items-center justify-center px-2"
                                >
                                    <Twitter className="h-3 w-3 mr-1" />
                                    Twitter
                                </Link>
                                <Link
                                    href={`https://github.com/intent/tweet?url=${siteConfig.url}/blog/${slug}&text=${frontmatter.title}`}
                                    target="_blank"
                                    className="h-8 text-xs border-[1px] border-zinc-700 bg-zinc-800/50 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 rounded-none flex items-center justify-center px-2"
                                >
                                    <Github className="h-3 w-3 mr-1" />
                                    GitHub
                                </Link>
                                <CopyLinkButton />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}
