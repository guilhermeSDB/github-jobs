import { Filter } from "@/components/Filter"
import { JobsCard } from "@/components/JobsCard"
import { Search } from "@/components/Search"

export default function Home() {
  return (
    <>
      {/* Search */}
      <Search />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 w-full my-11">
        {/* Filter */}
        <div className="col-span-1 w-full">
          <Filter />
        </div>

        <div className="col-span-3">
          <JobsCard />
        </div>
      </div>
    </>
  )
}
