import React from 'react'
import Chart from 'react-apexcharts'
import {
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
  Grid,
  TextField,
  withStyles,
} from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  chartBox: {
    // display: 'flex',
    // justifyContent: 'center',
    // width: '100%',
  },
  chartHandinfBox: {
    textAlign: 'center',
    color: '#fff',
    '& h2': {
      // fontWeight: '600',
      // fontStyle: 'italic',
    },
  },
}))
export default function ApexChart({ nftPriceCurrent }) {
  const classes = useStyles()
  const priceHistoryData = [
    // 0,
    2,
    2.38,
    2.76,
    3.14,
    3.52,
    3.9,
    4.28,
    4.66,
    5.04,
    5.42,
    5.8,
    6.18,
    6.56,
    6.94,
    8,
    // 7.7,
    // 8,
  ]

  const options = {
    series: [
      {
        name: 'MOVR',
        data: priceHistoryData,
      },
    ],
    options: {
      chart: {
        height: 1000,
        foreColor: '#fff',
        type: 'line',
        zoom: {
          enabled: true,
        },

        categories: {
          color: '#fff',
          fontSize: '15px !important',
        },
        grid: {
          show: true,
          borderColor: '#90A4AE',
          strokeDashArray: 0,
          position: 'back',
          xaxis: {
            lines: {
              show: false,
            },
          },
          yaxis: {
            lines: {
              show: false,
            },
          },
          row: {
            colors: undefined,
            opacity: 0.5,
          },
          column: {
            colors: undefined,
            opacity: 0.5,
          },
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
      },
      fill: {
        colors: '#01e7ea85',
        opacity: 0.9,
        type: 'gradiant',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
        colors: ['#dbc506'],
        width: 3,
      },
      markers: {
        size: 4,
        colors:
          // parseFloat(nftPriceCurrent) ===
          // parseFloat(priceHistoryData[nftPriceCurrent])
          //   ? ['red']
          // :
          ['#fff'],
        strokeColor:
          // parseFloat(nftPriceCurrent) ===
          // parseFloat(priceHistoryData[nftPriceCurrent])
          //   ? 'red'
          //   :
          '#00BAEC',
        strokeWidth: 1,
      },
      tooltip: {
        theme: 'dark',
      },

      annotations: {
        yaxis: [	
          {	
            y: parseFloat(nftPriceCurrent),	
            // borderColor: '#999',	
            borderColor: '#fff',	
            strokeDashArray: 7,	
            label: {	
              show: true,	
              text: `Current Mint Price: ${nftPriceCurrent} MOVR`,
              // align: 'left',	
              style: {	
                // color: '#fff',	
                align: 'left',	
                background: '#dbc506',
              },
            },
          },
        ],
      },

      xaxis: {
        categories: [
          '0 - 500',
          '501 - 1000',
          '1001 - 1500',
          '1501 - 2000',
          '2001 - 2500',
          '2501 - 3000',
          '3001 - 3500',
          '3501 - 4000',
          '4001 - 4500',
          '4501 - 5000',
          '5001 - 5500',
          '5501 - 6000',
          '6001 - 6500',
          '6501 - 7000',
          '7001 - 7777',
        ],
        title: {
          text: 'SUPPLY',
        },
      },
      yaxis: {
        categories: [priceHistoryData],
        title: {
          text: 'PRICE IN MOVR',
        },
      },
    },
  }
  return (
    <Container maxWidth="md">
      <Box className={classes.chartHandinfBox}>
        <Typography variant="h2">BONDING CURVE</Typography>
        <Typography variant="h4">
          5% of all minting transactions redistributed to holders
          <br />
          From the time of mint
        </Typography>{' '}
        {nftPriceCurrent && (
          <Chart
            options={options.options}
            series={options.series}
            type="area"
            className="customClass"
            width={'100%'}
            height="auto"
          />
        )}
      </Box>
    </Container>
  )
}
