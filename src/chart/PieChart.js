import { ResponsivePieCanvas } from "@nivo/pie";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { mockPieData as data } from "../Data/Mockdata";

const PieChart = ({ isDashboard = true }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ResponsivePieCanvas
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
                color: colors.primary[500],
              },
            },
          }}
        margin={isDashboard ? { top: 40, right: 200, bottom: 40, left: 80 } : { top: 20, right: 10, bottom: 30, left: 0 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'paired' }}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.6
                ]
            ]
        }}
        enableArcLinkLabels={isDashboard} // isDashboard
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={colors.primary[100]}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        enableArcLabels={isDashboard} //isDashboard
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={colors.primary[500]} // color label
        legends={[ isDashboard ? 
            {
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: 140,
                translateY: 0,
                itemsSpacing: 8,
                itemWidth: 60,
                itemHeight: 20,
                itemTextColor:colors.primary[100],
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 12
            } : {}//isDashboard
        ]}
    />
  );
};

export default PieChart;
