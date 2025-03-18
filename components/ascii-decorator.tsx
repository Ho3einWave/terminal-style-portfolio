interface AsciiDecoratorProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  type?: "corner" | "dots" | "lines"
}

export default function AsciiDecorator({ position = "top-right", type = "corner" }: AsciiDecoratorProps) {
  const getPositionClasses = () => {
    switch (position) {
      case "top-left":
        return "top-1 left-1"
      case "top-right":
        return "top-1 right-1"
      case "bottom-left":
        return "bottom-1 left-1"
      case "bottom-right":
        return "bottom-1 right-1"
      default:
        return "top-1 right-1"
    }
  }

  const getAsciiArt = () => {
    switch (type) {
      case "corner":
        return position.includes("right") ? "+--+\n|  |\n+--+" : "+--+\n|  |\n+--+"
      case "dots":
        return ":::\n:::\n:::"
      case "lines":
        return "///\n///\n///"
      default:
        return "+--+\n|  |\n+--+"
    }
  }

  return (
    <div className={`absolute ${getPositionClasses()} text-zinc-700 text-[8px] leading-none z-10 pointer-events-none`}>
      <pre>{getAsciiArt()}</pre>
    </div>
  )
}

