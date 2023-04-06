# belly-button-challenge
Module 14 Challenge (Plotly.js)

![belly_button_bacteria](https://user-images.githubusercontent.com/117309455/230499243-298a5833-5da8-4e7c-9902-904a404fd837.jpg)

In this assignment, I was asked to build an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site, which catalogs the microbes that colonize in human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

Requirements:

1. Use the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

    * Use sample_values as the values for the bar chart.
    * Use otu_ids as the labels for the bar chart.
    * Use otu_labels as the hovertext for the chart.

![first id bar chart](https://user-images.githubusercontent.com/117309455/230499307-a2e54c92-e402-4133-8679-49a6a6bad45d.png)


3. Create a bubble chart that displays each sample.

    * Use otu_ids for the x values.
    * Use sample_values for the y values.
    * Use sample_values for the marker size.
    * Use otu_ids for the marker colors.
    * Use otu_labels for the text values.

![first id bubble chart](https://user-images.githubusercontent.com/117309455/230499348-7309e2ff-492e-41ba-8c65-8cdf1dc946a1.png)

4. Display the sample metadata, i.e., an individual's demographic information.

5. Display each key-value pair from the metadata JSON object somewhere on the page.

![first id demo info](https://user-images.githubusercontent.com/117309455/230499393-b88ba0d5-44a7-4562-898e-e342526ec740.png)


6. Update all the plots when a new sample is selected.

7. Deploy your app to a free static page hosting service, such as GitHub Pages.

Optional Advanced Challenge Assignment: 

Adapt the Gauge Chart from https://plot.ly/javascript/gauge-charts/ to plot the weekly washing frequency of the individual.
    * You will need to modify the example gauge code to account for values ranging from 0 through 9.
    * Update the chart whenever a new sample is selected.
 
![first id wash freq](https://user-images.githubusercontent.com/117309455/230499444-7ac7a17c-abb0-4dd8-bd5a-bad85c260cee.png)

