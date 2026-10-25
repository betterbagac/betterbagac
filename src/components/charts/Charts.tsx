"use client";

import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar, Doughnut, Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

// Population Trends Line Chart
export function PopulationTrendsChart() {
  const data = {
    labels: ["1990", "1995", "2000", "2007", "2010", "2015", "2020", "2024"],
    datasets: [
      {
        label: "Population",
        data: [18241, 20906, 22353, 24202, 25568, 26936, 31365, 32799],
        borderColor: "#0032a0",
        backgroundColor: "rgba(0, 50, 160, 0.12)",
        fill: true,
        tension: 0.35,
        pointBackgroundColor: "#0032a0",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
        borderWidth: 2.5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(0, 50, 160, 0.92)",
        titleFont: { size: 13, weight: "bold" as const },
        bodyFont: { size: 12 },
        padding: 10,
        cornerRadius: 6,
        displayColors: false,
        callbacks: {
          label: (context: any) =>
            `Population: ${context.raw.toLocaleString()}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 15000,
        ticks: {
          callback: (value: any) => `${(value / 1000).toFixed(0)}K`,
          font: { size: 11 },
          color: "#666",
        },
        grid: {
          color: "rgba(0, 0, 0, 0.04)",
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: { size: 11, weight: "bold" as const },
          color: "#666",
        },
      },
    },
  };

  return (
    <div className="chart-container-full">
      <Line data={data} options={options} />
    </div>
  );
}

// Population Distribution Pie Chart
export function PopulationDistributionChart() {
  const data = {
    labels: [
      "Pag-asa",
      "Parang",
      "Saysain",
      "Banawang",
      "Atilano L. Ricardo",
      "Binukawan",
      "Bagumbayan",
      "Ibaba",
      "Ibis",
      "San Antonio",
    ],
    datasets: [
      {
        data: [3729, 3480, 3468, 3460, 3319, 2814, 2135, 1920, 1884, 1511],
        backgroundColor: [
          "#0032a0",
          "#F77F00",
          "#06A77D",
          "#0077BE",
          "#8B5CF6",
          "#EC4899",
          "#14B8A6",
          "#F59E0B",
          "#6366F1",
          "#003D82",
        ],
        borderColor: "#fff",
        borderWidth: 2,
        hoverBorderWidth: 2,
        hoverOffset: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "58%",
    plugins: {
      legend: {
        position: "right" as const,
        labels: {
          padding: 10,
          usePointStyle: true,
          pointStyle: "circle",
          boxWidth: 12,
          font: { size: 11 },
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 50, 160, 0.92)",
        titleFont: { size: 13, weight: "bold" as const },
        bodyFont: { size: 12 },
        padding: 10,
        cornerRadius: 6,
        callbacks: {
          label: (context: any) => {
            const total = context.dataset.data.reduce(
              (a: number, b: number) => a + b,
              0,
            );
            const pct = ((context.raw / total) * 100).toFixed(1);
            return `${context.raw.toLocaleString()} (${pct}%)`;
          },
        },
      },
    },
  };

  return (
    <div className="chart-container-full">
      <Doughnut data={data} options={options} />
    </div>
  );
}

// Income Sources Doughnut Chart
export function IncomeSourcesChart({
  localValue = 88.85,
  externalValue = 69.62,
  totalIncome = 158.47,
}: {
  localValue?: number;
  externalValue?: number;
  totalIncome?: number;
}) {
  const data = {
    labels: ["Local Sources", "External Sources (NTA)"],
    datasets: [
      {
        data: [localValue, externalValue],
        backgroundColor: ["#10b981", "#0ea5e9"],
        borderColor: "#fff",
        borderWidth: 2,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "62%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(0, 50, 160, 0.92)",
        titleFont: { size: 12, weight: "bold" as const },
        bodyFont: { size: 11 },
        padding: 8,
        cornerRadius: 5,
        callbacks: {
          label: (context: any) =>
            `₱${context.raw.toFixed(2)}M (${((context.raw / totalIncome) * 100).toFixed(1)}%)`,
        },
      },
    },
  };

  return (
    <div
      className="chart-container-doughnut"
      style={{ height: "160px", width: "100%", position: "relative" }}
    >
      <Doughnut data={data} options={options} />
      <div className="chart-center-label">
        <div className="chart-center-value">₱{totalIncome.toFixed(2)}M</div>
        <div className="chart-center-text">Total Income</div>
      </div>
    </div>
  );
}

// Expenditure Allocation Doughnut Chart
export function ExpenditureChart({
  gpsValue = 42.76,
  socialValue = 13.33,
  economicValue = 11.07,
  debtValue = 0.35,
  totalExpense = 67.51,
}: {
  gpsValue?: number;
  socialValue?: number;
  economicValue?: number;
  debtValue?: number;
  totalExpense?: number;
}) {
  const data = {
    labels: [
      "General Public Services",
      "Social Services",
      "Economic Services",
      "Debt Service",
    ],
    datasets: [
      {
        data: [gpsValue, socialValue, economicValue, debtValue],
        backgroundColor: ["#3b82f6", "#8b5cf6", "#f59e0b", "#ef4444"],
        borderColor: "#fff",
        borderWidth: 2,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "62%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(0, 50, 160, 0.92)",
        titleFont: { size: 12, weight: "bold" as const },
        bodyFont: { size: 11 },
        padding: 8,
        cornerRadius: 5,
        callbacks: {
          label: (context: any) =>
            `₱${context.raw.toFixed(2)}M (${((context.raw / totalExpense) * 100).toFixed(1)}%)`,
        },
      },
    },
  };

  return (
    <div
      className="chart-container-doughnut"
      style={{ height: "160px", width: "100%", position: "relative" }}
    >
      <Doughnut data={data} options={options} />
      <div className="chart-center-label">
        <div className="chart-center-value">₱{totalExpense.toFixed(2)}M</div>
        <div className="chart-center-text">Total Expenses</div>
      </div>
    </div>
  );
}

// CMCI Rankings Line Chart
export function CMCIRankingsChart() {
  const data = {
    labels: [
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
      "2023",
      "2024",
    ],
    datasets: [
      {
        label: "Overall Rank",
        data: [172, 655, 246, 166, 200, 218, 116, 359, 44],
        borderColor: "#0032a0",
        backgroundColor: "rgba(0, 50, 160, 0.1)",
        fill: true,
        tension: 0.35,
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(0, 50, 160, 0.92)",
        titleFont: { size: 12, weight: "bold" as const },
        bodyFont: { size: 11 },
        padding: 8,
        cornerRadius: 5,
      },
    },
    scales: {
      y: {
        reverse: true,
        beginAtZero: false,
        min: 0,
        max: 700,
        ticks: {
          callback: (value: any) => `#${value}`,
          font: { size: 10 },
          color: "#666",
        },
        grid: {
          color: "rgba(0, 0, 0, 0.04)",
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: { size: 10 },
          color: "#666",
        },
      },
    },
  };

  return (
    <div className="chart-container-medium">
      <Line data={data} options={options} />
    </div>
  );
}

