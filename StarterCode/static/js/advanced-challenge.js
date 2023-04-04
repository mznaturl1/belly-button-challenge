// Fetch the JSON data and console.log
d3.json(url).then(function(data) {
  console.log(data);
});

// Init dashboard at start up
function init() {

    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");

    // Use D3 to get sample names and populate the dropdown
    d3.json(url).then((data) => {
        
        // Set a variable for sample names
        let names = data.names;

        // Add samples to dropdown menu
        names.forEach((id) => {

            // Log the value of id for each loop iteration
            console.log(id);

            dropdownMenu.append("option")
            .text(id)
            .property("value",id);
        });

        // Set the first sample from the list
        let sample_one = names[0];

        // Log the value of sample_one
        console.log(sample_one);

        // Build the initial plots
        buildGaugeChart(sample_one);
    });
};

// Function that builds the gauge chart
function buildGaugeChart(sample) {

    // Use D3 to retrieve all data
    d3.json(url).then((data) => {

        // Retrieve all metadata
        let metadata = data.metadata;

        // Filter based on the sample value
        let value = metadata.filter(result => result.id == sample);

        // Log metadata array objects after filtering
        console.log(value)

        // Get first index from the array
        let valueData = value[0];

        // Use Object.entries to get the key/value pairs and put into the demographics box on the page
        let washFrequency = Object.values(valueData)[6];
        
        // Set up the trace for the gauge chart
        let trace2 = {
            value: washFrequency,
            domain: {x: [0,1], y: [0,1]},
            title: {
                text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week",
                font: {color: "black", size: 16}
            },
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                axis: {range: [0,10], tickmode: "linear", tick0: 2, dtick: 2},
                bar: {color: "black"},
                steps: [
                    {range: [0, 1], color: "rgba(27,161,187,0.7)"},
                    {range: [1, 2], color: "rgba(54,170,191,0.6)"},
                    {range: [2, 3], color: "rgba(80,178,194,0.6)"},
                    {range: [3, 4], color:  "rgba(107,187,198,0.5)"},
                    {range: [4, 5], color:  "rgba(134,196,201,0.5)"},
                    {range: [5, 6], color: "rgba(160,204,205,0.4)"},
                    {range: [6, 7], color: "rgba(187,213,208,0.4)"},
                    {range: [7, 8], color:  "rrgba(213,221,212,0.3)"},
                    {range: [8, 9], color: "rgba(240,230,215,0.3)"},
                    {range: [9, 10], color: "rgba(225,225,225,0)"},
                ]
            } 
        };

        {
            // Animation object for guage
            plot: {
              animation: { 
                effect: 2, 
                method; 3, 
                sequence; 1,
                speed; 3000
              }
            }
          };

        // Set up the Layout
        let layout = {
            width: 400, 
            height: 400,
            margin: {t: 0, b:0}
        };

        // Call Plotly to plot the gauge chart
        Plotly.newPlot("gauge", [trace2], layout)
    });
};

// Call the initialize function
init();