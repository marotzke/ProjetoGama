let ctx = document.getElementById("grafico-entregas");
let myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["6-12/abr"], //, '13-19/abr', '20-26/abr', '27/abr-03/jun'
    datasets: [
      {
        label: "numero de shields entregue",
        data: [5500],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",

        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
