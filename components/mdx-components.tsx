// components/mdx-components.tsx
import Image from "next/image";
import Link from "next/link";
import { MDXComponents } from "mdx/types";

// Optional: Create custom components
function CustomLink({
    href,
    children,
    ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    const isInternal = href && !href.startsWith("http");

    if (isInternal) {
        return (
            <Link href={href || "#"} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
            {children}
        </a>
    );
}

// Define your MDX components map
const components: MDXComponents = {
    // Override HTML elements with custom components
    a: CustomLink as any,

    pre: ({ children }) => <pre className="p-0">{children}</pre>,
};

export default components;