// CMCI Pillar Score Trends (2016-2024)
export function PillarScoresTrendChart() {
  const data = {
    labels: [
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
      "2023",
      "2024",
    ],
    datasets: [
      {
        label: "Economic Dynamism",
        data: [
          7.7927,
          2.9825,
          null,
          6.5178,
          5.8978,
          4.8484,
          5.0069,
          3.4251,
          4.4403,
        ],
        borderColor: "#0032a0",
        backgroundColor: "#0032a0",
        tension: 0.35,
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2,
        spanGaps: true,
      },
      {
        label: "Government Efficiency",
        data: [
          11.0795,
          5.4594,
          null,
          10.9738,
          10.632,
          9.4709,
          10.8794,
          8.2384,
          8.5939,
        ],
        borderColor: "#f59e0b",
        backgroundColor: "#f59e0b",
        tension: 0.35,
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2,
        spanGaps: true,
      },
      {
        label: "Infrastructure",
        data: [
          7.1863,
          6.5953,
          null,
          5.6495,
          5.4788,
          5.3197,
          3.0484,
          2.9511,
          3.3508,
        ],
        borderColor: "#10b981",
        backgroundColor: "#10b981",
        tension: 0.35,
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2,
        spanGaps: true,
      },
      {
        label: "Resiliency",
        data: [
          null,
          12.19,
          null,
          15.0487,
          16.3804,
          13.3661,
          10.3004,
          10.2982,
          11.2791,
        ],
        borderColor: "#0ea5e9",
        backgroundColor: "#0ea5e9",
        tension: 0.35,
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2,
        spanGaps: true,
      },
      {
        label: "Innovation",
        data: [null, null, null, null, null, null, 3.6167, 2.7567, 7.4175],
        borderColor: "#8b5cf6",
        backgroundColor: "#8b5cf6",
        tension: 0.35,
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2,
        spanGaps: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom" as const,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 15,
          font: { size: 11 },
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 50, 160, 0.92)",
        titleFont: { size: 12, weight: "bold" as const },
        bodyFont: { size: 11 },
        padding: 10,
        cornerRadius: 6,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax: 18,
        ticks: {
          font: { size: 10 },
          color: "#666",
          stepSize: 3,
        },
        grid: {
          color: "rgba(0, 0, 0, 0.04)",
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: { size: 10 },
          color: "#666",
        },
      },
    },
  };

  return (
    <div className="chart-container-full" style={{ height: "320px" }}>
      <Line data={data} options={options} />
    </div>
  );
}

