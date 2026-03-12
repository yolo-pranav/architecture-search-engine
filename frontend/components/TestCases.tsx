"use client"

export default function TestCases({
  setQuery,
  setHost,
  setAdjacent,
  setExposure,
  setJson,
  activeTab,
}: any) {
  return (
    <div className="bg-slate-800 border border-slate-700 p-6 rounded-lg shadow-xl h-fit sticky top-8">
      <h2 className="text-xl font-bold text-white mb-6 flex items-center">
        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
        Test Cases
      </h2>

      <div className="space-y-4">
        {/* Perfect Matches */}
        <div className="space-y-2">
          <p className="text-slate-500 text-xs uppercase tracking-wide">Perfect Matches:</p>
          <div className="grid grid-cols-1 gap-2">
            <button
              onClick={() => {
                const payload = {
                  query: "External Wall - Slab Junction",
                  host_element: "External Wall",
                  adjacent_element: "Slab",
                  exposure: "External",
                }
                setQuery(payload.query)
                setHost(payload.host_element)
                setAdjacent(payload.adjacent_element)
                setExposure(payload.exposure)
                if (activeTab === "json" && setJson) {
                  setJson(JSON.stringify(payload, null, 2))
                }
              }}
              className="bg-green-900/30 hover:bg-green-900/50 text-green-300 border border-green-700/50 hover:border-green-500 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 text-left"
            >
              ✓ Wall-Slab (All 4)
            </button>
            <button
              onClick={() => {
                const payload = {
                  query: "Window Sill Detail with Drip",
                  host_element: "Window",
                  adjacent_element: "External Wall",
                  exposure: "External",
                }
                setQuery(payload.query)
                setHost(payload.host_element)
                setAdjacent(payload.adjacent_element)
                setExposure(payload.exposure)
                if (activeTab === "json" && setJson) {
                  setJson(JSON.stringify(payload, null, 2))
                }
              }}
              className="bg-green-900/30 hover:bg-green-900/50 text-green-300 border border-green-700/50 hover:border-green-500 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 text-left"
            >
              ✓ Window Sill (All 4)
            </button>
            <button
              onClick={() => {
                const payload = {
                  query: "Internal Wall - Floor Junction",
                  host_element: "Internal Wall",
                  adjacent_element: "Floor",
                  exposure: "Internal",
                }
                setQuery(payload.query)
                setHost(payload.host_element)
                setAdjacent(payload.adjacent_element)
                setExposure(payload.exposure)
                if (activeTab === "json" && setJson) {
                  setJson(JSON.stringify(payload, null, 2))
                }
              }}
              className="bg-green-900/30 hover:bg-green-900/50 text-green-300 border border-green-700/50 hover:border-green-500 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 text-left"
            >
              ✓ Floor Junction (All 4)
            </button>
          </div>
        </div>

        {/* Partial Matches */}
        <div className="space-y-2">
          <p className="text-slate-500 text-xs uppercase tracking-wide">Partial (3/4):</p>
          <div className="grid grid-cols-1 gap-2">
            <button
              onClick={() => {
                const payload = {
                  query: "External Wall - Slab Junction",
                  host_element: "External Wall",
                  adjacent_element: "Slab",
                  exposure: "",
                }
                setQuery(payload.query)
                setHost(payload.host_element)
                setAdjacent(payload.adjacent_element)
                setExposure(payload.exposure)
                if (activeTab === "json" && setJson) {
                  setJson(JSON.stringify(payload, null, 2))
                }
              }}
              className="bg-yellow-900/30 hover:bg-yellow-900/50 text-yellow-300 border border-yellow-700/50 hover:border-yellow-500 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 text-left"
            >
              ⊗ No Exposure
            </button>
            <button
              onClick={() => {
                const payload = {
                  query: "Window Sill Detail with Drip",
                  host_element: "",
                  adjacent_element: "External Wall",
                  exposure: "External",
                }
                setQuery(payload.query)
                setHost(payload.host_element)
                setAdjacent(payload.adjacent_element)
                setExposure(payload.exposure)
                if (activeTab === "json" && setJson) {
                  setJson(JSON.stringify(payload, null, 2))
                }
              }}
              className="bg-yellow-900/30 hover:bg-yellow-900/50 text-yellow-300 border border-yellow-700/50 hover:border-yellow-500 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 text-left"
            >
              ⊗ No Host
            </button>
          </div>
        </div>

        {/* Single Criterion */}
        <div className="space-y-2">
          <p className="text-slate-500 text-xs uppercase tracking-wide">Single Match:</p>
          <div className="grid grid-cols-2 gap-1.5">
            <button
              onClick={() => {
                setQuery("wall")
                setHost("")
                setAdjacent("")
                setExposure("")
              }}
              className="bg-orange-900/30 hover:bg-orange-900/50 text-orange-300 border border-orange-700/50 hover:border-orange-500 px-2 py-1.5 rounded text-xs font-medium transition-all duration-200"
            >
              Query
            </button>
            <button
              onClick={() => {
                setQuery("")
                setHost("External Wall")
                setAdjacent("")
                setExposure("")
              }}
              className="bg-orange-900/30 hover:bg-orange-900/50 text-orange-300 border border-orange-700/50 hover:border-orange-500 px-2 py-1.5 rounded text-xs font-medium transition-all duration-200"
            >
              Host
            </button>
            <button
              onClick={() => {
                setQuery("")
                setHost("")
                setAdjacent("")
                setExposure("External")
              }}
              className="bg-orange-900/30 hover:bg-orange-900/50 text-orange-300 border border-orange-700/50 hover:border-orange-500 px-2 py-1.5 rounded text-xs font-medium transition-all duration-200"
            >
              Exposure
            </button>
            <button
              onClick={() => {
                setQuery("")
                setHost("")
                setAdjacent("Slab")
                setExposure("")
              }}
              className="bg-orange-900/30 hover:bg-orange-900/50 text-orange-300 border border-orange-700/50 hover:border-orange-500 px-2 py-1.5 rounded text-xs font-medium transition-all duration-200"
            >
              Adjacent
            </button>
          </div>
        </div>

        {/* Cross-Match */}
        <div className="space-y-2">
          <p className="text-slate-500 text-xs uppercase tracking-wide">Cross-Match:</p>
          <div className="grid grid-cols-1 gap-2">
            <button
              onClick={() => {
                const payload = {
                  query: "sill",
                  host_element: "Window",
                  adjacent_element: "",
                  exposure: "External",
                }
                setQuery(payload.query)
                setHost(payload.host_element)
                setAdjacent(payload.adjacent_element)
                setExposure(payload.exposure)
                if (activeTab === "json" && setJson) {
                  setJson(JSON.stringify(payload, null, 2))
                }
              }}
              className="bg-purple-900/30 hover:bg-purple-900/50 text-purple-300 border border-purple-700/50 hover:border-purple-500 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 text-left"
            >
              Q+H+E
            </button>
            <button
              onClick={() => {
                const payload = {
                  query: "junction",
                  host_element: "",
                  adjacent_element: "Floor",
                  exposure: "Internal",
                }
                setQuery(payload.query)
                setHost(payload.host_element)
                setAdjacent(payload.adjacent_element)
                setExposure(payload.exposure)
                if (activeTab === "json" && setJson) {
                  setJson(JSON.stringify(payload, null, 2))
                }
              }}
              className="bg-purple-900/30 hover:bg-purple-900/50 text-purple-300 border border-purple-700/50 hover:border-purple-500 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 text-left"
            >
              Q+A+E
            </button>
          </div>
        </div>

        {/* Edge Cases */}
        <div className="space-y-2">
          <p className="text-slate-500 text-xs uppercase tracking-wide">Edge Cases:</p>
          <div className="grid grid-cols-1 gap-2">
            <button
              onClick={() => {
                const payload = {
                  query: "xyz123",
                  host_element: "NonExistent",
                  adjacent_element: "Unknown",
                  exposure: "Invisible",
                }
                setQuery(payload.query)
                setHost(payload.host_element)
                setAdjacent(payload.adjacent_element)
                setExposure(payload.exposure)
                if (activeTab === "json" && setJson) {
                  setJson(JSON.stringify(payload, null, 2))
                }
              }}
              className="bg-red-900/30 hover:bg-red-900/50 text-red-300 border border-red-700/50 hover:border-red-500 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 text-left"
            >
              ✗ All Non-existent
            </button>
            <button
              onClick={() => {
                setQuery("")
                setHost("")
                setAdjacent("")
                setExposure("")
              }}
              className="bg-red-900/30 hover:bg-red-900/50 text-red-300 border border-red-700/50 hover:border-red-500 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 text-left"
            >
              ✗ All Empty
            </button>
          </div>
        </div>

        {/* Clear */}
        <button
          onClick={() => {
            setQuery("")
            setHost("")
            setAdjacent("")
            setExposure("")
            if (activeTab === "json" && setJson) {
              setJson("")
            }
          }}
          className="w-full mt-4 bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 border border-slate-600 hover:border-slate-500"
        >
          Clear All
        </button>
      </div>
    </div>
  )
}
