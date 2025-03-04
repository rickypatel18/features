import React from "react";
import { useJobContext } from "../context/JobProvider"

const JobFilter = () => {
  const { filters, setFilters } = useJobContext();

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
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