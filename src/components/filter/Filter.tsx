import CrossIcon from "../../assets/images/icon-remove.svg";
import { useDispatch } from "react-redux";
import { removeFilter } from "../../state/filters/filterSlice";

const Filter = (props: { filter: string }) => {
  const dispatch = useDispatch();

  const handleCrossClick = () => {
    dispatch(removeFilter(props.filter));
  };

  return (
    <div className="relative">
      <div className="font-semibold text-desaturated-dark-cyan bg-light-grayish-cyan-50 py-1 pl-2 pr-10 rounded-sm">
        {props.filter}
      </div>
      <div
        onClick={handleCrossClick}
        className="absolute right-0 top-0 w-8 h-8 flex items-center justify-center bg-desaturated-dark-cyan rounded-r-sm cursor-pointer hover:bg-very-dark-grayish-cyan transition-colors duration-200"
      >
        <img src={CrossIcon} alt={"Cross icon"} />
      </div>
    </div>
  );
};

export default Filter;
