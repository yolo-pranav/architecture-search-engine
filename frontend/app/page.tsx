"use client"

import { useState } from "react"
import SearchForm from "../components/SearchForm"
import JsonInput from "../components/JsonInput"
import TestCases from "../components/TestCases"
import ResultsView from "../components/ResultsView"

export default function Home() {

  const [results,setResults] = useState<any>(null)
  const [activeTab, setActiveTab] = useState<"form" | "json">("form")
  const [query,setQuery] = useState("")
  const [host,setHost] = useState("")
  const [adjacent,setAdjacent] = useState("")
  const [exposure,setExposure] = useState("")
  const [json, setJson] = useState("")

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
            Architectural Detail Search
          </h1>
          <p className="text-slate-400 text-lg">
            Search and explore architectural patterns with advanced filtering
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1: Toggle + Form/JSON Input */}
          <div className="space-y-4">
            {/* Toggle Tabs */}
            <div className="flex gap-2 bg-slate-800 p-1 rounded-lg border border-slate-700">
              <button
                onClick={() => setActiveTab("form")}
                className={`flex-1 px-4 py-2.5 rounded-md font-semibold transition-all duration-200 text-sm ${
                  activeTab === "form"
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Form
              </button>
              <button
                onClick={() => setActiveTab("json")}
                className={`flex-1 px-4 py-2.5 rounded-md font-semibold transition-all duration-200 text-sm ${
                  activeTab === "json"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                JSON
              </button>
            </div>

            {/* Form/JSON Component */}
            {activeTab === "form" && (
              <SearchForm
                query={query}
                setQuery={setQuery}
                host={host}
                setHost={setHost}
                adjacent={adjacent}
                setAdjacent={setAdjacent}
                exposure={exposure}
                setExposure={setExposure}
                setResults={setResults}
              />
            )}
            {activeTab === "json" && (
              <JsonInput
                json={json}
                setJson={setJson}
                setResults={setResults}
              />
            )}
          </div>

          {/* Column 2: Test Cases */}
          <div>
            <TestCases
              setQuery={setQuery}
              setHost={setHost}
              setAdjacent={setAdjacent}
              setExposure={setExposure}
              setJson={setJson}
              activeTab={activeTab}
            />
          </div>

          {/* Column 3: Results */}
          <div>
            <ResultsView results={results} />
          </div>
        </div>
      </div>
    </main>
  )
}