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
}
