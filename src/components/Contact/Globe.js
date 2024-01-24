import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { geoOrthographic, geoPath } from 'd3-geo';
import * as topojson from 'topojson-client'; 

const Globe = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const width = 500;
    const height = 500;

    // Create the SVG container
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    // Create a geoOrthographic projection
    const projection = geoOrthographic()
      .translate([width / 2, height / 2])
      .scale(width / 2 - 10)
      .precision(0.1);

    // Create a path generator using the projection
    const path = geoPath().projection(projection);

    // Append a circle for the globe
    svg.append('circle')
      .attr('cx', width / 2)
      .attr('cy', height / 2)
      .attr('r', width / 2 - 10)
      .attr('fill', 'transparent');

    // Load world data
    d3.json('https://unpkg.com/world-atlas@latest/countries-110m.json').then((world) => {
      // Draw countries
      svg.selectAll('path')
        .data(topojson.feature(world, world.objects.countries).features)
        .enter().append('path')
        .attr('d', path)
        .attr('fill', 'white')
        .attr('stroke', 'white');
    });

    // Canada marker
    const canadaCoordinates = [-106.3468, 56.1304];
    const marker = svg.append('circle')
      .attr('r', 6)
      .attr('fill', 'darkblue');
   
    // Rotate the globe
    d3.timer(() => {
      const rotate = projection.rotate();
      rotate[0] += 0.2; // Adjust the rotation speed
      projection.rotate(rotate);
      svg.selectAll('path').attr('d', path); // Update path with new projection

      // Calculate marker position on the rotated globe
      const markerPosition = projection(canadaCoordinates);
      marker.attr('cx', markerPosition[0]).attr('cy', markerPosition[1]);
    });
  }, []);

  return <svg ref={svgRef}></svg>;
};

export default Globe;
