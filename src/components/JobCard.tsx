import { IJob } from "@/types/job"
import { Clock, Globe2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface JobCardProps {
  job: IJob
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Link
      href={`job/${job.id}`}
      className="w-full cursor-pointer flex items-start mb-2 bg-white text-slate-900 relative p-3 rounded-lg gap-3 border border-transparent hover:border-zinc-200 transition-colors"
    >
      {/* Image Company */}
      {job.companyLogoUrl ? (
        <Image
          width={150}
          height={150}
          src={job.companyLogoUrl}
          alt="Company logo"
          className="object-cover object-center w-24 h-24 rounded-lg"
        />
      ) : (
        <div className="w-24 h-24 rounded-lg bg-neutral-200 text-gray-400 text-center flex items-center justify-center">
          not found
        </div>
      )}
      <div>
        {/* Company */}
        <div className="text-xs">{job.company}</div>

        {/* Title */}
        <h1 className="text-lg">{job.title}</h1>

        {/* Is Full time? */}
        {job.isFullTime && (
          <div className="w-20 mt-1 py-1 border-2 border-slate-900 rounded-lg font-bold text-center text-xs">
            Full time
          </div>
        )}
      </div>

      <div className="flex items-center text-zinc-400 text-xs absolute right-4 bottom-4 gap-6">
        {/* City */}
        <div className="flex items-center gap-2">
          <Globe2 size={18} />
          {job.city}
        </div>
        {/* Time */}
        <div className="flex items-center gap-2">
          <Clock size={18} />
          {job.timeAgo}
        </div>
      </div>
    </Link>
  )
}
