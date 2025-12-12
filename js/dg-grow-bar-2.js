(async () => {
  // Get indicator_code and sector_code from URL parameters
  //http://charts.europa.eu/dg-grow-bar.html?indicator_code=nama_10_lp_a21&sector_code=a
  const urlParams = new URLSearchParams(window.location.search);
  const indicator_code = urlParams.get("indicator_code") || "sbs_sc_ovw";
  const sector_code = urlParams.get("sector_code") || "b";

  const indicatorUrl = `https://api.sectoral.coin-dev.eu/api/indicators/${indicator_code}`;

  const responseIndicator = await fetch(indicatorUrl).then((response) =>
    response.json()
  );
  const dataIndicator = responseIndicator.data;

  const url = `https://api.sectoral.coin-dev.eu/api/data/bar?indicator_code=${indicator_code}&sector_code=${sector_code}`;

  const response = await fetch(url).then((response) => response.json());
  const metadata = response.metadata;
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
  
Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Historic World Population by Region'
    },
    subtitle: {
        text: 'Source: <a ' +
            'href="https://en.wikipedia.org/wiki/List_of_continents_and_continental_subregions_by_population"' +
            'target="_blank">Wikipedia.org</a>'
    },
    xAxis: {
        categories: ['Africa', 'America', 'Asia', 'Europe'],
        title: {
            text: null
        },
        gridLineWidth: 1,
        lineWidth: 0
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Population (millions)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: ' millions'
    },
    plotOptions: {
        bar: {
            borderRadius: '50%',
            dataLabels: {
                enabled: true
            },
            groupPadding: 0.1
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: 'var(--highcharts-background-color, #ffffff)',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'hours per',
        data: [632, 727, 3202, 721]
    }]
});

  Highcharts.chart("container1", {
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
      text: dataIndicator.name + " for  " + metadata.sector_name,
    },
    subtitle: {
      text: dataIndicator.description,
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
      pointFormat: dataIndicator.unit + " : <b>{point.y:.1f} millions</b>",
    },
    series: [
      {
        name: metadata.sector_name,
        type: "column",

        colorByPoint: false,
        groupPadding: 0,
        data: chartData,
      },
      {
        name: "First  year with data",
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
            dataIndicator.unit +
            ": <b>{point.y:.2f}</b><br/>Year: <b>{point.year}</b>",
        },
        dataLabels: {
          enabled: false,
        },
      },
    ],
  });
})();
