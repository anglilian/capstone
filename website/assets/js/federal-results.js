// set the dimensions and margins of the graph
var margin = {top: 30, right: 30, bottom: 70, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var formatDecimal = d3.format(",.2f");

// append the svg object to the body of the page
var federalsvg = d3.select("#federalresults")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Initialize the X axis
const x = d3.scaleBand()
  .range([ 0, width ])
  .padding(0.2);
const xAxis = federalsvg.append("g")
  .attr("transform", `translate(0,${height})`)
;

// Initialize the Y axis
const y = d3.scaleLinear()
  .range([ height, 0])
    .domain([0, 100 ]);
const yAxis = federalsvg.append("g")
    .call(d3.axisLeft(y));


const percentage = "https://raw.githubusercontent.com/anglilian/capstone/main/website/assets/data/federal_election_percent.csv"

const raw = "https://raw.githubusercontent.com/anglilian/capstone/main/website/assets/data/federal_election_raw.csv"

// A function that create / update the plot for a given variable:
function update(selectedLink) {
    // Parse the Data
  d3.csv(selectedLink).then( function(data) {

    // List of subgroups = header of the csv files = political parties here
  const parties = data.columns.slice(1);

  // List of groups = elections here = value of the first column called group -> I show them on the X axis
  const elections = data.map(d => (d.Party));
  
  // X axis
    x.domain(elections);
    xAxis.call(d3.axisBottom(x));
    
       // Another scale for subgroup position?
  const xSubgroup = d3.scaleBand()
    .domain(parties)
    .range([0, x.bandwidth()])
    .padding([0.05])
// color palette = one color per subgroup
  const color = d3.scaleOrdinal()
    .domain(parties)
    .range(['#e41a1c','#377eb8'])
  
 var legend = federalsvg.selectAll(".legend")
                .data(parties)
                .enter().append("g")
                .attr("class", "legend")
                .attr("transform", function (d, i) { return "translate(0," + i * 20 + ")"; });
    
            legend.append("rect")
                .attr("x", width - 18)
                .attr("width", 18)
                .attr("height", 18)
                .style("fill", d => color(d));
    
            legend.append("text")
                .attr("x", width - 24)
                .attr("y", 9)
                .attr("dy", ".35em")
                .style("text-anchor", "end")
                .text(d => d);
    
  const state = federalsvg.selectAll(".state")
    .data(data)
  
   state.enter()
    .append("g")
    .attr("class", "state")
   .merge(state)
    // Enter in data = loop group per group
      .attr("transform", d => `translate(${x(d.Party)}, 0)`)
        .each(function (d){
        const g = d3.select(this);
      g.selectAll('rect').remove();
       g.selectAll(".bar-label").remove();
        Object.keys(d)
        .filter(key => key !=="Party")
        .forEach(key => {
            g.append("rect")
          .attr("x", d => xSubgroup(key))
          .attr("y", d => y(d[key]))
          .attr("width", xSubgroup.bandwidth())
          .attr("height", d => height - y(d[key]))
          .attr("fill", d => color(key));
            g.append("text")
            .attr("y", d => y(d[key]))
            .attr("dy", '-1em')
            .attr("class","bar-label")
            .style("font-size", "xx-small")
            .text(function(d){
                if (selectedLink===percentage){
                    return formatDecimal(d[key])
                } else {
                    return d[key]
                }
            })
            .attr("x", d => xSubgroup(key)+xSubgroup.bandwidth()/2-d3.select(this).node().getBBox().width/4)
        })
    })
            
// state.exit().remove(); 
      
// Super majority
    if (selectedLink === percentage){
        federalsvg.append("line")
            .attr("class", "supermajority")
            .attr("x1", 0)
            .attr("x2", width)
            .attr("y1", y(100*2/3))
            .attr("y2", y(100*2/3))
            .style("stroke-dasharray", ("5 5"))
            .style("stroke-width", "0.1rem")
            .style("stroke", "black")
            .style('stroke-opacity', 0.6)
        federalsvg.append('text')
            .attr("class", "supermajority")
            .attr('x', width)
            .attr('y', y(100*2/3))
            .attr('dy', '-1em')
            .attr('text-anchor', 'end')
            .text("2/3 Supermajority")
            .style('font-size', 'x-small')
        var ylabelText = "Percentage Votes"
    } else{
        d3.selectAll(".supermajority").remove()
        var ylabelText = "Total Votes"
    }
    
      // Axis labels
    d3.select(".y-label").remove()
    federalsvg.append("text")
        .attr("class", "y-label")
        .attr("y", 0 - margin.left)
        .attr("x",0 - (height / 2))
        .attr("dy", "1.5em")
        .text(ylabelText);
  
})
    if (selectedLink == raw){
        $("#percentagebutton").css('background-color', 'var(--bs-gray-500)');
        $("#rawbutton").css('background-color', 'var(--bs-gray-600)');

    } else {
            $("#percentagebutton").css('background-color', 'var(--bs-gray-600)');
        $("#rawbutton").css('background-color', 'var(--bs-gray-500)');
    }
}

// Initialize plot
update(percentage)
    
    
// svg.append("text")
//     .attr("class", "x-label")
//     .attr("transform", "translate(" + (width / 2) + " ," + (height + margin.bottom) + ")")
//     .text("Political Party");