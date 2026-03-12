"use client"

import axios from "axios"

export default function JsonInput({json, setJson, setResults}: any) {

  const submit = async () => {
    let payload = {}
    try {
      payload = JSON.parse(json)
    } catch (err) {
      alert("Invalid JSON payload")
      return
    }

    const res = await axios.post("http://localhost:8000/search", payload)
    setResults(res.data)
  }

  return (
    <div className="bg-slate-800 border border-slate-700 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-xl font-bold text-white mb-6 flex items-center">
        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
        JSON Input
      </h2>

      <textarea
        className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 h-48 text-white placeholder-slate-400 font-mono text-sm focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400 focus:ring-opacity-20 transition-all duration-200 resize-none"
        placeholder={`{"query":"wall junction"}`}
        value={json}
        onChange={(e) => setJson(e.target.value)}
      />

      <button
        onClick={submit}
        className="mt-6 w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
      >
        Submit JSON
      </button>
    </div>
  )
}