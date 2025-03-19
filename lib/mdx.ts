// lib/mdx.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import readingTime, { ReadTimeResults } from "reading-time";
import { JSXElementConstructor, ReactElement } from "react";
import mdxComponents from "@/components/mdx-components";
const contentDirectory = path.join(process.cwd(), "content/blog");

export type Frontmatter = {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    tags: string[];
    readingTime?: ReadTimeResults;
};

export type Post = {
    content: ReactElement<unknown, string | JSXElementConstructor<any>>;
    frontmatter: Frontmatter;
};
export async function getPostBySlug(slug: string): Promise<Post> {
    const filePath = path.join(contentDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, "utf8");

    const { content, data } = matter(fileContents);

    const mdxSource = await compileMDX({
        source: content,
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeSlug, rehypeHighlight],
            },
        },
        components: mdxComponents,
    });

    const readingTimeStats = readingTime(content);
    const frontmatter: Frontmatter = {
        ...(data as Frontmatter),
        readingTime: readingTimeStats,
        slug: data.slug || slug,
    };

    return {
        content: mdxSource.content,
        frontmatter,
    };
}

export async function getAllPosts(): Promise<Frontmatter[]> {
    const files = fs.readdirSync(contentDirectory);

    const posts = await Promise.all(
        files
            .filter((file) => path.extname(file) === ".mdx")
            .map(async (file) => {
                const slug = file.replace(/\.mdx$/, "");
                const { frontmatter } = await getPostBySlug(slug);
                return frontmatter;
            })
    );

    return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getLatestPosts() {
    const posts = await getAllPosts();
    return posts.slice(0, 3);
}

export async function isPostExists(slug: string) {
    const filePath = path.join(contentDirectory, `${slug}.mdx`);
    return fs.existsSync(filePath);
}
