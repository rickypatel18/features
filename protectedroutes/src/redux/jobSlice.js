import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    jobType: "all",
    location: "all",
    experience: "all",
  },
  jobs: [
    {
      id: 1,
      title: "Frontend Developer",
      jobType: "Full-time",
      location: "New York",
      experience: "Mid",
    },
    {
      id: 2,
      title: "Backend Engineer",
      jobType: "Part-time",
      location: "San Francisco",
      experience: "Senior",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      jobType: "Remote",
      location: "Remote",
      experience: "Entry",
    },
    {
      id: 4,
      title: "Data Scientist",
      jobType: "Full-time",
      location: "Remote",
      experience: "Senior",
    },
  ],
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const { setFilters } = jobSlice.actions;
export default jobSlice.reducer;
