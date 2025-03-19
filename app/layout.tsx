import type { Metadata } from "next";
import "./globals.css";
import "highlight.js/styles/github-dark-dimmed.min.css";
import { QueryProvider } from "@/components/providers/query-provider";

export const metadata: Metadata = {
    title: "Hosein Baseri | Front-End Developer",
    description:
        "Hi I'm Hosein Baseri, a front-end engineer based in Shiraz, Iran. Specializing in MERN stack development, I create robust web applications. With a fusion of technical expertise and design sensibilities, I craft visually stunning interfaces for exceptional user experiences.  ",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <QueryProvider>{children}</QueryProvider>
            </body>
        </html>
    );
}
