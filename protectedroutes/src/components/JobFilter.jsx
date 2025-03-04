import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../redux/jobSlice";

const JobFilter = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const filters = useSelector((state) => state.job.filters);
  console.log(searchParams);
  

  // Handle filter update
  const updateFilter = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    dispatch(setFilters(newFilters));
    setSearchParams(newFilters); // Update URL query params
  };

  return (
    <div>
      <h2>Filter Jobs</h2>

      <label>Job Type: </label>
      <select onChange={(e) => updateFilter("jobType", e.target.value)} value={filters.jobType}>
        <option value="all">All</option>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Remote">Remote</option>
      </select>

      <label>Location: </label>
      <select onChange={(e) => updateFilter("location", e.target.value)} value={filters.location}>
        <option value="all">All</option>
        <option value="New York">New York</option>
        <option value="San Francisco">San Francisco</option>
        <option value="Remote">Remote</option>
      </select>

      <label>Experience: </label>
      <select onChange={(e) => updateFilter("experience", e.target.value)} value={filters.experience}>
        <option value="all">All</option>
        <option value="Entry">Entry</option>
        <option value="Mid">Mid</option>
        <option value="Senior">Senior</option>
      </select>
    </div>
  );
};

export default JobFilter;
