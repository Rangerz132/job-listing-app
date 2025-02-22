import { useEffect, useState } from "react";
import Header from "./components/Header";
import { RootState } from "../src/state/store";
import { JobItemData } from "./types";
import { JobAPI } from "./api/jobAPI";
import JobList from "./components/job/JobList";
import { useSelector } from "react-redux";

function App() {
  const [jobs, setJobs] = useState<JobItemData[]>([]);
  const [filteredjobs, setFilteredJobs] = useState<JobItemData[]>([]);
  const filters = useSelector((store: RootState) => store.filters.filters);

  async function fetchJobs() {
    try {
      const result = await JobAPI.getJobs();
      setJobs(result || []);
      setFilteredJobs(result || []);
    } catch (error) {
      console.log("Failed to fetch jobs:", error);
    }
  }

  function hasAllFilters(jobFilters: string[]): boolean {
    let hasAllFilters = true;
    for (let i = 0; i < filters.length; i++) {
      if (!jobFilters.includes(filters[i])) {
        hasAllFilters = false;
        break;
      }
    }
    return hasAllFilters;
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    const updatedFilteredJobs: JobItemData[] = [];
    jobs.map((job) => {
      const jobFilters = JobAPI.getJobfilters(job);
      if (hasAllFilters(jobFilters)) {
        updatedFilteredJobs.push(job);
      }
    });

    setFilteredJobs(updatedFilteredJobs);
  }, [filters]);

  return (
    <div>
      <Header />
      <JobList jobs={filteredjobs} />
    </div>
  );
}

export default App;