// Barangay Population Horizontal Bar Chart
export function BarangayPopulationChart() {
  const barangayData = [
    { name: "Pag-asa", pop: 3729 },
    { name: "Parang", pop: 3480 },
    { name: "Saysain", pop: 3468 },
    { name: "Banawang", pop: 3460 },
    { name: "Atilano L. Ricardo", pop: 3319 },
    { name: "Binukawan", pop: 2814 },
    { name: "Bagumbayan", pop: 2135 },
    { name: "Ibaba", pop: 1920 },
    { name: "Ibis", pop: 1884 },
    { name: "San Antonio", pop: 1511 },
    { name: "Tabing-Ilog", pop: 1321 },
    { name: "Paysawan", pop: 862 },
    { name: "Binuangan", pop: 752 },
    { name: "Quinawan", pop: 710 },
  ];

  const data = {
    labels: barangayData.map((d) => d.name),
    datasets: [
      {
        label: "Population",
        data: barangayData.map((d) => d.pop),
        backgroundColor: barangayData.map((_, i) => {
          const opacity = 1 - i * 0.07;
          return `rgba(0, 50, 160, ${opacity})`;
        }),
        borderRadius: 3,
        barThickness: 16,
      },
    ],
  };

  const options = {
    indexAxis: "y" as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(0, 50, 160, 0.92)",
        titleFont: { size: 12, weight: "bold" as const },
        bodyFont: { size: 11 },
        padding: 8,
        cornerRadius: 5,
        displayColors: false,
        callbacks: {
          label: (context: any) =>
            `Population: ${context.raw.toLocaleString()}`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(0, 0, 0, 0.04)",
        },
        ticks: {
          callback: (value: any) => `${(value / 1000).toFixed(0)}K`,
          font: { size: 10 },
          color: "#666",
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          font: { size: 10, weight: "bold" as const },
          color: "#444",
        },
      },
    },
  };

  return (
    <div className="chart-container-bar">
      <Bar data={data} options={options} />
    </div>
  );
}
