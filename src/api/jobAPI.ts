import axios from "axios";
import { JobItemData } from "../types";

const BASE_URL = "http://localhost:3200/jobs";

export class JobAPI {
  static async getJobs() {
    try {
      return (await axios.get(BASE_URL)).data as JobItemData[];
    } catch (error) {
      console.error(error);
    }
  }

  static getJobfilters(job: JobItemData): string[] {
    const filters: string[] = [];
    job.tools.forEach((tool) => filters.push(tool));
    job.languages.forEach((language) => filters.push(language));
    filters.push(job.level);
    filters.push(job.role);
    return filters;
  }
}
