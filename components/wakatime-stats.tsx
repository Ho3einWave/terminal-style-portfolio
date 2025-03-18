"use client";

import { useState } from "react";
import { Clock, Coffee } from "lucide-react";
import { useWakatime } from "@/hooks/use-wakatime";

type StatTab = "languages" | "editors" | "os";

export default function WakaTimeStats() {
    const [activeTab, setActiveTab] = useState<StatTab>("languages");
    const { data: stats, isLoading } = useWakatime();

    // Display loading state when data is being fetched
    if (isLoading || !stats) {
        return (
            <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center p-1.5 px-3 gap-1 bg-zinc-800/50 border border-zinc-700 rounded-none">
                        <div className="mr-1">
                            <Clock className="h-4 w-4 text-zinc-300" />
                        </div>
                        <div>
                            <div className="text-xs text-zinc-400">Weekly</div>
                            <div className="text-sm font-bold text-zinc-200">
                                Loading...
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center p-1.5 px-3 gap-1 bg-zinc-800/50 border border-zinc-700 rounded-none">
                        <div className="mr-1">
                            <Coffee className="h-4 w-4 text-zinc-300" />
                        </div>
                        <div>
                            <div className="text-xs text-zinc-400">Daily</div>
                            <div className="text-sm font-bold text-zinc-200">
                                Loading...
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-zinc-800/50 border border-zinc-700 rounded-none">
                    <div className="flex text-[10px] border-b border-zinc-700">
                        <button className="px-2 py-1 bg-zinc-700 text-zinc-200">
                            --languages
                        </button>
                        <button className="px-2 py-1 bg-transparent text-zinc-400">
                            --editors
                        </button>
                        <button className="px-2 py-1 bg-transparent text-zinc-400">
                            --os
                        </button>
                    </div>
                    <div className="p-2 text-xs text-zinc-300">
                        Loading stats...
                    </div>
                </div>

                <div className="border border-zinc-700 bg-zinc-800/30 p-2 rounded-none">
                    <div className="text-xs text-zinc-300 mb-1">
                        Total Time Coded
                    </div>
                    <div className="font-mono text-sm font-bold text-zinc-200">
                        Loading...
                    </div>
                    <div className="text-[10px] text-zinc-500 mt-1">
                        since joining · 2021-05-12
                    </div>
                </div>
            </div>
        );
    }

    const renderTabContent = () => {
        switch (activeTab) {
            case "languages":
                return (
                    <>
                        <div className="text-xs text-zinc-300 mb-1 flex items-center">
                            <span className="mr-2">Top Languages</span>
                            <span className="text-zinc-500 text-[10px]">
                                [████████████████████]
                            </span>
                        </div>
                        <div className="space-y-1.5">
                            {stats.languages.map((lang) => (
                                <div
                                    key={lang.name}
                                    className="flex items-center text-xs"
                                >
                                    <div className="w-16 text-zinc-300 text-[10px]">
                                        {lang.name}
                                    </div>
                                    <div className="flex-1 h-1.5 bg-zinc-800 rounded-none overflow-hidden border border-zinc-700">
                                        <div
                                            className="h-full bg-zinc-400"
                                            style={{
                                                width: `${lang.percentage}%`,
                                            }}
                                        ></div>
                                    </div>
                                    <div className="w-8 text-right text-zinc-500 text-[10px]">
                                        {lang.percentage}%
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                );
            case "editors":
                return (
                    <>
                        <div className="text-xs text-zinc-300 mb-1 flex items-center">
                            <span className="mr-2">Top Editors</span>
                            <span className="text-zinc-500 text-[10px]">
                                [████████████████████]
                            </span>
                        </div>
                        <div className="space-y-1.5">
                            {stats.editors.map((editor) => (
                                <div
                                    key={editor.name}
                                    className="flex items-center text-xs"
                                >
                                    <div className="w-16 text-zinc-300 text-[10px]">
                                        {editor.name}
                                    </div>
                                    <div className="flex-1 h-1.5 bg-zinc-800 rounded-none overflow-hidden border border-zinc-700">
                                        <div
                                            className="h-full bg-zinc-400"
                                            style={{
                                                width: `${editor.percentage}%`,
                                            }}
                                        ></div>
                                    </div>
                                    <div className="w-8 text-right text-zinc-500 text-[10px]">
                                        {editor.percentage}%
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                );
            case "os":
                return (
                    <>
                        <div className="text-xs text-zinc-300 mb-1 flex items-center">
                            <span className="mr-2">Top OS</span>
                            <span className="text-zinc-500 text-[10px]">
                                [████████████████████]
                            </span>
                        </div>
                        <div className="space-y-1.5">
                            {stats.operatingSystems.map((os) => (
                                <div
                                    key={os.name}
                                    className="flex items-center text-xs"
                                >
                                    <div className="w-16 text-zinc-300 text-[10px]">
                                        {os.name}
                                    </div>
                                    <div className="flex-1 h-1.5 bg-zinc-800 rounded-none overflow-hidden border border-zinc-700">
                                        <div
                                            className="h-full bg-zinc-400"
                                            style={{
                                                width: `${os.percentage}%`,
                                            }}
                                        ></div>
                                    </div>
                                    <div className="w-8 text-right text-zinc-500 text-[10px]">
                                        {os.percentage}%
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="space-y-2">
            <div className="grid grid-cols-1 gap-2">
                <div className="flex items-center p-1.5 px-3 gap-1 bg-zinc-800/50 border border-zinc-700 rounded-none">
                    <div className="mr-1">
                        <Clock className="h-4 w-4 text-zinc-300" />
                    </div>
                    <div>
                        <div className="text-xs text-zinc-400">
                            Total Time Coded
                        </div>
                        <div className="text-sm font-bold text-zinc-200">
                            {stats.totalAllTime}
                        </div>
                    </div>
                </div>

                <div className="flex items-center p-1.5 px-3 gap-1 bg-zinc-800/50 border border-zinc-700 rounded-none">
                    <div className="mr-1">
                        <Coffee className="h-4 w-4 text-zinc-300" />
                    </div>
                    <div>
                        <div className="text-xs text-zinc-400">Daily</div>
                        <div className="text-sm font-bold text-zinc-200">
                            {stats.dailyAverage}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-zinc-800/50 border border-zinc-700 rounded-none">
                <div className="flex text-[10px] border-b border-zinc-700">
                    <button
                        className={`px-2 py-1 ${
                            activeTab === "languages"
                                ? "bg-zinc-700 text-zinc-200"
                                : "bg-transparent text-zinc-400 hover:text-zinc-300"
                        }`}
                        onClick={() => setActiveTab("languages")}
                    >
                        --languages
                    </button>
                    <button
                        className={`px-2 py-1 ${
                            activeTab === "editors"
                                ? "bg-zinc-700 text-zinc-200"
                                : "bg-transparent text-zinc-400 hover:text-zinc-300"
                        }`}
                        onClick={() => setActiveTab("editors")}
                    >
                        --editors
                    </button>
                    <button
                        className={`px-2 py-1 ${
                            activeTab === "os"
                                ? "bg-zinc-700 text-zinc-200"
                                : "bg-transparent text-zinc-400 hover:text-zinc-300"
                        }`}
                        onClick={() => setActiveTab("os")}
                    >
                        --os
                    </button>
                </div>
                <div className="p-2">{renderTabContent()}</div>
            </div>
            {/* <div className="border border-zinc-700 bg-zinc-800/30 p-2 rounded-none">
                <div className="text-xs text-zinc-300 mb-1">
                    Total Time Coded
                </div>
                <div className="font-mono text-sm font-bold text-zinc-200">
                    {stats.totalAllTime}
                </div>
                <div className="text-[10px] text-zinc-500 mt-1">
                    since joining · 2021-05-12
                </div>
            </div> */}
        </div>
    );
}
