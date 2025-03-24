import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    jobs: [],
    loading: false,
    error: null
};

const jobSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        addJob: (state, action) => {
            state.jobs.push(action.payload);
        },
        removeJob: (state, action) => {
            state.jobs = state.jobs.filter(job => job.id !== action.payload);
        },
        setJobs: (state, action) => {
            state.jobs = action.payload;
        }
    }
});

export const { addJob, removeJob, setJobs } = jobSlice.actions;
export default jobSlice.reducer;


export const selectAllJobs = (state) => state.jobs.jobs; 