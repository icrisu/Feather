export const DEMO_DATA = {
    barData: {
        labels: ["7am", "8am", "9am", "10am", "11am", "1pm", "2pm"],
        datasets: [
            {
                "label": "Amazon",
                "data": [120, 130, 180, 220, 190, 160, 130],
                "backgroundColor": "rgba(254, 189, 109, 1)",
                "borderColor": "rgba(254, 189, 109, 1)",
                "borderWidth": 2
            },
            {
                "label": "Shopify",
                "data": [20, 50, 95, 150, 70, 30, 40],
                "backgroundColor": "rgba(153, 102, 255, 1)",
                "borderColor": "rgba(153, 102, 255, 1)",
                "borderWidth": 2
            }    
        ]    
    },
    lineData: {
        labels: ["7am", "8am", "9am", "10am", "11am", "1pm", "2pm"],
        datasets: [
            {
                "label": "Amazon",
                "data": [120, 130, 180, 220, 190, 160, 130],
                "backgroundColor": "rgba(254, 189, 109, .1)",
                "borderColor": "rgba(254, 189, 109, 1)",
                "borderWidth": 2
            },
            {
                "label": "Shopify",
                "data": [20, 50, 95, 150, 70, 30, 40],
                "backgroundColor": "rgba(153, 102, 255, .1)",
                "borderColor": "rgba(153, 102, 255, 1)",
                "borderWidth": 2
            }    
        ]          
    },
    radarData: {
        labels: ['Sales', 'New users', 'Recurring', 'Discounts'],
        datasets: [
            {
                label: 'Shopify',
                data: [200, 170, 130, 90],
                backgroundColor: "rgba(254, 189, 109, .1)",
            },
            {
                label: 'Amazon',
                backgroundColor: "rgba(153, 102, 255, .1)",
                data: [150, 200, 100, 50]
            }            
        ]        
    },
    pieData: {
        datasets: [{
            backgroundColor: ["rgba(254, 189, 109, 1)", "rgba(153, 102, 255, 1)", "#3cba9f"],
            data: [90, 70, 30]
        }],
        labels: [
            'Shopify',
            'Amazon',
            'Other'
        ]
    },
    doughnutData: {
        datasets: [{
            backgroundColor: ["rgba(254, 189, 109, 1)", "rgba(153, 102, 255, 1)", "rgb(254, 122, 135)"],
            data: [80, 70, 20]
        }],
        labels: [
            'Shopify',
            'Amazon',
            'Other'
        ]
    },
    polarData: {
        labels: ["Asia", "Europe", "Latin America", "North America"],
        datasets: [
          {
            backgroundColor: ["rgba(254, 189, 109, 1)", "rgba(153, 102, 255, 1)", "rgb(254, 122, 135)", "#3cba9f"],
            data: [400, 1200, 800, 1500]
          }
        ]        
    },
    horizontalBarData: {
        labels: ["10am", "9am", "8am", "7am"],
        datasets: [
            {
                "label": "Amazon",
                "data": [120, 130, 180, 220],
                "backgroundColor": "rgba(254, 189, 109, 1)",
                "borderColor": "rgba(254, 189, 109, 1)",
                "borderWidth": 2
            },
            {
                "label": "Shopify",
                "data": [80, 50, 95, 150],
                "backgroundColor": "rgba(153, 102, 255, 1)",
                "borderColor": "rgba(153, 102, 255, 1)",
                "borderWidth": 2
            }    
        ]        
    },
    groupedChartData: {
        labels: ["2pm", "3pm", "4pm", "5pm"],
        datasets: [{
            label: "Amazon",
            type: "line",
            borderColor: "rgb(254, 122, 135)",
            data: [408,547,675,734],
            fill: false
          }, {
            label: "Shopify",
            type: "line",
            borderColor: "#3cba9f",
            data: [133,221,783,2478],
            fill: false
          }, {
            label: "Amazon",
            type: "bar",
            backgroundColor: "rgba(254, 189, 109, 1)",
            data: [408,547,675,734],
          }, {
            label: "Shopify",
            type: "bar",
            backgroundColor: "rgba(153, 102, 255, 1)",
            backgroundColorHover: "#3cba9f",
            data: [133,221,783,2478]
          }
        ]       
    }     
}

