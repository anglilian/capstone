d3.csv("https://raw.githubusercontent.com/anglilian/capstone/main/website/assets/data/selangor_election_raw.csv").then( function (data){
    var outerRadius = width / 2;
    var innerRadius = 0;
    var arc = d3.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius);
    
    var pie = d3.pie().value(d=>d.Votes);

    //Easy colors accessible via a 10-step ordinal scale
    var color = d3.scaleOrdinal(d3.schemeCategory10);

  //Create SVG element
    var statesvg = d3.select("#stateresults")
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)

    //Set up groups
    var arcs = statesvg.selectAll("g.arc")
                  .data(pie(data))
                  .enter()
                  .append("g")
                  .attr("class", "arc")
                  .attr("transform", "translate(" + outerRadius + "," + outerRadius + ")");

    //Draw arc paths
    arcs.append("path")
        .attr("fill", d=>color(d.data.Party))
        .attr("d", arc);

    //Labels
    arcs.append("text")
        .attr("transform", function(d) {
            var c = arc.centroid(d);
            return "translate(" + c[0]*2.5 +"," + c[1]*2.5 + ")";
    })
        .attr("text-anchor", "middle")
        .text(d=>d.data.Party);      
    
})