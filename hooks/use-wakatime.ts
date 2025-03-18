import { httpClient } from "@/lib/httpClient";
import { Wakatime } from "@/types/wakatime";
import { useQuery } from "@tanstack/react-query";

export const useWakatime = () => {
    return useQuery({
        queryKey: ["wakatime"],
        queryFn: async () => {
            const response = await fetchWakatimeData();
            const wakatimestats = {
                languages: processTopItems(response.data.languages),
                editors: processTopItems(response.data.editors),
                operatingSystems: processTopItems(
                    response.data.operating_systems
                ),
                dailyAverage: response.data.human_readable_daily_average,
                totalAllTime: formatTotalTime(response.data.total_seconds),
            };
            return wakatimestats;
        },
    });
};

const processTopItems = (items: any[]) => {
    // Filter out any existing "Other" item
    const filteredItems = items.filter((item) => item.name !== "Other");

    if (filteredItems.length <= 5)
        return filteredItems.map((item) => ({
            name: item.name,
            percentage: Math.round(item.percent),
        }));

    const topItems = filteredItems.slice(0, 4).map((item) => ({
        name: item.name,
        percentage: Math.round(item.percent),
    }));

    const othersPercentage = Math.round(
        filteredItems.slice(4).reduce((sum, item) => sum + item.percent, 0)
    );

    if (othersPercentage > 0) {
        topItems.push({
            name: "Others",
            percentage: othersPercentage,
        });
    }

    return topItems;
};

const fetchWakatimeData = async () => {
    const response = await httpClient.get<Wakatime>("/wakatime/stats");
    return response.data;
};

// Helper function to format total time in the format "1,247h 15m"
const formatTotalTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    // Format hours with comma separators
    const formattedHours = hours
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return `${formattedHours}h ${minutes}m`;
};
