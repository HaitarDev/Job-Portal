import { isSameISOWeek, isThisMonth, isToday } from "date-fns";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
};

export const counterSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    getJobs: (state, action) => {
      state.jobs = action.payload;
    },

    filterByQuery: (state, action) => {
      const { searchValue, locationValue } = action.payload;

      // If both searchValue and locationValue are empty, show all results
      if (!searchValue && !locationValue) {
        state.jobs = [...state.originalJobs]; // Show all results
        return state;
      }

      // If originalJobs is not already stored in state, store it
      if (!state.originalJobs) {
        state.originalJobs = [...state.jobs];
      }

      // Use originalJobs for filtering if available, otherwise use state.jobs
      const jobsToFilter = state.originalJobs || state.jobs;

      // Filter jobs based on searchValue and locationValue
      const filteredJobs = jobsToFilter
        .filter((job) => {
          return job.jobTitle.toLowerCase().includes(searchValue.toLowerCase());
        })
        .filter((job) => {
          return job.jobLocation
            .toLowerCase()
            .includes(locationValue.toLowerCase());
        });

      // Update the state with the filteredJobs
      state.jobs = filteredJobs;
    },

    filterByLocation: (state, action) => {
      const { payload } = action;

      // If payload is "all", show all results
      if (payload === "all") {
        state.jobs = [...state.originalJobs]; // Show all results
        return state;
      }

      // If originalJobs is not already stored in state, store it
      if (!state.originalJobs) {
        state.originalJobs = [...state.jobs];
      }

      // Use originalJobs for filtering if available, otherwise use state.jobs
      const jobsToFilter = state.originalJobs || state.jobs;

      // Filter jobs based on locationValue
      const filteredJobs = jobsToFilter.filter((job) => {
        return job.jobLocation.toLowerCase() === payload.toLowerCase();
      });

      // Update the state with the filteredJobs
      state.jobs = filteredJobs;
    },

    filterBySalary: (state, action) => {
      const { payload } = action;

      if (payload === "all-types") {
        state.jobs = [...state.originalJobs];
        return state;
      }

      if (!state.originalJobs) {
        state.originalJobs = [...state.jobs];
      }

      const jobsToFilter = state.originalJobs || state.jobs;

      state.jobs = jobsToFilter.filter((job) => {
        return job.salaryType.toLowerCase().includes(action.payload);
      });
    },

    filterByDays: (state, action) => {
      const { payload } = action;

      if (payload === "all-time") {
        state.jobs = [...state.originalJobs];
        return state;
      }

      if (!state.originalJobs) {
        state.originalJobs = [...state.jobs];
      }

      const jobsToFilter = state.originalJobs || state.jobs;

      // postingDate  &   payload(date)
      // 2023-10-05   &   2023-11-11

      state.jobs = jobsToFilter.filter((job) => {
        if (payload === "last-24h") return isToday(new Date(job.postingDate));
        if (payload === "last-7d")
          return isSameISOWeek(new Date(job.postingDate), Date.now());
        if (payload === "last-month")
          return isThisMonth(new Date(job.postingDate));
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getJobs,
  filterByLocation,
  filterByQuery,
  filterBySalary,
  filterByDays,
} = counterSlice.actions;

export default counterSlice.reducer;
