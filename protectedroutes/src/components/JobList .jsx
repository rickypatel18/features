import { useSelector } from "react-redux";

const JobList = () => {
    const { jobs, filters } = useSelector((state) => state.job);

    // Filter jobs based on selected filters
    const filteredJobs = jobs.filter((job) => {
        return (
            (filters.jobType === "all" || job.jobType === filters.jobType) &&
            (filters.location === "all" || job.location === filters.location) &&
            (filters.experience === "all" || job.experience === filters.experience)
        );
    });

    return (
        <div>
            <h2>Job Listings</h2>
            {filteredJobs.length > 0 ? (
                <ul>
                    {filteredJobs.map((job) => (
                        <li key={job.id}>
                            <strong>{job.title}</strong> - {job.jobType} | {job.location} | {job.experience} Level
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No jobs found matching your criteria.</p>
            )}
        </div>
    );
};

export default JobList;
