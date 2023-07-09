import { Globe2 } from "lucide-react"

export function Filter() {
  return (
    <div className="w-full flex flex-col gap-4 text-slate-500 font-semibold">
      {/* Full time Option */}
      <div>
        <input
          type="checkbox"
          name="full-time"
          id="full-time"
          className="mr-2"
        />
        <label htmlFor="full-time">Full time</label>
      </div>

      {/* Search City */}
      <div>
        <h4 className="uppercase font-bold">Location</h4>
        <div className="w-full bg-white py-4 px-2 rounded-lg flex items-center gap-3 text-zinc-400">
          <Globe2 size={18} />
          <input
            type="text"
            name="location"
            id="location"
            className="mr-2 w-full h-full text-xs focus:outline-none focus:ring-0 "
            placeholder="City, state, zip, code or country"
          />
        </div>
      </div>

      {/* Citys Options */}
      <div className="flex flex-col gap-2">
        <div>
          <input type="radio" name="city" id="city-1" className="mr-2" />
          <label htmlFor="city-1">London</label>
        </div>

        <div>
          <input type="radio" name="city" id="city-2" className="mr-2" />
          <label htmlFor="city-2">Amsterdan</label>
        </div>

        <div>
          <input type="radio" name="city" id="city-3" className="mr-2" />
          <label htmlFor="city-3">New York</label>
        </div>

        <div>
          <input type="radio" name="city" id="city-4" className="mr-2" />
          <label htmlFor="city-4">Berlin</label>
        </div>
      </div>
    </div>
  )
}
