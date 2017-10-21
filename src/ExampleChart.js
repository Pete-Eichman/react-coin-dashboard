import { Chart } from 'react-google-charts';
import React from 'react';

class ExampleChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
                title: 'CRYPTO CHART TITLE',
                hAxis: { title: 'TIMESTAMP' },
                vAxis: { title: 'PRICE'},
                // legend: 'none',

      },
      data: [
        ['Date','Open','High','Low','Close'],
        ["2017-01-01",963.66,1003.08,958.7,998.3299999999999],
        ["2017-01-02",998.62,1031.3899999999999,996.7,1021.75],
        ["2017-01-03",1021.6,1044.08,1021.6,1043.84],
        ["2017-01-04",1044.4,1159.42,1044.4,1154.73],
        ["2017-01-05",1156.73,1191.1,910.42,1013.38],
        ["2017-01-06",1014.24,1046.81,883.9399999999999,902.2],
        ["2017-01-07",903.49,908.59,823.56,908.59],
        ["2017-01-08",908.1700000000001,942.72,887.25,911.2],
        ["2017-01-09",913.24,913.69,879.81,902.8299999999999],
        ["2017-01-10",902.4399999999999,914.87,901.06,907.6800000000001],
        ["2017-01-11",908.12,919.4499999999999,762.76,777.76],
        ["2017-01-12",775.1800000000001,826.25,755.76,804.8299999999999],
        ["2017-01-13",803.74,829,780,823.98],
        ["2017-01-14",825.14,835.09,812.4599999999999,818.41],
        ["2017-01-15",818.14,823.31,812.87,821.8],
        ["2017-01-16",821.7800000000001,834.53,820.2700000000001,831.53],
        ["2017-01-17",830.9499999999999,910.56,830.8,907.9399999999999],
        ["2017-01-18",909.37,917.5,858.3,886.62],
        ["2017-01-19",888.3399999999999,904.61,884.3399999999999,899.07],
        ["2017-01-20",898.1700000000001,899.4,887.01,895.03],
        ["2017-01-21",895.55,927.37,895.53,921.7900000000001],
        ["2017-01-22",922.21,937.52,897.56,924.6700000000001],
        ["2017-01-23",925.5,928.2700000000001,916.74,921.01],
        ["2017-01-24",910.6800000000001,924.14,892.2900000000001,892.69],
        ["2017-01-25",891.92,903.25,891.69,901.54],
        ["2017-01-26",902.39,919.3299999999999,902.22,917.59],
        ["2017-01-27",918.3599999999999,923.22,915.8499999999999,919.75],
        ["2017-01-28",919.81,923.91,919.81,921.59],
        ["2017-01-29",922.07,923.42,919.15,919.5],
        ["2017-01-30",920.15,923.05,919.47,920.38],
        ["2017-01-31",920.9599999999999,972.02,920.9599999999999,970.4],
        ["2017-02-01",970.9399999999999,989.11,970.74,989.02],
        ["2017-02-02",990,1013.52,983.22,1011.8],
        ["2017-02-03",1011.4599999999999,1033.87,1008.7900000000001,1029.91],
        ["2017-02-04",1031.33,1045.9,1015.16,1042.9],
        ["2017-02-05",1043.52,1043.6299999999999,1022.37,1027.34],
        ["2017-02-06",1028.4,1044.6399999999999,1028.1599999999999,1038.1499999999999],
        ["2017-02-07",1040.1399999999999,1061.93,1040.1399999999999,1061.35],
        ["2017-02-08",1062.32,1078.97,1037.49,1063.07],
        ["2017-02-09",1064.7,1088.99,953.3399999999999,994.38],
        ["2017-02-10",995.63,998.9,946.69,988.6700000000001],
        ["2017-02-11",988.9,1009.2900000000001,982.8299999999999,1004.4499999999999],
        ["2017-02-12",1003.52,1004.76,996.92,999.1800000000001],
        ["2017-02-13",998.88,1002.1,976,990.64],
        ["2017-02-14",991.74,1011.51,986.47,1004.55],
        ["2017-02-15",1006.21,1008.8399999999999,1001.58,1007.48],
        ["2017-02-16",1007.65,1033.37,1007.65,1027.44],
        ["2017-02-17",1026.12,1053.1699999999998,1025.6399999999999,1046.21],
        ["2017-02-18",1049.21,1061.1,1046.96,1054.42],
        ["2017-02-19",1054.76,1056.81,1043.46,1047.87],
        ["2017-02-20",1048.6899999999998,1080.49,1041.6899999999998,1079.98],
        ["2017-02-21",1079.28,1117.25,1076.93,1115.3],
        ["2017-02-22",1114.8,1125.3899999999999,1100.55,1117.44],
        ["2017-02-23",1117.27,1176.62,1116.96,1166.72],
        ["2017-02-24",1172.71,1200.3899999999999,1131.96,1173.6799999999998],
        ["2017-02-25",1170.41,1174.85,1124.59,1143.84],
        ["2017-02-26",1144.27,1167.47,1130.2,1165.2],
        ["2017-02-27",1163.78,1181.98,1163.3799999999999,1179.97],
        ["2017-02-28",1180.72,1193.25,1171.82,1179.97],
        ["2017-03-01",1180.04,1222.5,1179.6899999999998,1222.5],
        ["2017-03-02",1224.6799999999998,1262.1299999999999,1215.62,1251.01],
        ["2017-03-03",1250.71,1280.31,1250.71,1274.99],
        ["2017-03-04",1277.43,1279.4,1230.51,1255.1499999999999],
        ["2017-03-05",1254.29,1267.29,1238.06,1267.12],
        ["2017-03-06",1267.47,1276,1264.6,1272.83],
        ["2017-03-07",1273.21,1275.55,1204.8,1223.54],
        ["2017-03-08",1223.23,1232.1599999999999,1148.08,1150],
        ["2017-03-09",1150.35,1197.46,1141.23,1188.49],
        ["2017-03-10",1189.36,1270.47,1077.25,1116.72],
        ["2017-03-11",1116.32,1193.83,1116.32,1175.83],
        ["2017-03-12",1176.62,1226.98,1175.36,1221.3799999999999],
        ["2017-03-13",1221.78,1237.37,1217.03,1231.92],
        ["2017-03-14",1232.1599999999999,1244.81,1220.72,1240],
        ["2017-03-15",1240.1599999999999,1251.61,1239.75,1249.61],
        ["2017-03-16",1251.33,1257.98,1152.44,1187.81],
        ["2017-03-17",1180.1599999999999,1180.1599999999999,1099.57,1100.23],
        ["2017-03-18",1099.6899999999998,1114.07,957.65,973.8199999999999],
        ["2017-03-19",976.73,1069.91,976.73,1036.74],
        ["2017-03-20",1037.24,1063.03,1036.6799999999998,1054.23],
        ["2017-03-21",1055.36,1122.43,1055.36,1120.54],
        ["2017-03-22",1120.6499999999999,1120.6499999999999,1014.21,1049.1399999999999],
        ["2017-03-23",1050.05,1058.01,1028.93,1038.59],
        ["2017-03-24",1038.45,1040.47,934.3599999999999,937.52],
        ["2017-03-25",936.54,975.76,903.71,972.7800000000001],
        ["2017-03-26",974.01,1007.9599999999999,954.19,966.73],
        ["2017-03-27",972.05,1046.4,971.98,1045.77],
        ["2017-03-28",1044.58,1064.6499999999999,1027.73,1047.1499999999999],
        ["2017-03-29",1046.08,1055.1299999999999,1015.88,1039.97],
        ["2017-03-30",1042.21,1049.29,1020.04,1026.43],
        ["2017-03-31",1026.6399999999999,1074.92,1026.6399999999999,1071.79],
        ["2017-04-01",1071.71,1091.72,1061.09,1080.5],
        ["2017-04-02",1080.61,1107.59,1075.45,1102.1699999999998],
        ["2017-04-03",1102.95,1151.74,1102.95,1143.81],
        ["2017-04-04",1145.52,1156.44,1120.52,1133.25],
        ["2017-04-05",1134.1399999999999,1135.09,1113.6299999999999,1124.78],
        ["2017-04-06",1125.81,1188.37,1125.81,1182.6799999999998],
        ["2017-04-07",1178.94,1186.58,1163.3899999999999,1176.9],
        ["2017-04-08",1172.6499999999999,1184.98,1162.58,1175.95],
        ["2017-04-09",1176.57,1197.21,1171.86,1187.87],
        ["2017-04-10",1187.3,1190.34,1179.04,1187.1299999999999],
        ["2017-04-11",1187.46,1208.07,1187.46,1205.01],
        ["2017-04-12",1204.81,1207.1399999999999,1196.76,1200.37],
        ["2017-04-13",1201.02,1205.8899999999999,1156.44,1169.28],
        ["2017-04-14",1170.33,1190.8,1159.79,1167.54],
        ["2017-04-15",1167.3,1188,1164.96,1172.52],
        ["2017-04-16",1172.61,1187.22,1172.61,1182.94],
        ["2017-04-17",1183.25,1194.9,1172.6499999999999,1193.91],
        ["2017-04-18",1193.77,1217.57,1193.77,1211.6699999999998],
        ["2017-04-19",1212.1299999999999,1215.51,1205.08,1210.29],
        ["2017-04-20",1211.08,1240.79,1208.41,1229.08],
        ["2017-04-21",1229.42,1235.94,1215.56,1222.05],
        ["2017-04-22",1222.71,1235.56,1208.47,1231.71],
        ["2017-04-23",1231.92,1232.2,1203.94,1207.21],
        ["2017-04-24",1209.6299999999999,1250.94,1209.6299999999999,1250.1499999999999],
        ["2017-04-25",1250.45,1267.58,1249.97,1265.49],
        ["2017-04-26",1265.99,1294.83,1265.93,1281.08],
        ["2017-04-27",1281.8799999999999,1319.7,1281.3,1317.73],
        ["2017-04-28",1317.74,1331.28,1292.37,1316.48],
        ["2017-04-29",1317.84,1327.2,1315.21,1321.79],
        ["2017-04-30",1321.87,1347.91,1314.92,1347.8899999999999],
        ["2017-05-01",1348.3,1434.32,1348.3,1421.6],
        ["2017-05-02",1421.03,1473.9,1415.6899999999998,1452.82],
        ["2017-05-03",1453.78,1492.77,1447.49,1490.09],
        ["2017-05-04",1490.72,1608.91,1490.72,1537.6699999999998],
        ["2017-05-05",1540.87,1618.03,1530.31,1555.45],
        ["2017-05-06",1556.81,1578.8,1542.5,1578.8],
        ["2017-05-07",1579.47,1596.72,1559.76,1596.71],
        ["2017-05-08",1596.92,1723.35,1596.92,1723.35],
        ["2017-05-09",1723.8899999999999,1833.49,1716.3,1755.36],
        ["2017-05-10",1756.52,1788.44,1719.1,1787.1299999999999],
        ["2017-05-11",1780.37,1873.93,1755.35,1848.57],
        ["2017-05-12",1845.76,1856.1499999999999,1694.01,1724.24],
        ["2017-05-13",1723.12,1812.99,1651.08,1804.91],
        ["2017-05-14",1800.86,1831.42,1776.62,1808.91],
        ["2017-05-15",1808.44,1812.8,1708.54,1738.43],
        ["2017-05-16",1741.7,1785.94,1686.54,1734.45],
        ["2017-05-17",1726.73,1864.05,1661.91,1839.09],
        ["2017-05-18",1818.7,1904.48,1807.12,1888.6499999999999],
        ["2017-05-19",1897.37,2004.52,1890.25,1987.71],
        ["2017-05-20",1984.24,2084.73,1974.92,2084.73],
        ["2017-05-21",2067.03,2119.08,2037.5,2041.2],
        ["2017-05-22",2043.1899999999998,2303.9,2017.87,2173.4],
        ["2017-05-23",2191.56,2320.82,2178.5,2320.42],
        ["2017-05-24",2321.3700000000003,2523.72,2321.3700000000003,2443.64],
        ["2017-05-25",2446.24,2763.71,2285.3,2304.98],
        ["2017-05-26",2320.8900000000003,2573.79,2071.9900000000002,2202.42],
        ["2017-05-27",2196.27,2260.2,1855.83,2038.87],
        ["2017-05-28",2054.08,2267.34,2054.08,2155.8],
        ["2017-05-29",2159.4300000000003,2307.05,2107.17,2255.61],
        ["2017-05-30",2255.36,2301.96,2124.57,2175.4700000000003],
        ["2017-05-31",2187.19,2311.08,2145.57,2286.4100000000003],
        ["2017-06-01",2288.3300000000004,2448.3900000000003,2288.3300000000004,2407.88],
        ["2017-06-02",2404.03,2488.55,2373.32,2488.55],
        ["2017-06-03",2493.72,2581.9100000000003,2423.57,2515.3500000000004],
        ["2017-06-04",2547.79,2585.8900000000003,2452.54,2511.8100000000004],
        ["2017-06-05",2512.4,2686.8100000000004,2510.22,2686.8100000000004],
        ["2017-06-06",2690.84,2999.9100000000003,2690.84,2863.2],
        ["2017-06-07",2869.38,2869.38,2700.56,2732.16],
        ["2017-06-08",2720.4900000000002,2815.3,2670.9500000000003,2805.62],
        ["2017-06-09",2807.44,2901.71,2795.62,2823.8100000000004],
      ],
    };
  }
  render() {
    return (
      <Chart
        chartType="LineChart"
        data={this.state.data}
        options={this.state.options}
        graph_id="LineChart"
        width="50%"
        height="400px"
        legend_toggle
      />
    );
  }
}
export default ExampleChart;