import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Github, ExternalLink, Code } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import TerminalPrompt from "@/components/terminal-prompt"
import AsciiDecorator from "@/components/ascii-decorator"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Project_One",
      description: "A full-stack application built with Next.js and TypeScript.",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      image: "/placeholder.svg?height=300&width=600",
      sourceUrl: "https://github.com/johndoe/project-one",
      demoUrl: "https://project-one.vercel.app",
    },
    {
      id: 2,
      title: "Project_Two",
      description: "An e-commerce platform with payment integration.",
      tags: ["React", "Node.js", "Stripe"],
      image: "/placeholder.svg?height=300&width=600",
      sourceUrl: "https://github.com/johndoe/project-two",
      demoUrl: "https://project-two.vercel.app",
    },
    {
      id: 3,
      title: "Project_Three",
      description: "A real-time chat application with WebSockets.",
      tags: ["Socket.io", "Express", "MongoDB"],
      image: "/placeholder.svg?height=300&width=600",
      sourceUrl: "https://github.com/johndoe/project-three",
      demoUrl: "https://project-three.vercel.app",
    },
    {
      id: 4,
      title: "Project_Four",
      description: "A mobile-first design system for rapid prototyping.",
      tags: ["Figma", "Storybook", "React"],
      image: "/placeholder.svg?height=300&width=600",
      sourceUrl: "https://github.com/johndoe/project-four",
      demoUrl: "https://project-four.vercel.app",
    },
    {
      id: 5,
      title: "Project_Five",
      description: "An AI-powered content recommendation engine.",
      tags: ["Python", "TensorFlow", "Next.js"],
      image: "/placeholder.svg?height=300&width=600",
      sourceUrl: "https://github.com/johndoe/project-five",
      demoUrl: "https://project-five.vercel.app",
    },
    {
      id: 6,
      title: "Project_Six",
      description: "A blockchain-based voting system for secure elections.",
      tags: ["Solidity", "Ethereum", "Web3.js"],
      image: "/placeholder.svg?height=300&width=600",
      sourceUrl: "https://github.com/johndoe/project-six",
      demoUrl: "https://project-six.vercel.app",
    },
  ]

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
              cd ..
            </Button>
          </Link>
          <h1 className="text-xl font-bold mt-3 text-zinc-100">
            ./projects<span className="animate-pulse">_</span>
          </h1>
          <TerminalPrompt command="find . -name '*.project' | sort" className="mt-2 justify-center" />
        </div>

        <div className="text-center mb-4 text-zinc-600 hidden md:block">
          <pre className="text-xs leading-tight">
            {`
+----------------------------------------------------------------------+
|                                                                      |
|                        PROJECT REPOSITORY                            |
|                                                                      |
+----------------------------------------------------------------------+
`}
          </pre>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300 rounded-none shadow-sm relative"
            >
              <AsciiDecorator position="top-right" />
              <div className="aspect-video w-full bg-zinc-950 relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute top-0 right-0 bg-zinc-900/80 p-1">
                  <Github className="h-3 w-3 text-zinc-400" />
                </div>
              </div>
              <CardContent className="p-3">
                <h2 className="font-medium text-zinc-100 text-sm">{project.title}</h2>
                <p className="text-xs text-zinc-400 mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-1.5 py-0.5 bg-zinc-800 rounded-none text-[10px] text-zinc-300 border border-zinc-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Link href={project.sourceUrl} target="_blank">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-7 text-xs border-zinc-700 bg-zinc-900 text-zinc-200 hover:bg-zinc-800 hover:text-zinc-100 rounded-none"
                    >
                      <Code className="mr-1 h-3 w-3" />
                      Source
                    </Button>
                  </Link>
                  <Link href={project.demoUrl} target="_blank">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-7 text-xs border-zinc-700 bg-zinc-900 text-zinc-200 hover:bg-zinc-800 hover:text-zinc-100 rounded-none"
                    >
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Demo
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}

