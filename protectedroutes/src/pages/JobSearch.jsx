import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { setFilters } from "../redux/jobSlice"
import JobFilter from "../components/JobFilter";
import JobList from "../components/JobList ";

const JobSearch = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  // Restore filters from URL on page load
  useEffect(() => {
    dispatch(setFilters({
      jobType: searchParams.get("jobType") || "all",
      location: searchParams.get("location") || "all",
      experience: searchParams.get("experience") || "all",
    }));
  }, [searchParams, dispatch]);

  return (
    <div>
      <h1>Job Search</h1>
      <JobFilter />
      <JobList />
    </div>
  );
};

export default JobSearch;
