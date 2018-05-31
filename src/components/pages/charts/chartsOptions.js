export const CHARTS_OPTS = {
    barOpts: {
        legend: {
            display: true,
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
        } 
    },
    radarOpts: {
        legend: {
            display: true,
            labels: {
                fontStyle: "'Roboto', sans-serif"
            }
        }        
    },
    poarOpts: {
        title: {
            display: true,
            text: 'Predicted users by location'
        },
        legend: {
            display: true,
            labels: {
                fontStyle: "'Roboto', sans-serif"
            }
        }                
    },
    horizontalBarOpts: {
        legend: { display: false }
    },
    groupedChartOpts: {
        legend: { display: false }      
    } 
}