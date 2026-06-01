import { useState } from "react"

function GoalInput() {

  const [goal, setGoal] = useState("")
  const [goals, setGoals] = useState([])

  const addGoal = () => {

    if(goal.trim() === "") return

    setGoals([...goals, goal])

    setGoal("")
  }

  return (

    <div style={{
      backgroundColor: "#0f172a",
      padding: "30px",
      borderRadius: "20px",
      marginTop: "40px",
      color: "white"
    }}>

      <h2 style={{
        color: "#22d3ee"
      }}>
        Add Goals
      </h2>

      <input
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        placeholder="Enter Goal"
        style={{
          padding: "12px",
          width: "70%",
          marginTop: "20px",
          marginRight: "10px"
        }}
      />

      <button
        onClick={addGoal}
        style={{
          padding: "12px 20px",
          backgroundColor: "#06b6d4",
          border: "none",
          color: "white",
          borderRadius: "10px"
        }}
      >
        Add
      </button>

      <div style={{
        marginTop: "20px"
      }}>

        {goals.map((g, index) => (

          <p key={index}>
            ✅ {g}
          </p>

        ))}

      </div>

    </div>

  )
}

export default GoalInput