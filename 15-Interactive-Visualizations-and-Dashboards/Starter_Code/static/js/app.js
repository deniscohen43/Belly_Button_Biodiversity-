function buildCharts() {
    d3.json("samples.json").then(function(data) {
  
        var xValues = data.samples[0].sample_values.slice(0,10);
        var yValues = data.samples[0].otu_ids.slice(0,10);
    
        var trace_bar = {
          x: xValues,
          y: yValues,
          orientation: 'h',
          type: 'bar'
        };
    
        var data = [trace_bar];
    
        var layout = {
          xaxis: {title: "OTU ID"},
        };
  
        Plotly.newPlot('bar', data, layout);


    d3.json("samples.json").then(function(data) {
      console.log(data[0]);
      var xValues = data.samples[0].otu_ids;
      var yValues = data.samples[0].sample_values;
      var tValues = data.samples[0].otu_labels;
      var mSize = data.samples[0].sample_values;
      var mClrs = data.samples[0].otu_ids;
  
      var trace_bubble = {
        x: xValues,
        y: yValues,
        text: tValues,
        mode: 'markers',
        marker: {
          size: mSize,
          color: mClrs
        }
      };
  
      var data = [trace_bubble];
  
      var layout = {
        xaxis: {title: "OTU ID"}
      };

      Plotly.newPlot('bubble', data, layout);
  });
});  
}

buildCharts()


  