// Description: This script creates a master-detail chart for SDG emissions data.
function env() {
  if (document.location.origin === "http://charts.europa.eu") {
    return "http://api.sectoral.kl";
  } else {
    return "https://api.sectoral.coin-dev.eu";
  }
}

(async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const indexCode = urlParams.get("indicator_code") || "bd_hg";
  const sectorCode = urlParams.get("sector_code") || "B-S_X_O_S94";
  // Load the datasets for the main EU series

 const indicatorUrl = `https://api.sectoral.coin-dev.eu/api/indicators/${indexCode}`;

  const responseIndicator = await fetch(indicatorUrl).then((response) =>
    response.json()
  );
  const dataIndicator = responseIndicator.data;

  const data = await fetch(
    env() +
      "/api/data/line?indicator_code=" +
      indexCode +
      "&sector_code=" +
      sectorCode +
      "&country_code=eu27"
  ).then((response) => response.json());
  let indexInfo = await fetch(env() + "/api/indicators/" + indexCode).then(
    (response) => response.json()
  );
  indexInfo = indexInfo.data;
  console.log("Index Info:", indexInfo);
  let detailChart;
  let masterChart;

  // create the detail chart with only the EU series initially
  function createDetail(masterChartRef) {
    const detailData = [];
    const detailStart = data[0][0];

    masterChartRef.series[0].data.forEach((point) => {
      if (point.x >= detailStart) {
        detailData.push([point.x, point.y]);
      }
    });

    detailChart = Highcharts.chart("detail-container", {
      chart: {
        marginBottom: 120,
        reflow: false,
        marginLeft: 50,
        marginRight: 20,
        style: { position: "absolute" },
      },
      credits: { enabled: false },
      title: { text: indexInfo.name, align: "left" },
      subtitle: { text: "desc", align: "left" },
      xAxis: { type: "datetime" },
      yAxis: { title: { text: null }, maxZoom: 0.1 },
      tooltip: {
        shared: false,
        headerFormat:
          '<span style="font-size: 10px">{point.key:%Y}</span><br/>',
        pointFormat:
          '<span style="color:{series.color}">\u25CF</span> <b>{series.name}</b>: {point.y:.2f} ' + dataIndicator.unit + '<br/>',
      },
      legend: { enabled: false },
      plotOptions: {
        series: {
          marker: {
            enabled: false,
            states: { hover: { enabled: true, radius: 3 } },
          },
          dataLabels: {
            enabled: true,
            formatter: function () {
              //return Highcharts.numberFormat(this.y, 2);
              // Only show labels for first and last points
              if (
                this.point.index === 0 ||
                this.point.index === this.series.data.length - 1
              ) {
                return Highcharts.numberFormat(this.y, 2);
              }
              return null;
            },
            style: {
              fontSize: "12px",
              fontWeight: "bold",
              color: "white",
              textOutline: "none",
            },
            backgroundColor: "#a24d59ff",
            allowOverlap: true,
            borderRadius: 3,
            padding: 5,
            zIndex: 10,
          },
        },
      },
      series: [{ id: "eu", name: "EU27", data: detailData, color: "#945962" }],
      exporting: { enabled: false },
    });
  }

  // create the master chart with only the EU series initially
  function createMaster() {
    const maskFill = "rgba(0,0,255,0.05)";
    masterChart = Highcharts.chart(
      "master-container",
      {
        chart: {
          reflow: false,
          borderWidth: 0,
          backgroundColor: null,
          marginLeft: 50,
          marginRight: 20,
          zooming: { type: "x" },
          events: {
            selection: function (event) {
              const extremesObject = event.xAxis[0],
                min = extremesObject.min,
                max = extremesObject.max,
                detailData = [],
                xAxis = this.xAxis[0];

              // Update detail data for EU
              this.series[0].data.forEach((point) => {
                if (point.x > min && point.x < max) {
                  detailData.push([point.x, point.y]);
                }
              });

              // Update detail data for any additional series
              if (this.series.length > 1) {
                for (let i = 1; i < this.series.length; i++) {
                  this.series[i].data.forEach((point) => {
                    if (point.x > min && point.x < max) {
                      const tgtSeries = detailChart.series.find(
                        (s) => s.options.id === this.series[i].options.id
                      );
                      if (tgtSeries) {
                        const currentData = [];
                        this.series[i].data.forEach((pt) => {
                          if (pt.x > min && pt.x < max) {
                            currentData.push([pt.x, pt.y]);
                          }
                        });
                        tgtSeries.setData(currentData);
                      }
                    }
                  });
                }
              }

              xAxis.removePlotBand("mask-before");
              xAxis.addPlotBand({
                id: "mask-before",
                from: data[0][0],
                to: min,
                color: maskFill,
              });
              xAxis.removePlotBand("mask-after");
              xAxis.addPlotBand({
                id: "mask-after",
                from: max,
                to: data[data.length - 1][0],
                color: maskFill,
              });

              detailChart.series[0].setData(detailData);
              return false;
            },
          },
        },
        title: { text: null },
        accessibility: { enabled: false },
        xAxis: {
          type: "datetime",
          showLastTickLabel: true,
          maxZoom: 14 * 24 * 3600000,
          plotBands: [
            {
              id: "mask-before",
              from: data[0][0],
              to: data[data.length - 1][0],
              color: maskFill,
            },
          ],
          title: { text: null },
        },
        yAxis: {
          gridLineWidth: 0,
          labels: { enabled: false },
          title: { text: null },
          min: 0.6,
          showFirstLabel: false,
        },
        legend: { enabled: false },
        credits: { enabled: false },
        plotOptions: {
          series: {
            fillColor: {
              linearGradient: [0, 0, 0, 70],
              stops: [
                [0, Highcharts.getOptions().colors[0]],
                [1, "rgba(255,255,255,0)"],
              ],
            },
            lineWidth: 1,
            marker: { enabled: false },
            shadow: false,
            states: { hover: { lineWidth: 1 } },
            enableMouseTracking: false,
          },
        },
        series: [
          {
            id: "eu",
            type: "line",
            name: "EU",
            pointInterval: 24 * 3600 * 1000,
            pointStart: data[0][0],
            data: data.map((point) => [point[0], point[1]]),
            color: "#945962",
          },
        ],
        exporting: { enabled: false },
      },
      (chart) => {
        createDetail(chart);
      }
    );
  }

  // Make the container smaller and add a second container for the master chart
  const container = document.getElementById("container");
  container.style.position = "relative";
  container.innerHTML +=
    '<div id="detail-container"></div><div id="master-container"></div>';

  // Create the master chart; its callback creates the detail chart
  createMaster();

  const response = await fetch(
    env() +
      "/api/countries/by-indicator?indicator_code=" +
      indexCode +
      "&sector_code=" +
      sectorCode
  );
  let countryData = await response.json();

  countryData = countryData.data;
  const urlMapping = {};
  countryData.forEach((country) => {
    urlMapping[country.code.toLowerCase()] =
      env() +
      "/api/data/line?indicator_code=" +
      indexCode +
      "&sector_code=" +
      sectorCode +
      "&country_code=" +
      country.code;
  });

  const colorMapping = {
    us: "#4C7C9A",
    jp: "#008000",
    eu27: "#FF0000",
  };

  // Listen for changes in the select menu to add the chosen country dynamically
  document
    .getElementById("series-selector")
    .addEventListener("change", async (e) => {
      const country = e.target.value;
      if (country !== "none") {
        if (!masterChart.series.find((s) => s.options.id === country)) {
          try {
            console.log("Fetching data for", country);
            const fetchedData = await fetch(urlMapping[country]).then(
              (response) => response.json()
            );
            const seriesName =
              country.charAt(0).toUpperCase() + country.slice(1);
            console.log("country" + country);
            const seriesColor =
              colorMapping[country] ||
              "#" + Math.floor(Math.random() * 16777215).toString(16);

            // Add series to master chart
            masterChart.addSeries({
              id: country,
              type: "line",
              name: seriesName,
              pointInterval: 24 * 3600 * 1000,
              pointStart: fetchedData[0][0],
              data: fetchedData.map((point) => [point[0], point[1]]),
              color: seriesColor,
            });

            // Add series to detail chart
            detailChart.addSeries(
              {
                id: country,
                name: seriesName,
                data: fetchedData.map((point) => [point[0], point[1]]),
                color: seriesColor,
                dataLabels: {
                  enabled: true,
                  backgroundColor: seriesColor,
                },
              },
              true
            ); // redraw immediately
          } catch (error) {
            console.error("Error fetching data for", country, error);
          }
        }
      }
    });

  // Add event listener for the Reset Zoom button
  document.getElementById("reset-zoom").addEventListener("click", () => {
    const fullMin = data[0][0];
    const fullMax = data[data.length - 1][0];

    // Reset master chart's zoom to the full range
    masterChart.xAxis[0].setExtremes(fullMin, fullMax);

    // Update each detail chart series to reflect the full master data
    masterChart.series.forEach((series) => {
      const newData = series.data.map((point) => [point.x, point.y]);
      const tgtSeries = detailChart.series.find(
        (s) => s.options.id === series.options.id
      );
      if (tgtSeries) {
        tgtSeries.setData(newData, false);
      }
    });
    detailChart.redraw();
  });

  // Populate the series-selector from API.
  fetch(
    env() +
      "/api/countries/by-indicator?indicator_code=" +
      indexCode +
      "&sector_code=" +
      sectorCode
  )
    .then((response) => response.json())
    .then((countries) => {
      const selector = document.getElementById("series-selector");
      // Clear any existing options and add a default option.
      selector.innerHTML = "";
      const defaultOption = document.createElement("option");
      defaultOption.value = "none";
      defaultOption.textContent = "Select additional series...";
      selector.appendChild(defaultOption);
      const countriesList = countries.data;
      // Iterate over the country list from the API.
      countriesList.forEach((country) => {
        // Assume each country object contains at least "iso2" and "name".
        const option = document.createElement("option");
        // Use the ISO2 in lowercase for consistency.
        option.value = country.code.toLowerCase();
        option.textContent = country.name;
        selector.appendChild(option);
      });
    })
    .catch((error) => console.error("Error fetching country list:", error));
})();
