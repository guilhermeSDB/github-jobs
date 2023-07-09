import { Briefcase } from "lucide-react"

export function Search() {
  return (
    <div className="w-full h-40 bg-searchBgImg overflow-hidden rounded-lg relative flex flex-col justify-center items-center">
      <div className="bg-white max-w-screen-md w-full text-zinc-400 h-14 rounded-lg flex items-center gap-4 pl-6 pr-1">
        <Briefcase size={28} className="mb-1" />
        <input
          type="text"
          name=""
          id=""
          className="w-full ring-transparent focus:outline-none focus:ring-0 text-base h-full text-zinc-800"
          placeholder="Title, companies, expertise or benefits"
        />
        <button className="bg-blue-500 py-3 px-14 rounded-lg text-white">
          Search
        </button>
      </div>
    </div>
  )
}
