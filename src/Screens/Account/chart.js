import React from 'react';
import {View, StyleSheet, processColor} from 'react-native';
import {LineChart} from 'react-native-charts-wrapper';
import useAppTheme from '../../Themes/Context';

const Chart = () => {
  const {theme} = useAppTheme();
  const marker = {
    enabled: true,
    digits: 2,
    backgroundTint: processColor('teal'),
    markerColor: processColor(theme.colors.primary),
    textColor: processColor('white'),
  };
  return (
    <View>
      <View style={{backgroundColor: theme.colors.backgroundColor}}>
        <LineChart
          scaleEnabled={false}
          autoScaleMinMaxEnabled={false}
          style={styles.chart}
          pinchZoom={true}
          xAxis={{
            textColor: processColor(theme.colors.normalText),
            gridColor: processColor(theme.colors.background),
          }}
          yAxis={{
            left: {
              drawGridLines: false,
              textColor: processColor(theme.colors.normalText),
            },
            right: {
              enabled: false,
            },
          }}
          drawGridBackground={false}
          marker={marker}
          borderColor={processColor(theme.colors.background)}
          chartDescription={{text: ''}}
          dragDecelerationFrictionCoef={0.9}
          data={{
            dataSets: [
              {
                label: '',
                values: [
                  {y: Math.random() * 1000, x: 0},
                  {y: Math.random() * 1000, x: 1},
                  {y: Math.random() * 1000, x: 2},
                  {y: Math.random() * 1000, x: 3},
                  {y: Math.random() * 1000, x: 4},
                  {y: Math.random() * 1000, x: 5},
                  {y: Math.random() * 1000, x: 6},
                ],
                config: {
                  mode: 'HORIZONTAL_BEZIER',
                  color: processColor(theme.colors.primary),
                  drawCubicIntensity: 1,
                  drawCubic: true,
                  drawHighlightIndicators: false,
                  drawFilled: true,
                  barShadowColor: 80,
                  drawCircles: false,
                  lineWidth: 3,
                  drawValues: false,
                  fillGradient: {
                    colors: [
                      processColor(theme.colors.primary),
                      processColor(theme.colors.primary),
                      processColor('#fff'),
                    ],
                    positions: [0, 0.5],
                    angle: 90,
                    orientation: 'TOP_BOTTOM',
                  },
                  fillAlpha: 1000,
                  valueTextSize: 10,
                  valueTextColor: processColor(theme.colors.normalText),
                },
              },
            ],
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  chart: {
    flex: 1,
    height: 300,
  },
});

export default Chart;
