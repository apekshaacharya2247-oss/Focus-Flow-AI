import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

import { Bar } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

function AnalyticsChart() {

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],

    datasets: [
      {
        label: "Study Hours",
        data: [4, 5, 3, 6, 7, 5],
        backgroundColor: "#22d3ee",
      },
    ],
  }

  return (

    <div style={{
      backgroundColor: "#0f172a",
      padding: "30px",
      borderRadius: "20px",
      marginTop: "50px"
    }}>

      <h2 style={{
        color: "#22d3ee",
        marginBottom: "20px"
      }}>
        Weekly Analytics
      </h2>

      <Bar data={data} />

    </div>

  )
}

export default AnalyticsChart