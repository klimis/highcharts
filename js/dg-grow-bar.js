(async () => {
  // Get indicator_code and sector_code from URL parameters
  //http://charts.europa.eu/dg-grow-bar.html?indicator_code=nama_10_lp_a21&sector_code=a
  const urlParams = new URLSearchParams(window.location.search);
  const indicator_code = urlParams.get("indicator_code") || "sbs_sc_ovw";
  const sector_code = urlParams.get("sector_code") || "b";

  const url = `https://api.sectoral.coin-dev.eu/api/data/bar?indicator_code=${indicator_code}&sector_code=${sector_code}`;

  const response = await fetch(url).then((response) => response.json());
  const data = response.series1;
  const dotData = response.series2;

  // const dotData = await fetch("data/dg-grow-bar-first.json").then(
  //   (response) => response.json()
  // );

  // Map data to Highcharts format: {name, y}
  const chartData = data.map((item) => ({
    name: item.sector_name,
    y: item.value,
  }));
  const chartDotData = dotData.map((item) => ({
    name: item.sector_name,
    y: item.value,
    year: item.year,
  }));

  Highcharts.chart("container", {
    credits: {
      enabled: false,
    },
    chart: {
      type: "column",
      events: {
        load: function () {
          var chart = this;
          var barSeries = chart.series[0];
          var dotSeries = chart.series[1];

          // Build a lookup for dots by category
          var dotLookup = {};
          dotSeries.data.forEach(function (dotPoint) {
            dotLookup[dotPoint.category] = dotPoint;
          });

          // Draw lines from bar tips to corresponding dots
          barSeries.data.forEach(function (barPoint) {
            var cat = barPoint.category;
            var dotPoint = dotLookup[cat];

            if (dotPoint) {
              var x = barPoint.plotX + chart.plotLeft;
              var y1 = barPoint.plotY + chart.plotTop; // Bar tip (top of bar)
              var y2 = dotPoint.plotY + chart.plotTop; // Dot position

              chart.renderer
                .path(["M", x, y1, "L", x, y2])
                .attr({
                  stroke: "grey",
                  "stroke-width": 2,
                  zIndex: 5,
                })
                .add();
            }
          });
        },
      },
    },
    title: {
      text: "Sectors for " + indicator_code + " and sector " + sector_code,
    },
    subtitle: {
      text: "Source:jrc",
    },
    xAxis: {
      type: "category",
      labels: {
        autoRotation: [-45, -90],
        style: {
          fontSize: "13px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "",
      },
    },
    legend: {
      enabled: true,
    },
    tooltip: {
      pointFormat: "Population : <b>{point.y:.1f} millions</b>",
    },
    series: [
      {
        name: "Sectors",
        type: "column",

        colorByPoint: false,
        groupPadding: 0,
        data: chartData,
      },
      {
        name: "First Series (Dots)",
        type: "scatter",
        color: "black",
        marker: {
          radius: 4,
          symbol: "circle",
        },
        data: chartDotData,
        showInLegend: false,
        tooltip: {
          pointFormat:
            "value: <b>{point.y:.2f}</b><br/>Year: <b>{point.year}</b>",
        },
        dataLabels: {
          enabled: false,
        },
      },
    ],
  });
})();
