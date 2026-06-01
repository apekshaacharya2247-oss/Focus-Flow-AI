import Sidebar from "./components/Sidebar"
import DashboardCards from "./components/DashboardCards"
import AnalyticsChart from "./components/AnalyticsChart"
import GoalTracker from "./components/GoalTracker"
import GoalInput from "./components/GoalInput"
import FocusTimer from "./components/FocusTimer"
import AISuggestions from "./components/AISuggestions"

function App() {
  return (
    <div
      style={{
        backgroundColor: "#020617",
        minHeight: "100vh",
        color: "white",
        padding: "30px",
        marginLeft: "260px",
      }}
    >
      <Sidebar />

      <h1
        style={{
          color: "#22d3ee",
          fontSize: "50px",
        }}
      >
        FocusFlow AI
      </h1>

      <p
        style={{
          fontSize: "22px",
          marginTop: "10px",
        }}
      >
        Personal Productivity Analytics System
      </p>

      <DashboardCards />
      <AnalyticsChart />
      <GoalTracker />
      <GoalInput />
      <FocusTimer />
      <AISuggestions />
    </div>
  )
}

export default App