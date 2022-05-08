const ourCanvas = $("#ourChart");
const ourPie = $("#ourPie");

new Chart(ourCanvas, {
    type: 'bar',
    data: {
        labels: firstYearsData,
        datasets: [
            {
                label: 'Billions of Units',
                data: firstCountData,
                backgroundColor: 'rgba(54, 162, 235, 0.4)',
                borderWidth: 1,
                borderRadius: 7,
                borderColor: 'rgba(54, 162, 235, 0.9)',
            },
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    boxWidth: 50,
                    color: "black",
                }

            },
        },

    }
});


new Chart(ourPie, {
    type: 'doughnut',
    data: {
        labels: secondNamesData,
        datasets: [
            {
                label: 'Популяция',
                data: secondCountData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.3)',
                    'rgba(54, 162, 235, 0.3)',
                    'rgba(255, 206, 86, 0.3)',
                    'rgba(75, 192, 192, 0.3)',
                    'rgba(153, 102, 255, 0.3)',
                    'rgba(255, 159, 64, 0.3)',
                    'rgba(255, 99, 132, 0.3)',
                    'rgba(54, 162, 235, 0.3)',
                    'rgba(255, 206, 86, 0.3)',
                    'rgba(75, 192, 192, 0.3)',
                ],
                borderWidth: 1,
                borderRadius: 7,
                borderColor: [
                    'rgba(255, 99, 132, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(255, 206, 86, 0.9)',
                    'rgba(75, 192, 192, 0.9)',
                    'rgba(153, 102, 255, 0.9)',
                    'rgba(255, 159, 64, 0.9)',
                    'rgba(255, 99, 132, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(255, 206, 86, 0.9)',
                    'rgba(75, 192, 192, 0.9)'
                ]
            }
        ]
    },

    options: {
        plugins: {
            legend: {
                display: true,
                position: "right",
            }
        }
    }
});