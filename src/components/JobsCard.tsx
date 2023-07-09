import { jobs } from "@/mock/jobs"
import { JobCard } from "./JobCard"

export function JobsCard() {
  return (
    <ul>
      {jobs.map((job) => (
        <li>
          <JobCard job={job} key={job.id} />
        </li>
      ))}
    </ul>
  )
}
