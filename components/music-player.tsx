"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import {
    Play,
    Pause,
    SkipBack,
    SkipForward,
    Volume2,
    VolumeX,
    Music,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(0);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [volume, setVolume] = useState(0.7);
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const playlist = [
        {
            title: "Ali Sorena - Nemitarsam",
            artist: "Ali Sorena",
            duration: "4:12",
            src: "https://cdn.musicgitar.ir/Music/Ali%20Sorena/320/Ali%20Sorena%20-%20Nemitarsam%20[320].mp3",
        },
        {
            title: "Lofi Study Beat",
            artist: "ChillHop",
            duration: "3:45",
            src: "https://dl.dropboxusercontent.com/s/e93f89ggbvcboil/lofi-study-beat.mp3",
        },
        {
            title: "Ambient Coding",
            artist: "CodeBeats",
            duration: "4:20",
            src: "https://dl.dropboxusercontent.com/s/e93f89ggbvcboil/lofi-study-beat.mp3",
        },
        {
            title: "Synthwave Night",
            artist: "RetroWave",
            duration: "3:15",
            src: "https://dl.dropboxusercontent.com/s/e93f89ggbvcboil/lofi-study-beat.mp3",
        },
        {
            title: "Deep Focus",
            artist: "BrainFM",
            duration: "5:30",
            src: "https://dl.dropboxusercontent.com/s/e93f89ggbvcboil/lofi-study-beat.mp3",
        },
        {
            title: "Jazz Coding Session",
            artist: "DevJazz",
            duration: "4:45",
            src: "https://dl.dropboxusercontent.com/s/e93f89ggbvcboil/lofi-study-beat.mp3",
        },
    ];

    useEffect(() => {
        if (audioRef.current) {
            const audio = audioRef.current;

            const handleTimeUpdate = () => {
                if (audio.duration) {
                    setProgress((audio.currentTime / audio.duration) * 100);
                    setCurrentTime(audio.currentTime);
                }
            };

            const handleLoadedMetadata = () => {
                setDuration(audio.duration);
            };

            const handleEnded = () => {
                nextTrack();
            };

            audio.addEventListener("timeupdate", handleTimeUpdate);
            audio.addEventListener("loadedmetadata", handleLoadedMetadata);
            audio.addEventListener("ended", handleEnded);

            // Set initial volume
            audio.volume = volume;

            return () => {
                audio.removeEventListener("timeupdate", handleTimeUpdate);
                audio.removeEventListener(
                    "loadedmetadata",
                    handleLoadedMetadata
                );
                audio.removeEventListener("ended", handleEnded);
            };
        }
    }, [currentTrack]);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch((e) => {
                    console.log("Audio playback failed:", e);
                });
            }
            setIsPlaying(!isPlaying);
        }
    };

    const nextTrack = () => {
        setCurrentTrack((prev) => (prev + 1) % playlist.length);
        setProgress(0);
        setCurrentTime(0);
        if (isPlaying && audioRef.current) {
            setTimeout(() => {
                audioRef.current
                    ?.play()
                    .catch((e) => console.log("Audio playback failed:", e));
            }, 100);
        }
    };

    const prevTrack = () => {
        setCurrentTrack((prev) =>
            prev === 0 ? playlist.length - 1 : prev - 1
        );
        setProgress(0);
        setCurrentTime(0);
        if (isPlaying && audioRef.current) {
            setTimeout(() => {
                audioRef.current
                    ?.play()
                    .catch((e) => console.log("Audio playback failed:", e));
            }, 100);
        }
    };

    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (audioRef.current) {
            const progressBar = e.currentTarget;
            const rect = progressBar.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            audioRef.current.currentTime = pos * audioRef.current.duration;
        }
    };

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    // ASCII visualization
    const getVisualization = () => {
        if (!isPlaying) return "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁";

        const chars = "▁▂▃▄▅▆▇█";
        let result = "";

        for (let i = 0; i < 16; i++) {
            const randomIndex = isPlaying
                ? Math.floor(
                      Math.random() * (chars.length - (i % 3 === 0 ? 3 : 5))
                  )
                : 0;
            result += chars[randomIndex];
        }

        return result;
    };

    return (
        <div className="space-y-2">
            <div className="border border-zinc-700 bg-zinc-800/30 p-2 rounded-none">
                <div className="flex justify-between items-center mb-1">
                    <div className="text-xs text-zinc-300 font-medium truncate">
                        {playlist[currentTrack].title}
                    </div>
                    <div className="text-[10px] text-zinc-500">
                        {formatTime(currentTime)} /{" "}
                        {formatTime(duration) ||
                            playlist[currentTrack].duration}
                    </div>
                </div>
                <div className="text-[10px] text-zinc-400 mb-2">
                    {playlist[currentTrack].artist}
                </div>

                <div className="h-4 font-mono text-[10px] text-zinc-500 mb-1 overflow-hidden">
                    {getVisualization()}
                </div>

                <div
                    className="w-full h-1 bg-zinc-800 rounded-none mb-2 overflow-hidden cursor-pointer"
                    onClick={handleProgressClick}
                >
                    <div
                        className="h-full bg-zinc-500"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 rounded-none hover:bg-zinc-800"
                            onClick={prevTrack}
                        >
                            <SkipBack className="h-3 w-3 text-zinc-400" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 rounded-none hover:bg-zinc-800"
                            onClick={togglePlay}
                        >
                            {isPlaying ? (
                                <Pause className="h-3 w-3 text-zinc-200" />
                            ) : (
                                <Play className="h-3 w-3 text-zinc-200" />
                            )}
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 rounded-none hover:bg-zinc-800"
                            onClick={nextTrack}
                        >
                            <SkipForward className="h-3 w-3 text-zinc-400" />
                        </Button>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 rounded-none hover:bg-zinc-800"
                        onClick={toggleMute}
                    >
                        {isMuted ? (
                            <VolumeX className="h-3 w-3 text-zinc-500" />
                        ) : (
                            <Volume2 className="h-3 w-3 text-zinc-500" />
                        )}
                    </Button>
                </div>
            </div>

            <div className="text-[10px] text-zinc-500">
                <div className="border border-zinc-700 bg-zinc-800/30 p-1 rounded-none">
                    <div className="flex justify-between items-center">
                        <span>Playlist</span>
                        <span>{playlist.length} tracks</span>
                    </div>
                </div>
                <div className="mt-1 space-y-1 max-h-[100px] overflow-y-auto custom-scrollbar">
                    {playlist.map((track, index) => (
                        <div
                            key={index}
                            className={`flex justify-between items-center p-1 cursor-pointer hover:bg-zinc-800/30 ${
                                currentTrack === index
                                    ? "bg-zinc-800/50 border-l border-zinc-600"
                                    : ""
                            }`}
                            onClick={() => {
                                setCurrentTrack(index);
                                setProgress(0);
                                setCurrentTime(0);
                                if (isPlaying) {
                                    setTimeout(() => {
                                        audioRef.current
                                            ?.play()
                                            .catch((e) =>
                                                console.log(
                                                    "Audio playback failed:",
                                                    e
                                                )
                                            );
                                    }, 100);
                                }
                            }}
                        >
                            <div className="flex items-center">
                                <Music className="h-2 w-2 mr-1 text-zinc-500" />
                                <span className="truncate max-w-[120px]">
                                    {track.title}
                                </span>
                            </div>
                            <span>{track.duration}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Hidden audio element */}
            <audio
                ref={audioRef}
                src={playlist[currentTrack].src}
                preload="metadata"
                className="hidden"
            />
        </div>
    );
}
