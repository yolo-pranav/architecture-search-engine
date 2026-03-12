export default function ResultsView({results}:any){

  if(!results) return (
    <div className="bg-slate-800 border border-slate-700 p-8 rounded-lg shadow-xl min-h-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 bg-slate-700 rounded-full mx-auto mb-4 flex items-center justify-center">
          <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
        </div>
        <p className="text-slate-400">Search results will appear here</p>
      </div>
    </div>
  )

  return (
    <div className="bg-slate-800 border border-slate-700 p-6 rounded-lg shadow-xl">
      <h2 className="text-xl font-bold text-white mb-6 flex items-center">
        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
        Results
      </h2>

      <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 overflow-x-auto max-h-96 overflow-y-auto">
        <pre className="text-slate-300 font-mono text-sm leading-relaxed">
          {JSON.stringify(results,null,2)}
        </pre>
      </div>
    </div>
  )
}