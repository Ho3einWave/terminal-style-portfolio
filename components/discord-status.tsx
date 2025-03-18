"use client"

import { useState, useEffect } from "react"
import { Music, Code, Clock } from "lucide-react"

type Status = "online" | "idle" | "dnd" | "offline"
type Activity = "coding" | "listening" | "none"

export default function DiscordStatus() {
  const [status, setStatus] = useState<Status>("online")
  const [activity, setActivity] = useState<Activity>("coding")
  const [activityDetails, setActivityDetails] = useState({
    title: "VS Code",
    subtitle: "Working on portfolio",
    timeElapsed: "2h 34m",
  })

  // Simulate status changes
  useEffect(() => {
    const interval = setInterval(() => {
      const statuses: Status[] = ["online", "idle", "dnd", "offline"]
      const activities: Activity[] = ["coding", "listening", "none"]

      setStatus(statuses[Math.floor(Math.random() * statuses.length)])
      setActivity(activities[Math.floor(Math.random() * activities.length)])

      if (activity === "coding") {
        setActivityDetails({
          title: "VS Code",
          subtitle: "Working on portfolio",
          timeElapsed: `${Math.floor(Math.random() * 4)}h ${Math.floor(Math.random() * 60)}m`,
        })
      } else if (activity === "listening") {
        setActivityDetails({
          title: "Spotify",
          subtitle: "Lo-fi beats",
          timeElapsed: `${Math.floor(Math.random() * 60)}m`,
        })
      }
    }, 10000) // Change every 10 seconds for demo

    return () => clearInterval(interval)
  }, [activity])

  const getStatusColor = () => {
    switch (status) {
      case "online":
        return "bg-green-500"
      case "idle":
        return "bg-yellow-500"
      case "dnd":
        return "bg-red-500"
      case "offline":
        return "bg-gray-500"
    }
  }

  const getActivityIcon = () => {
    switch (activity) {
      case "coding":
        return <Code className="h-4 w-4" />
      case "listening":
        return <Music className="h-4 w-4" />
      default:
        return null
    }
  }

  return (
    <div className="font-mono">
      <div className="flex items-center mb-4">
        <div className={`h-3 w-3 rounded-full ${getStatusColor()} mr-2`}></div>
        <span className="text-sm capitalize">{status}</span>
      </div>

      {activity !== "none" && (
        <div className="bg-gray-50 p-3 rounded-md">
          <div className="flex items-center mb-2">
            {getActivityIcon()}
            <span className="text-xs ml-2">{activityDetails.title}</span>
          </div>
          <div className="text-xs text-gray-600 mb-1">{activityDetails.subtitle}</div>
          <div className="flex items-center text-xs text-gray-500">
            <Clock className="h-3 w-3 mr-1" />
            <span>{activityDetails.timeElapsed}</span>
          </div>
        </div>
      )}
    </div>
  )
}

