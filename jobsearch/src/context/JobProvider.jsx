// JobContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    jobType: searchParams.get("jobType") || "all",
    location: searchParams.get("location") || "all",
    experience: searchParams.get("experience") || "all",
  });

  const jobs = [
    { id: 1, title: "Frontend Developer", jobType: "Full-time", location: "New York", experience: "Mid" },
    { id: 2, title: "Backend Engineer", jobType: "Part-time", location: "San Francisco", experience: "Senior" },
    { id: 3, title: "UI/UX Designer", jobType: "Remote", location: "Remote", experience: "Entry" },
    { id: 4, title: "Data Scientist", jobType: "Full-time", location: "Remote", experience: "Senior" },
  ];

  useEffect(() => {
    setSearchParams(filters);
  }, [filters, setSearchParams]);

  return (
    <JobContext.Provider value={{ filters, setFilters, jobs }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobContext = () => useContext(JobContext);