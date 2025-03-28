import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { Frontmatter, getLatestPosts } from "@/lib/mdx";

type BlogPostProps = {
    posts: Frontmatter[];
};

export default async function BlogPosts({ posts }: BlogPostProps) {
    return (
        <div className="space-y-2">
            {posts.map((post, index) => (
                <Link
                    href={`/blog/${post.slug}`}
                    key={post.slug}
                    className="block border border-zinc-800 bg-zinc-800/50 p-2 rounded-none text-left hover:border-zinc-700 transition-all duration-300 relative"
                >
                    <div className="absolute top-0 left-0 text-zinc-700 text-[8px]">
                        <pre>{`+--`}</pre>
                    </div>
                    <div className="absolute bottom-0 right-0 text-zinc-700 text-[8px]">
                        <pre>{`--+`}</pre>
                    </div>
                    <h3 className="text-sm font-medium text-zinc-200">
                        {post.title}
                    </h3>
                    <div className="flex items-center mt-1 mb-1">
                        <Calendar className="h-3 w-3 text-zinc-500 mr-1" />
                        <span className="text-[10px] text-zinc-500">
                            {new Date(post.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                            })}
                        </span>
                    </div>
                    <p className="text-xs text-zinc-400 mb-2 line-clamp-1">
                        {post.excerpt}
                    </p>
                    <div className="flex gap-1">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-[10px] px-1.5 py-0.5 bg-zinc-800 text-zinc-300 rounded-none border border-zinc-700"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </Link>
            ))}
            <div className="text-center mt-2">
                <Link
                    href="/blog"
                    className="text-xs text-zinc-300 hover:text-zinc-100 inline-flex items-center transition-colors"
                >
                    View all posts
                    <ArrowRight className="h-3 w-3 ml-1" />
                </Link>
            </div>
        </div>
    );
}
