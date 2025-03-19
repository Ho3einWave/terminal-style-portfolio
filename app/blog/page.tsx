import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TerminalPrompt from "@/components/terminal-prompt";
import AsciiDecorator from "@/components/ascii-decorator";
import { getAllPosts } from "@/lib/mdx";

export default async function BlogPage() {
    const blogPosts = await getAllPosts();

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
                            cd ../
                        </Button>
                    </Link>
                    <h1 className="text-xl font-bold mt-3 text-zinc-100">
                        ./blog<span className="animate-pulse">_</span>
                    </h1>
                    <TerminalPrompt
                        command="find ./blog -name '*.md' | sort -r"
                        className="mt-2"
                    />
                </div>

                <div className="text-center mb-4 text-zinc-600 hidden md:block">
                    <pre className="text-xs leading-tight">
                        {`
+----------------------------------------------------------------------+
|                                                                      |
|                           BLOG POSTS                                 |
|                                                                      |
+----------------------------------------------------------------------+
`}
                    </pre>
                </div>

                <div className="space-y-4">
                    {blogPosts.map((post) => (
                        <Card
                            key={post.slug}
                            className="border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300 rounded-none shadow-sm relative overflow-hidden"
                        >
                            <AsciiDecorator position="top-right" />
                            <CardContent className="p-4">
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="block"
                                >
                                    <h2 className="text-lg font-bold text-zinc-100 hover:text-zinc-300 transition-colors">
                                        {post.title}
                                    </h2>
                                </Link>

                                <div className="flex items-center gap-3 mt-2 mb-3 text-xs text-zinc-500">
                                    <div className="flex items-center">
                                        <Calendar className="h-3 w-3 mr-1" />
                                        <span>
                                            {new Date(
                                                post.date ?? ""
                                            ).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric",
                                            })}
                                        </span>
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="h-3 w-3 mr-1" />
                                        <span>{post.readingTime?.text}</span>
                                    </div>
                                </div>

                                <p className="text-sm text-zinc-400 mb-3">
                                    {post.excerpt}
                                </p>

                                <div className="flex flex-wrap gap-1 mb-2">
                                    {post.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="flex items-center px-1.5 py-0.5 bg-zinc-800 rounded-none text-[10px] text-zinc-300 border border-zinc-700"
                                        >
                                            <Tag className="h-2 w-2 mr-1" />
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="text-xs text-zinc-300 hover:text-zinc-100 inline-flex items-center mt-2"
                                >
                                    Read more →
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </main>
    );
}
