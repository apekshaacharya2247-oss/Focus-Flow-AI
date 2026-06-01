import { useEffect, useState } from "react"

function FocusTimer() {
  const [seconds, setSeconds] = useState(1500)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let interval

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(interval)
            setIsActive(false)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isActive])

  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0")
  const secs = String(seconds % 60).padStart(2, "0")

  const toggleTimer = () => {
    setIsActive((prev) => !prev)
  }

  const resetTimer = () => {
    setSeconds(1500)
    setIsActive(false)
  }

  return (
    <div style={{
      backgroundColor: "#0f172a",
      padding: "30px",
      borderRadius: "20px",
      marginTop: "40px",
      color: "white",
    }}>
      <h2 style={{ color: "#22d3ee" }}>Focus Timer</h2>

      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "20px",
        marginTop: "20px",
      }}>
        <span style={{ fontSize: "48px", fontWeight: "700" }}>
          {minutes}:{secs}
        </span>

        <div>
          <button
            onClick={toggleTimer}
            style={{
              padding: "12px 24px",
              backgroundColor: "#06b6d4",
              border: "none",
              color: "white",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            {isActive ? "Pause" : "Start"}
          </button>

          <button
            onClick={resetTimer}
            style={{
              padding: "12px 24px",
              marginLeft: "10px",
              backgroundColor: "#334155",
              border: "none",
              color: "white",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default FocusTimer