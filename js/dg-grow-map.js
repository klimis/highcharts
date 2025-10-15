(async () => {
  const topology = await fetch("highcharts/world.topo.json").then((response) =>
    response.json()
  );

  // Fetch data from endpoint instead of hardcoded
  // const data = await fetch("data/map-eu.json").then((response) =>
  //   response.json()
  // );
  const data = await fetch(
    "https://api.sectoral.coin-dev.eu/api/data/map?indicator_code=bop_fdi6_pos&sector_code=a"
  ).then((response) => response.json());

  // Extract EU27 country IDs from the data for easy reference
  const eu27Countries = data
    .filter((item) => item.id !== "jp" && item.id !== "cn" && item.id !== "us")
    .map((item) => item.id);

  // Create the chart
  Highcharts.mapChart("container", {
    credits: {
      enabled: false,
    },
    chart: {
      map: topology,
      // zooming: {
      //   type: null,
      //   mouseWheel: {
      //     enabled: false,
      //   },
      // },
    },

    title: {
      text: "Normandy Index EU27, USA, China, and Japan",
    },

    subtitle: {
      text: "The Normandy Index adopts an approach tailored by and to the action of the European Union. It defines conflict and the numerous stages between perfect peace and total war as a product of factors linked to the main threats identified by the European Union in its external action strategy. The Index blends geopolitical indicators with economic and social data.",
    },

    mapNavigation: {
      enabled: false,
      buttonOptions: {
        verticalAlign: "bottom",
      },
    },
    mapView: {
      projection: {
        name: "WebMercator",
      },
      // Dynamically set zoom and center based on data

      // zoom: data.some((item) => ["jp", "cn", "us"].includes(item.id))
      //   ? 1.5
      //   : 4,
      // center: data.some((item) => ["jp", "cn", "us"].includes(item.id))
      //   ? [20, 45]
      //   : [10, 54],
    },

    colorAxis: {
      min: 0,
      stops: [
        [0, "#E6A532"], // Orange (lowest values)
        [0.25, "#F0CD91"], // Light orange
        [0.5, "#AAB9E1"], // Light blue
        [0.75, "#6487C3"], // Medium blue
        [1, "#2D50A0"], // Dark blue (highest values)
      ],
    },

    tooltip: {
      useHTML: true,
      formatter: function () {
        // Check if it's an EU27 country
        if (eu27Countries.includes(this.point.id)) {
          return " <b>EU27</b><br/>value: <b>" + this.point.value + "</b>";
        } else {
          // For non-EU countries (Japan, China, USA)
          return (
            "<b>" +
            this.point.name +
            "</b><br/>value: <b>" +
            this.point.value +
            "</b>"
          );
        }
      },
    },
    legend: {
      enabled: true,
      floating: true,
      // align: "left",
      //   verticalAlign: "bottom",
      layout: "horizontal",
      //  borderWidth: 2,
      // backgroundColor: "lightgray",
      transparent: true,
      borderColor: "white",
      itemStyle: {
        fontSize: "0.8rem",
      },
    },
    series: [
      {
        // Base layer - all countries without labels
        mapData: topology,
        allAreas: true,
        nullColor: "#f0f0f0",
        borderColor: "#ffffff",
        borderWidth: 0.5,
        name: "All Countries",
        enableMouseTracking: false,
        dataLabels: {
          enabled: false,
        },
      },
      {
        // Data layer - only countries with data and labels
        data: data,
        mapData: topology,
        joinBy: ["hc-key", "id"],
        allAreas: false,

        name: "Countries with data",
        states: {
          hover: {
            color: "#BADA55",
          },
        },
        dataLabels: {
          enabled: false,
          style: {
            textOutline: "none", // Removes the contrasting outline
          },
          backgroundColor: null,
          formatter: function () {
            return this.point.name;
          },
        },
        point: {
          events: {
            mouseOver: function () {
              // Only highlight all EU27 countries when hovering over EU countries
              if (eu27Countries.includes(this.id)) {
                const chart = this.series.chart;
                eu27Countries.forEach((countryId) => {
                  const point = chart.get(countryId);
                  if (point) point.setState("hover");
                });
              }
              // For non-EU countries (Japan, China, USA), just highlight themselves
            },
            mouseOut: function () {
              // Reset hover state for all EU27 countries if this was an EU country
              if (eu27Countries.includes(this.id)) {
                const chart = this.series.chart;
                eu27Countries.forEach((countryId) => {
                  const point = chart.get(countryId);
                  if (point) point.setState("");
                });
              }
              // For non-EU countries, the default behavior will handle the reset
            },
          },
        },
      },
    ],
  });
})();
