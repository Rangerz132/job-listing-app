import { useEffect, useState } from "react";
import Header from "./components/Header";

import { JobItemData } from "./types";
import { JobAPI } from "./api/jobAPI";
import JobList from "./components/job/JobList";

function App() {
  const [jobs, setJobs] = useState<JobItemData[]>([]);

  async function fetchJobs() {
    try {
      const result = await JobAPI.getJobs();
      setJobs(result || []);
    } catch (error) {
      console.log("Failed to fetch jobs:", error);
    }
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      <Header />
      <JobList jobs={jobs} />
    </div>
  );
}

export default App;
