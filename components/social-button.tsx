"use client";

import { useState } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const icons = {
    github: Github,
    twitter: Twitter,
    linkedin: Linkedin,
    mail: Mail,
};

interface SocialButtonProps {
    icon: "github" | "twitter" | "linkedin" | "mail";
    href: string;
    label: string;
    command: string;
}

export default function SocialButton({
    icon,
    href,
    label,
    command,
}: SocialButtonProps) {
    const [isHovered, setIsHovered] = useState(false);
    const Icon = icons[icon];

    return (
        <Link
            href={href}
            target="_blank"
            className="relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="social-button border border-zinc-700 bg-zinc-800/50 hover:bg-zinc-800 hover:border-zinc-600 transition-all duration-300 p-2 flex flex-col items-center justify-center rounded-none h-full">
                <Icon className="h-4 w-4 text-zinc-300 mb-1" />
                <span className="text-[10px] text-zinc-400">{label}</span>

                {/* Terminal command overlay */}
                <div
                    className={`absolute inset-0 bg-zinc-900/90 flex items-center justify-center transition-all duration-300 ${
                        isHovered ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <div className="text-center">
                        <div className="text-[10px] text-zinc-400 mb-1">
                            $ {command}
                        </div>
                        <div className="text-[8px] text-green-400 flex items-center justify-center">
                            <span className="animate-pulse mr-1">▋</span>
                            <span>connecting...</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
