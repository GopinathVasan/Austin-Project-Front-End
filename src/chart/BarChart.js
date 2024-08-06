import React from 'react';
import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { mockBarData as data } from "../Data/Mockdata";

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveBar
        data={data}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: colors.grey[100],
              },
            },
            legend: {
              text: {
                fill: colors.grey[100],
              },
            },
            ticks: {
              line: {
                stroke: colors.grey[100],
                strokeWidth: 1,
              },
              text: {
                fill: colors.grey[100],
              },
            },
          },
          legends: {
            text: {
              fill: colors.grey[100],
            },
          },
          tooltip: {
            container: {
              color: colors.primary[900],
            },
          },
        }}
        keys={[
          "alice", "bob", "carol", "david", "emma", "frank", "grace", "hank", "ivy", "jack" , "quinn", "ruby","steve"
        ]}
        indexBy="month"
        groupMode={isDashboard ? "stacked" : "stacked"}
        margin={isDashboard ? { top: 10, right: 10, bottom: 60, left: 50 } : { top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        enableLabel={!isDashboard}
        labelTextColor="#fff"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'yellow_green' }}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickValues: 12,
            tickRotation: isDashboard ? -25 : 0,
            legend: isDashboard ? undefined : "month",
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickValues: isDashboard ? 3 : 7,
            tickRotation: 0,
            legend: isDashboard ? undefined : "rupee",
            legendPosition: 'middle',
            legendOffset: -55,
            truncateTickAt: 0
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        legends={isDashboard ? [] : [
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
            }
        ]}
        role="application"
        barAriaLabel={function (e) {
          return e.id + ": " + e.formattedValue + " in month: " + e.indexValue;
        }}
    />
  );
};

export default BarChart;
