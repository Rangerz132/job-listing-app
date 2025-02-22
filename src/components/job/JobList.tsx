import { JobItemData } from "../../types";
import JobItem from "./JobItem";

const JobList = (props: { jobs: JobItemData[] }) => {
  return (
    <div className="wrapper flex flex-col justify-center items-center space-y-10 mt-10">
      {props.jobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
