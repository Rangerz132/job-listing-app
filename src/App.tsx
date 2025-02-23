import { useEffect, useState } from "react";
import Header from "./components/Header";
import { RootState } from "../src/state/store";
import { JobItemData } from "./types";
import { JobAPI } from "./api/jobAPI";
import JobList from "./components/job/JobList";
import { useSelector } from "react-redux";
import FilterBar from "./components/filter/FilterBar";

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
      <div className="wrapper ">
        <div
          className={`flex flex-col space-y-6 ${
            filters.length > 0 ? "pt-10 md:pt-30" : "pt-24 md:pt-44"
          }`}
        >
          {filters.length > 0 && <FilterBar />}
          <JobList jobs={filteredjobs} />
        </div>
      </div>
    </div>
  );
}

export default App;
