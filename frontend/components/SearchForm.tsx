"use client"

import axios from "axios"

export default function SearchForm({
  query,
  setQuery,
  host,
  setHost,
  adjacent,
  setAdjacent,
  exposure,
  setExposure,
  setResults,
}: any){

  const submit = async () => {

    const payload = {
      query,
      host_element: host,
      adjacent_element: adjacent,
      exposure
    }

    const res = await axios.post(
      "http://localhost:8000/search",
      payload
    )

    setResults(res.data)
  }

  return (

    <div className="bg-slate-800 border border-slate-700 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">

      <h2 className="text-xl font-bold text-white mb-6 flex items-center">
        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
        Form Search
      </h2>

      <div className="space-y-4">
        <input
          className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-20 transition-all duration-200"
          placeholder="Query"
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
        />

        <input
          className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-20 transition-all duration-200"
          placeholder="Host Element"
          value={host}
          onChange={(e)=>setHost(e.target.value)}
        />

        <input
          className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-20 transition-all duration-200"
          placeholder="Adjacent Element"
          value={adjacent}
          onChange={(e)=>setAdjacent(e.target.value)}
        />

        <input
          className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-20 transition-all duration-200"
          placeholder="Exposure"
          value={exposure}
          onChange={(e)=>setExposure(e.target.value)}
        />
      </div>

      <button
        onClick={submit}
        className="mt-6 w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
      >
        Search
      </button>

    </div>
  )
}