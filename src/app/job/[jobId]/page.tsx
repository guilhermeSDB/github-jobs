"use client"
import { jobs } from "@/mock/jobs"
import { IJob } from "@/types/job"
import { Clock, Globe2, MoveLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

interface IJobParams {
  params: {
    jobId: number
  }
  searchParams: {}
}

export default function Job({ params }: IJobParams) {
  const [job, setJob] = useState<IJob>()

  function getJob() {
    const search = jobs.find((job) => job.id === +params.jobId)
    setJob(search)
  }

  useEffect(() => {
    getJob()
  }, [])

  if (!job) {
    return <div>Nenhum emprego encontrado</div>
  }

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-10">
      {/* Right Side */}
      <div>
        <Link href={"/"} className="font-semibold flex gap-4 text-chambray-500">
          <MoveLeft />
          Back to search
        </Link>

        <div className="my-4">
          <h1 className="font-bold text-slate-400 mb-2 uppercase">
            How to apply
          </h1>
          <p>{job.howToApply}</p>
        </div>
      </div>

      {/* Left Side */}
      <div className="w-full col-span-3 flex flex-col gap-8">
        <div>
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-chambray-700">
              {job.title}
            </h1>
            {/* Is Full time? */}
            {job.isFullTime && (
              <div className="w-20 mt-1 py-1 border-2 text-chambray-700 border-chambray-700 rounded-lg font-bold text-center text-xs">
                Full time
              </div>
            )}
          </div>
          {/* Time */}
          <div className="flex items-center gap-2 text-sm text-zinc-400 font-medium">
            <Clock size={14} />
            {job.timeAgo}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Image Company */}
          {job.companyLogoUrl ? (
            <Image
              width={150}
              height={150}
              src={job.companyLogoUrl}
              alt="Company logo"
              className="object-cover object-center w-14 h-14 rounded-lg"
            />
          ) : (
            <div className="w-24 h-24 rounded-lg bg-neutral-200 text-gray-400 text-center flex items-center justify-center">
              not found
            </div>
          )}
          <div>
            <h4 className="font-bold text-chambray-700">{job.company}</h4>
            {/* City */}
            <div className="flex items-center gap-2">
              <Globe2 size={18} />
              {job.city}
            </div>
          </div>
        </div>

        <div>
          <p className="text-chambray-600 font-medium">{job.description}</p>
        </div>
      </div>
    </div>
  )
}
