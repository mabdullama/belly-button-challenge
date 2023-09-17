// Define a function to create the initial Gauge Chart with a default value
function createGauge(washingFrequency) {
    
    var data = [
        {
            type: "indicator",
            mode: "gauge+number",
            value: washingFrequency,
            title: { text: "Belly Button Washing Frequency", font: { size: 24 } },
            gauge: {
                axis: { range: [0, 9], tickvals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
                steps: [
                    { range: [0, 1], color: "rgba(255, 255, 255, 0)" },
                    { range: [1, 2], color: "rgba(232, 226, 202, .5)" },
                    { range: [2, 3], color: "rgba(210, 206, 145, .5)" },
                    { range: [3, 4], color: "rgba(202, 209, 95, .5)" },
                    { range: [4, 5], color: "rgba(170, 202, 42, .5)" },
                    { range: [5, 6], color: "rgba(110, 154, 22, .5)" },
                    { range: [6, 7], color: "rgba(14, 127, 0, .5)" },
                    { range: [7, 8], color: "rgba(10, 100, 0, .5)" },
                    { range: [8, 9], color: "rgba(0, 80, 0, .5)" }
                ],
            
            },
        },
    ];

    var layout = {
        width: 400,
        height: 300,
        margin: { t: 25, r: 25, l: 25, b: 25 },
        
    };

    Plotly.newPlot("gauge", data, layout);
}

// Define a function to update the Gauge Chart with a new value
function updateGauge(washingFrequency) {
    Plotly.restyle("gauge", "value", [washingFrequency]);
}

// You can also create the gauge initially with a default value
createGauge(0); // Set the initial value as needed

// Export the updateGauge function so it can be used in other parts of your code if necessary
module.exports = {
    updateGauge: updateGauge,
};
