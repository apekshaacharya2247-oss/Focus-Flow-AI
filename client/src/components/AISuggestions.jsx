function AISuggestions() {

  const suggestions = [
    "You are most productive between 8 PM - 10 PM.",
    "Try reducing mobile usage during study hours.",
    "Take a 10-minute break after 90 minutes of work.",
    "Your coding productivity improved by 20% this week.",
  ]

  return (
    <div className="bg-slate-900 m-10 p-8 rounded-3xl shadow-lg">

      <h2 className="text-3xl text-cyan-400 font-bold mb-8">
        AI Productivity Suggestions
      </h2>

      <div className="space-y-5">

        {suggestions.map((tip, index) => (

          <div
            key={index}
            className="bg-slate-800 p-5 rounded-2xl border border-cyan-500/20"
          >

            <p className="text-gray-300 text-lg">
              🤖 {tip}
            </p>

          </div>

        ))}

      </div>

    </div>
  )
}

export default AISuggestions