import { useState } from "react";
import { JobItemData } from "../../types";
import JobFilter from "./JobFilter";
import { JobAPI } from "../../api/jobAPI";

const JobItem = (props: { job: JobItemData }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="w-full bg-white rounded-md shadow-xl shadow-light-grayish-cyan-100 p-6 relative transition-all duration-200 hover:scale-105"
    >
      {/** Left Border */}
      <div
        className={`h-full w-1  left-0 top-0 absolute rounded-l-md ransition-all duration-200 ${
          hover ? "bg-desaturated-dark-cyan" : "bg-white"
        }`}
      ></div>
      {/** Content */}
      <div className="relative">
        {/** Logo */}
        <div className="absolute left-0 -top-12 w-12 h-12">
          <img src={props.job.logo} />
        </div>
        {/** Top Section */}
        <div className="flex flex-col space-y-3 pt-3">
          <div className="flex flex-row space-x-6 items-center">
            {/** Company */}
            <h1 className="font-semibold text-desaturated-dark-cyan">
              {props.job.company}
            </h1>
            <div className="flex flex-row space-x-2">
              {/** New */}
              {props.job.new && (
                <div className="text-white bg-desaturated-dark-cyan uppercase font-semibold text-sm rounded-full px-2 py-1 flex items-center justify-center ">
                  new!
                </div>
              )}
              {/** Featured */}
              {props.job.featured && (
                <div className="text-white bg-very-dark-grayish-cyan uppercase font-semibold text-sm rounded-full px-2 py-1 flex items-center justify-center ">
                  feature
                </div>
              )}
            </div>
          </div>

          {/** Position */}
          <h1 className="font-semibold text-very-dark-grayish-cyan">
            {props.job.position}
          </h1>

          <div className="flex flex-row items-center space-x-2 font-semibold text-dark-grayish-cyan">
            {/** Posted at */}
            <span>{props.job.postedAt}</span>
            <div className="w-1 h-1 bg-dark-grayish-cyan rounded-full"></div>
            {/** Contract */}
            <span>{props.job.contract}</span>
            <div className="w-1 h-1 bg-dark-grayish-cyan rounded-full"></div>
            {/** Location */}
            <span>{props.job.location}</span>
          </div>

          {/** Border */}
          <div className="w-full h-[1px] bg-dark-grayish-cyan"></div>

          {/** Bottom Section */}

          {/** Filters */}
          <div className="flex flex-row flex-wrap gap-3">
            {JobAPI.getJobfilters(props.job).map((filter, index) => (
              <JobFilter key={index} filter={filter} />
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default JobItem;
