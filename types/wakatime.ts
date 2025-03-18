export interface Wakatime {
    data: Data;
}

export interface Data {
    id: string;
    user_id: string;
    range: string;
    timeout: number;
    writes_only: boolean;
    holidays: number;
    status: string;
    total_seconds_including_other_language: number;
    languages: Category[];
    categories: Category[];
    human_readable_total_including_other_language: string;
    editors: Category[];
    is_already_updating: boolean;
    days_including_holidays: number;
    daily_average: number;
    is_up_to_date_pending_future: boolean;
    percent_calculated: number;
    human_readable_daily_average_including_other_language: string;
    human_readable_daily_average: string;
    total_seconds: number;
    is_up_to_date: boolean;
    daily_average_including_other_language: number;
    human_readable_total: string;
    is_stuck: boolean;
    days_minus_holidays: number;
    operating_systems: Category[];
    is_cached: boolean;
    username: string;
    is_including_today: boolean;
    human_readable_range: string;
    is_coding_activity_visible: boolean;
    is_language_usage_visible: boolean;
    is_editor_usage_visible: boolean;
    is_category_usage_visible: boolean;
    is_os_usage_visible: boolean;
}

export interface Category {
    name: string;
    total_seconds: number;
    percent: number;
    digital: string;
    decimal: string;
    text: string;
    hours: number;
    minutes: number;
}
