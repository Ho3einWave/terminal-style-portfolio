"use client"

import { useState } from "react"
import Link from "next/link"
import { Star, GitFork, ExternalLink } from "lucide-react"

export default function PopularRepos() {
  const [repos] = useState([
    {
      name: "next-portfolio-template",
      description: "A modern portfolio template built with Next.js and Tailwind CSS",
      stars: 342,
      forks: 87,
      watchers: 15,
      language: "TypeScript",
      url: "https://github.com/johndoe/next-portfolio-template",
    },
    {
      name: "react-component-library",
      description: "A collection of reusable React components with TypeScript support",
      stars: 256,
      forks: 42,
      watchers: 12,
      language: "TypeScript",
      url: "https://github.com/johndoe/react-component-library",
    },
    {
      name: "node-api-starter",
      description: "A starter template for Node.js APIs with Express and TypeScript",
      stars: 189,
      forks: 35,
      watchers: 8,
      language: "JavaScript",
      url: "https://github.com/johndoe/node-api-starter",
    },
    {
      name: "tailwind-ui-components",
      description: "Custom UI components built with Tailwind CSS",
      stars: 145,
      forks: 28,
      watchers: 6,
      language: "CSS",
      url: "https://github.com/johndoe/tailwind-ui-components",
    },
  ])

  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      TypeScript: "bg-blue-500",
      JavaScript: "bg-yellow-400",
      CSS: "bg-purple-500",
      HTML: "bg-orange-500",
      Python: "bg-green-500",
    }
    return colors[language] || "bg-gray-500"
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
            <h3 className="font-medium text-zinc-100 text-sm truncate">{repo.name}</h3>
            <Link href={repo.url} target="_blank" className="text-zinc-400 hover:text-zinc-200 transition-colors">
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>

          <p className="text-xs text-zinc-400 mt-1 mb-2 line-clamp-2 h-8">{repo.description}</p>

          <div className="flex items-center gap-3 text-xs text-zinc-400">
            <div className="flex items-center">
              <div className={`h-2 w-2 ${getLanguageColor(repo.language)} mr-1`}></div>
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
  )
}

