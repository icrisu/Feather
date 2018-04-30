export const chartOptions = {
    legend: {
        display: false,
        labels: {
            fontStyle: "'Roboto', sans-serif"
        }
    },
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                    callback: value => {
                        return `$${value}`;
                    }
                }
            }
        ]
    },
    tooltips: {
        mode: 'point',
        callbacks: {
            label: (tooltipItems, data) => { 
                let num = parseFloat(tooltipItems.yLabel);
                return ` $${num}`;
            }
        }                    
    },    
}