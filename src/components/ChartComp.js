import React, { useEffect } from 'react';
import { Chart } from 'react-google-charts';

const ChartComp = props => {
    const pieOptions = {
        // title: 'Coronavirus Pie Chart',
        is3D: true,
        slices: [
          {
            color: "#007fad"
          },
          {
            color: "#d91e48"
          },
          {
            color: "#2BB673"
          },
          {
            color: "#e9a227"
          }
        ],
        legend: {
          position: "right",
          alignment: "center",
          textStyle: {
            color: "fff",
            fontSize: 16
          }
        },
        tooltip: {
          showColorCode: true
        },
        chartArea: {
          left: 0,
          top: 0,
          bottom: 0,
          right: 0,
          width: "100%",
          height: "100%"
        },
        backgroundColor: 'transparent'
        // fontName: "Roboto"
    };

    return (
        <div className="chart_div">
            <Chart
                width="98%"
                height="300px"
                getChartWrapper={chartWrapper => {
                  chartWrapper.draw();;
                }}
                // width={'98%'}
                // height={'300px'}
                background={'red'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Country', props.country.country],
                    ['Active Cases', props.country.active],
                    ['Deaths', props.country.deaths],
                    ['Recovered', props.country.recovered]
                ]}
                options={pieOptions}
                rootProps={{ 'data-testid': '2' }}
            />
        </div>
    )
    
}
    
export default ChartComp;