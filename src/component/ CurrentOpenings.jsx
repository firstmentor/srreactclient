import React from "react";
import { useGetAllJobsQuery } from "../features/job/jobOpeningsApi";

const CurrentOpenings = () => {
  const { data, isLoading, error } = useGetAllJobsQuery();
  const jobs = data?.data || [];

  // Dummy array for loading skeleton (5 placeholders)
  const skeletonArray = new Array(5).fill(0);

  if (error) return <p className="text-danger text-center">❌ Failed to load jobs.</p>;

  return (
    <div className="scroll-box text-black mt-3">
      <div className="scroll-content">
        <div className="scroll-inner">
          {isLoading ? (
            skeletonArray.map((_, index) => (
              <div className="my-3" key={index}>
                <p className="placeholder-glow">
                  <span className="placeholder col-7"></span>
                </p>
                <p className="placeholder-glow">
                  <span className="placeholder col-5"></span>
                </p>
                <p className="placeholder-glow">
                  <span className="placeholder col-6"></span>
                </p>
                <hr />
              </div>
            ))
          ) : jobs.length === 0 ? (
            <p className="text-muted text-center">🚫 No current openings available.</p>
          ) : (
            jobs.map((job, index) => (
              <div className="my-3" key={index}>
                {job.designation && (
                  <p>
                    <strong>Designation:</strong> {job.designation}
                  </p>
                )}
                <p>
                  <strong>Experience:</strong> {job.experience}
                </p>
                <p>
                  <strong>Location:</strong> {job.location}
                </p>
                <hr />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrentOpenings;
