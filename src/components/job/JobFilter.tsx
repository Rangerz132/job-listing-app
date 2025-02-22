import React from "react";

const JobFilter = (props: { filter: string }) => {
  return (
    <div className="bg-light-grayish-cyan-50 rounded-sm px-2 py-1 font-semibold cursor-pointer text-desaturated-dark-cyan hover:text-white hover:bg-desaturated-dark-cyan transition-all duration-200">
      {props.filter}
    </div>
  );
};

export default JobFilter;
