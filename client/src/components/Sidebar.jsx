function Sidebar() {

  return (

    <div style={{
      width: "220px",
      height: "100vh",
      backgroundColor: "#0f172a",
      position: "fixed",
      left: 0,
      top: 0,
      padding: "30px",
      color: "white"
    }}>

      <h1 style={{
        color: "#22d3ee",
        marginBottom: "40px"
      }}>
        FocusFlow
      </h1>

      <ul style={{
        listStyle: "none",
        padding: 0,
        lineHeight: "50px",
        fontSize: "18px"
      }}>

        <li>🏠 Dashboard</li>
        <li>📈 Analytics</li>
        <li>🎯 Goals</li>
        <li>⏳ Focus Timer</li>
        <li>🤖 AI Suggestions</li>

      </ul>

    </div>

  )
}

export default Sidebar