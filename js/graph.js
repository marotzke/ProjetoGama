let ctx = document.getElementById("grafico-entregas");
let myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["6-12/abr", "13-19/abr", "20-26/abr", "27-03/jun", '4-10/jun', '11-17/jun', '18-24/jun', '25-31/jun', '1-7/jul'],
    datasets: [
      {
        label: "Quantidade de shields entregue",
        data: [5500, 18200],
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
