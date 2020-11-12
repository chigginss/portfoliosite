// import React, { Component } from 'react';
// import * as d3 from 'd3';
// import './css/chart.css';

// class BarChart extends Component {
//     componentDidMount() {
//         const data = {
//           0: {name: "JavaScript", value: 0.90},
//           1: {name: "Python", value: 0.60},
//           2: {name: "HTML", value: 0.70}
//         }
//         this.drawBarChart(data)
//     }

//     drawBarChart (data) {
//         console.warn(d3)4
//         var margin = {top: 20, right: 20, bottom: 30, left: 40},
//             width = 500 - margin.left - margin.right,
//             height = 350 - margin.top - margin.bottom;

//         var x = d3.scaleBand()
//             .domain(["foo", "bar", "baz", "foobar", "foobaz"])
//             .rangeRound([0, width]);

//         var y = d3.scaleLinear()
//             .domain(["foo", "bar", "baz", "foobar", "foobaz"])
//             .range([height, 0]);

//         var xAxis = d3.axisBottom()
//             .scale(100);

//         var yAxis = d3.axisLeft()
//             .scale(200);;

//         const svgCanvas = d3.select(this.refs.canvas)
//             .append("svg")
//             .attr("width", width + margin.left + margin.right)
//             .attr("height", height + margin.top + margin.bottom)
//             .style("background-color", "#0f0d25")
//             .style("border", "1px solid white")
//           .append("g")
//             .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//         svgCanvas.append("g")
//           .attr("class", "x axis")
//           .attr("transform", "translate(0," + height + ")")
//           .call(xAxis);

//         svgCanvas.append("g")
//           .attr("class", "y axis")
//           .call(yAxis)
//         .append("text")
//           .attr("transform", "rotate(-90)")
//           .attr("y", 6)
//           .attr("dy", ".71em")
//           .style("text-anchor", "end")
//           .style("color", "black")
//           .text("Frequency");

//         svgCanvas.selectAll(".bar")
//           .data(data)
//           .style("color", "black")
//         .enter().append("rect")
//           .attr("class", "bar")
//           .attr("x", function(d) { return x(d.name); })
//           .attr("width", x.bandwidth())
//           .attr("y", function(d) { return y(d.value); })
//           .attr("height", function(d) { return height - y(d.value); });

//         d3.select("input").on("change", change);

//         var sortTimeout = setTimeout(function() {
//             d3.select("input").property("checked", true).each(change);
//         }, 2000);

//         function change() {
//             clearTimeout(sortTimeout);

//             // Copy-on-write since tweens are evaluated after a delay.
//             var x0 = x.domain(data.sort(this.checked
//                 ? function(a, b) { return b.value - a.value; }
//                 : function(a, b) { return d3.ascending(a.name, b.name); })
//                 .map(function(d) { return d.name; }))
//                 .copy();

//             svgCanvas.selectAll(".bar")
//                 .sort(function(a, b) { return x0(a.name) - x0(b.name); });

//             var transition = svgCanvas.transition().duration(750),
//             delay = function(d, i) { return i * 50; };

//             transition.selectAll(".bar")
//                 .delay(delay)
//                 .attr("x", function(d) { return x0(d.name); });

//             transition.select(".x.axis")
//                 .call(xAxis)
//                 .selectAll("g")
//                 .delay(delay);
//         }
//     }
//     render() { return <div ref="canvas"></div> }
// }
// export default BarChart;