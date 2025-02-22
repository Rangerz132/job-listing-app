import { useDispatch } from "react-redux";
import { addFilter } from "../../state/filters/filterSlice";

const JobFilter = (props: { filter: string }) => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(addFilter(props.filter));
  };

  return (
    <div
      onClick={handleOnClick}
      className="bg-light-grayish-cyan-50 rounded-sm px-2 py-1 font-semibold cursor-pointer text-desaturated-dark-cyan hover:text-white hover:bg-desaturated-dark-cyan transition-all duration-200"
    >
      {props.filter}
    </div>
  );
};

export default JobFilter;
