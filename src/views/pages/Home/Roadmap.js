import React from 'react'
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
} from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  headingBox: {
    textAlign: 'center',
  },
  parentBox: {
    padding: '20px 0px',
    minHeight: '600px',
    color: '#fff',
  },
  roamMapLine: {
    display: 'flex',
  },
  circle: {
    background: ' aqua',
    height: '30px',
    width: '30px',
    borderRadius: '100%',
    zIndex: '9999',
  },
  lineBarY: {
    height: '100%',
    width: '13px',
    marginTop: '-6px',
    borderRadius: '4px',
  },
  //   libeBarX: {
  //     background: ' aqua',
  //     height: '100px',
  //     width: '20px',
  //   },
  mapCase: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '-2px',
  },
  activeLine: {
    height: '6px',
    width: '100%',
    minWidth: '50px',
    background: 'aqua',
    marginTop: '11px',
    marginLeft: '-4px',
    marginRight: '9px',
    // margin: '11px 20px  -4px',
    borderRadius: '4px',
  },
}))
const roadMapDetails = [
  {
    name: 'STAGE 1',
    point1: 'Launch Moonriver competition',
    point2:
      'Airdrops - unique airdrops in collaboration with Dotsama communities',
    point3: 'Launch site and minting application.',
    point4:
      'Mint apes - create a dao wallet to receive 5% of revenue volume and mint apes for dao treasury/airdrops',
  },
  {
    name: 'STAGE 2',
    point1: 'Collaborate with YouTubers / influencers for giveaways',
    point2:
      'Special Moonriver World Event! History will be made in a grand reveal',
    point3: 'Launch interactive Discord/web games',
    point4: 'Announce Mint date',
  },
  {
    name: 'STAGE 3',
    point1: 'Begin mint',
    point2: '5% mint transactions redistobuted to holders',
    point3: 'Launch Moonriver BAYC store',
    point4: 'Begin comic book series featuring apes named after their owners',
  },
  {
    name: 'STAGE 4',
    point1: 'Sell out',
    point2:
      'Dao create the v2 roadmap with events influenced by community response',
    point3: 'Party on The MOVR Ship',
    point4: `Establish a DAO this will enable the community to participate and engage on important decisions about the project's direction`,
  },
]
export default function Roadmap() {
  const classes = useStyles()
  return (
    <Box className={classes.parentBox}>
      <Container>
        <Box>
          <Box className={classes.headingBox}>
            <Typography variant="h2">ROADMAP</Typography>
          </Box>
          {/* <Container> */}
          <Grid container spacing={1}>
            <Grid item lg={12} sm={12} xs={12}>
              {roadMapDetails &&
                roadMapDetails.map((data, i) => {
                  return (
                    <Box display="flex">
                      <Box className={classes.roamMapLine}>
                        <Box className={classes.mapCase}>
                          <Box className={classes.circle}></Box>
                          {i !== 3 && (
                            <Box
                              className={classes.lineBarY}
                              style={
                                i == 0 || i == 1
                                  ? { background: 'yellow' }
                                  : { background: 'aqua' }
                              }
                            ></Box>
                          )}
                        </Box>
                        <Box className={classes.activeLine}></Box>
                      </Box>
                      <Box display="flex" flexDirection="column">
                        <Typography variant="h3" textAlign="center">
                          {data.name}
                        </Typography>
                        <ul style={{ marginLeft: '-20px' }}>
                          <li>{data.point1}</li>
                          <li>{data.point2}</li>
                          <li>{data.point3}</li>
                          <li>{data.point4}</li>
                        </ul>
                      </Box>
                    </Box>
                  )
                })}
            </Grid>
          </Grid>
          {/* </Container> */}
        </Box>
      </Container>
    </Box>
  )
}
