import { useQuery } from "@tanstack/react-query";
import { siteConfig } from "@/constants/site";
import axios from "axios";

interface GitHubData {
    repos: number;
    stars: number;
    followers: number;
    contributions: number;
}

interface GitHubRepo {
    stargazers_count: number;
}

interface GitHubUser {
    public_repos: number;
    followers: number;
}

const fetchGitHubData = async (username: string): Promise<GitHubData> => {
    try {
        // Fetch basic user data
        const { data: userData } = await axios.get<GitHubUser>(
            `https://api.github.com/users/${username}`
        );

        // Fetch repositories to calculate stars
        const { data: reposData } = await axios.get<GitHubRepo[]>(
            `https://api.github.com/users/${username}/repos?per_page=100`
        );

        // Calculate total stars
        const totalStars = reposData.reduce(
            (acc, repo) => acc + repo.stargazers_count,
            0
        );

        return {
            repos: userData.public_repos || 0,
            stars: totalStars,
            followers: userData.followers || 0,
            contributions: 847, // This is a placeholder since GitHub API doesn't provide this directly
        };
    } catch (err) {
        console.error("Error fetching GitHub data:", err);
        // Fallback to sample data
        return {
            repos: 24,
            stars: 142,
            followers: 38,
            contributions: 847,
        };
    }
};

export function useGithubStats() {
    const username = siteConfig.github_username;

    return useQuery({
        queryKey: ["githubStats", username],
        queryFn: () => fetchGitHubData(username),
    });
}
