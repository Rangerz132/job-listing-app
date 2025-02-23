import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import Filter from "./Filter";
import { clearFilters } from "../../state/filters/filterSlice";

const FilterBar = () => {
  const dispatch = useDispatch();
  const filters = useSelector((store: RootState) => store.filters.filters);

  const removeFilters = () => {
    dispatch(clearFilters());
  };

  return (
    <div className="w-full bg-white  rounded-md shadow-xl shadow-light-grayish-cyan-100 p-6 relative flex flex-row justify-between items-center">
      <div className="flex flex-row gap-3 flex-wrap">
        {filters.map((filter, index) => (
          <Filter key={index} filter={filter} />
        ))}
      </div>
      <div
        onClick={removeFilters}
        className="text-dark-grayish-cyan font-semibold hover:underline  hover:text-desaturated-dark-cyan cursor-pointer transition-all duration-200"
      >
        Clear
      </div>
    </div>
  );
};

export default FilterBar;
