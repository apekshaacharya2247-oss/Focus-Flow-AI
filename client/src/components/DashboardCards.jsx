function DashboardCards() {

  const cards = [
    {
      title: "Study Hours",
      value: "5.2 Hrs",
    },

    {
      title: "Coding Time",
      value: "3.8 Hrs",
    },

    {
      title: "Goals Completed",
      value: "8 Goals",
    },

    {
      title: "Productivity Score",
      value: "92%",
    },
  ]

  return (

    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "20px",
      marginTop: "50px"
    }}>

      {cards.map((card, index) => (

        <div
          key={index}
          style={{
            backgroundColor: "#0f172a",
            padding: "30px",
            borderRadius: "20px",
            boxShadow: "0px 0px 10px rgba(34,211,238,0.2)"
          }}
        >

          <h2 style={{
            color: "#94a3b8",
            fontSize: "20px"
          }}>
            {card.title}
          </h2>

          <p style={{
            color: "#22d3ee",
            fontSize: "35px",
            fontWeight: "bold",
            marginTop: "10px"
          }}>
            {card.value}
          </p>

        </div>

      ))}

    </div>

  )
}

export default DashboardCards