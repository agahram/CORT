const ecommerceWidgets = [
  {
    id: 1,
    title: "TOTAL REVENUE",
    price: 974.82,
    icon: "trend-up",
    color: "success",
    number: "+16.09 %",
    dollar: "$",
    m: "M",
    dataColor: '["--tb-primary"]',
    series: [
      {
        data: [24, 43, 51, 66, 49, 33, 48, 66],
      },
    ],
    options: {
      chart: {
        type: "line",
        height: 70,
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      tooltip: {
        fixed: {
          enabled: false,
        },
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function (seriesName: any) {
              return "";
            },
          },
        },
        marker: {
          show: false,
        },
      },
    },
  },
  {
    id: 2,
    title: "TOTAL EARNINGS",
    price: 750.36,
    icon: "trend-up",
    color: "success",
    number: "+19.07 %",
    dollar: "$",
    m: "M",
    dataColor: '["--tb-info"]',
    series: [
      {
        name: "Total Earnings",
        data: [0.7, 1.0, 0.8, 1.4, 2.3, 3.2, 3.6, 4.0, 5.1, 4.0, 3.1, 4.3],
      },
    ],
    options: {
      chart: {
        height: 70,
        type: "bar",
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        labels: {
          show: false,
          formatter: function (val: any) {
            return val + "k";
          },
        },
      },
    },
  },
  {
    id: 3,
    title: "AVERAGE DAILY SALES",
    icon: "trend-down",
    color: "danger",
    number: "-07.18 %",
    dataColor: '["--tb-secondary"]',
    series: [76],
    options: {
      chart: {
        type: "radialBar",
        height: 220,
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: "#e7e7e7",
            strokeWidth: "80%",
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              // show: false,
              offsetY: -15,
              fontWeight: "bold",
              fontSize: "18px",
            },
          },
        },
      },
      grid: {
        padding: {
          top: -35,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          shadeIntensity: 0.4,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 53, 91],
        },
      },
      labels: ["Average Results"],
    },
  },
  {
    id: 4,
    title: "TOTAL ORDERS",
    price: 8745,
    icon: "trend-down",
    color: "danger",
    number: "-01.45 %",
    dataColor: '["--tb-primary"]',

    series: [
      {
        data: [36, 21, 45, 53, 39, 55, 67, 58],
      },
    ],
    options: {
      chart: {
        type: "line",
        height: 70,
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: "stepline",
        width: 2,
      },
      tooltip: {
        fixed: {
          enabled: false,
        },
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function (seriesName: any) {
              return "";
            },
          },
        },
        marker: {
          show: false,
        },
      },
    },
  },
];
//Sales by Traffic Source
const trafficSourceToday = {
  data: [59, 40, 44, 31],
};

const trafficSourceLastWeek = {
  data: [75, 40, 49, 31],
};

const trafficSourceLastMonth = {
  data: [30, 50, 44, 11],
};

const trafficSourceCurrentYear = {
  data: [49, 80, 14, 61],
};

// real time sale

const realTimeToday = [
  {
    name: "Search Engine Traffic",
    data: [74, 83, 89, 97, 97, 97, 74],
  },
  {
    name: "Direct Traffic",
    data: [46, 57, 59, 54, 97, 97, 84],
  },
];

const realTimeLastWeek = [
  {
    name: "Search Engine Traffic",
    data: [96, 83, 19, 77, 91, 57, 74],
  },
  {
    name: "Direct Traffic",
    data: [46, 37, 59, 24, 97, 19, 14],
  },
];

const realTimeLastMonth = [
  {
    name: "Search Engine Traffic",
    data: [74, 33, 89, 57, 97, 97, 34],
  },
  {
    name: "Direct Traffic",
    data: [36, 87, 59, 44, 97, 87, 84],
  },
];

const realTimeCurrentYear = [
  {
    name: "Search Engine Traffic",
    data: [74, 83, 99, 47, 56, 97, 36],
  },
  {
    name: "Direct Traffic",
    data: [46, 89, 59, 32, 69, 97, 44],
  },
];

export {
  ecommerceWidgets,
  trafficSourceToday,
  trafficSourceLastWeek,
  trafficSourceLastMonth,
  trafficSourceCurrentYear,
  realTimeToday,
  realTimeLastWeek,
  realTimeLastMonth,
  realTimeCurrentYear,
};
