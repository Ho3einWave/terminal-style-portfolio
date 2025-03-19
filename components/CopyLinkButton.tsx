"use client";

import { useState } from "react";
import { LinkIcon, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CopyLinkButton() {
    const [copied, setCopied] = useState(false);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Button
            variant="outline"
            size="sm"
            className="h-8 text-xs border-zinc-700 bg-zinc-800/50 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 rounded-none"
            onClick={handleCopyLink}
        >
            {copied ? (
                <>
                    <Check className="h-3 w-3 mr-1" />
                    Copied!
                </>
            ) : (
                <>
                    <LinkIcon className="h-3 w-3 mr-1" />
                    Copy Link
                </>
            )}
        </Button>
    );
}
