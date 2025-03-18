import axios from "axios";

import { siteConfig } from "@/constants/site";

export const httpClient = axios.create({
    baseURL: siteConfig.worker_api_base_url,
});
