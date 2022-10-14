async function scatterPlot() {

    var dataset1 = [[22, 20], [20, 10], [66, 44], [53, 80], [24, 12], [80, 72], [10, 76], [63, 50], [10, 15]];

    const width = 600;
    let dimensions = {
        height: width * 0.8,
        width: width,
        margin: {
            top: 15,
            right: 15,
            bottom: 15,
            left: 15
        }
    }

    dimensions.boundedWidth = dimensions.width
        - dimensions.margin.left
        - dimensions.margin.right
    dimensions.boundedHeight = dimensions.height
        - dimensions.margin.top
        - dimensions.margin.bottom

    const wrapper = d3.select("#wrapper")
        .append("svg")
        .attr("width",width)
        .attr("height", dimensions.height);

    const bounds = wrapper.append("g")

    var xScale = d3.scaleLinear().domain([0, 200]).range([0, width]);
    var yScale = d3.scaleLinear().domain([0, 200]).range([0,dimensions.height]);

    bounds.append('text')
        .attr('x', width/2 - 100)
        .attr('y', 100)
        .attr('text-anchor', 'middle')
        .style('font-family', 'TimesNew')
        .style('font-size', 20)
        .text('Scatter Plot');


    bounds.append("g")
        .attr("transform", "translate(0," + 460 + ")")
        .call(d3.axisBottom(xScale));

    bounds.append("g")
        .style("transform",`translateX(${dimensions.margin.left}px)`)
        .call(d3.axisLeft(yScale));

    bounds.append('g')
        .selectAll("dot")
        .data(dataset1)
        .enter()
        .append("circle")
        .attr("cx", function (d) { return xScale(d[0]); } )
        .attr("cy", function (d) { return yScale(d[1]); } )
        .attr("r", 4)
        .style("fill", "#000000");
}

function reloadPage() {
    window.location.reload();
}
