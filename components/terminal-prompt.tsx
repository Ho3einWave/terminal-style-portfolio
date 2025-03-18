interface TerminalPromptProps {
  command: string
  className?: string
}

export default function TerminalPrompt({ command, className = "" }: TerminalPromptProps) {
  return (
    <div className={`flex items-center text-xs ${className}`}>
      <span className="text-zinc-500 mr-1">$</span>
      <span className="text-zinc-300 font-medium">{command}</span>
      <span className="animate-pulse ml-1 text-zinc-300">_</span>
    </div>
  )
}

