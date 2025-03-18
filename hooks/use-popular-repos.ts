import { useQuery } from "@tanstack/react-query";
import { siteConfig } from "@/constants/site";
import axios from "axios";

export interface Repository {
    name: string;
    description: string;
    stars: number;
    forks: number;
    watchers: number;
    language: string;
    url: string;
}

interface GitHubRepo {
    name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    watchers_count: number;
    language: string;
    html_url: string;
}

const fetchPopularRepos = async (username: string): Promise<Repository[]> => {
    try {
        // Fetch user repositories
        const { data: reposData } = await axios.get<GitHubRepo[]>(
            `https://api.github.com/users/${username}/repos?sort=stars&per_page=100`
        );

        // Map and sort by stars
        const mappedRepos = reposData
            .map((repo) => ({
                name: repo.name,
                description: repo.description || "No description available",
                stars: repo.stargazers_count,
                forks: repo.forks_count,
                watchers: repo.watchers_count,
                language: repo.language || "Unknown",
                url: repo.html_url,
            }))
            .sort((a, b) => b.stars - a.stars)
            .slice(0, 4); // Get only the top 4

        return mappedRepos;
    } catch (err) {
        console.error("Error fetching popular repositories:", err);
        // Fallback data in case of API error
        return [
            {
                name: "next-portfolio-template",
                description:
                    "A modern portfolio template built with Next.js and Tailwind CSS",
                stars: 342,
                forks: 87,
                watchers: 15,
                language: "TypeScript",
                url: `https://github.com/${username}/next-portfolio-template`,
            },
            {
                name: "react-component-library",
                description:
                    "A collection of reusable React components with TypeScript support",
                stars: 256,
                forks: 42,
                watchers: 12,
                language: "TypeScript",
                url: `https://github.com/${username}/react-component-library`,
            },
            {
                name: "node-api-starter",
                description:
                    "A starter template for Node.js APIs with Express and TypeScript",
                stars: 189,
                forks: 35,
                watchers: 8,
                language: "JavaScript",
                url: `https://github.com/${username}/node-api-starter`,
            },
            {
                name: "tailwind-ui-components",
                description: "Custom UI components built with Tailwind CSS",
                stars: 145,
                forks: 28,
                watchers: 6,
                language: "CSS",
                url: `https://github.com/${username}/tailwind-ui-components`,
            },
        ];
    }
};

export function usePopularRepos() {
    const username = siteConfig.github_username;

    return useQuery({
        queryKey: ["popularRepos", username],
        queryFn: () => fetchPopularRepos(username),
    });
}
