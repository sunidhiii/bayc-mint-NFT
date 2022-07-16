import React from 'react'
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
} from '@material-ui/core'
import Corosel from '../Home/Corosel'
const useStyles = makeStyles((theme) => ({
  headingBox: {
    textAlign: 'center',
    '& h2': {
      // fontWeight: '900',
    },
    '& h3': {
      // fontWeight: '600',
      marginTop: '20px',
    },
  },
  parentBox: {
    padding: '20px 0px',
    minHeight: '600px',
    color: '#fff',
  },
  bulletPoints: {
    textAlign: 'left !important',
    marginTop: '25px',
  },
}))
export default function WhyUs() {
  const classes = useStyles()
  return (
    <Box className={classes.parentBox}>
      <Container>
        <Box>
          <Box className={classes.headingBox}>
            <Typography variant="h2">WHY US?</Typography>
            <Typography variant="h3">
              {' '}
              Why own a MoonriverBAYC ape?
              <br /> Here are some reasons.
            </Typography>
            <Box className={classes.bulletPoints}>
              <ul>
                <li>
                  <Typography variant="h4">
                    Comic book features names after holders
                  </Typography>
                </li>
                <li>
                  <Typography variant="h4">
                    Exclusive airdrops for holders
                  </Typography>
                </li>
                <li>
                  <Typography variant="h4">
                    Exclusive ownership of the 1st Derivative ape project on
                    Moonriver and access to exclusive chat channels
                  </Typography>
                </li>
                <li>
                  <Typography variant="h4">
                    {' '}
                    Ticket to the biggest yacht party on the blockchain
                  </Typography>
                </li>
                <li>
                  <Typography variant="h4">
                    {' '}
                    Earn MOVR, Revenue shares from minting redistributed to
                    holders
                  </Typography>
                </li>
                <li>
                  {' '}
                  <Typography variant="h4"> Be a part of history</Typography>
                </li>
              </ul>
            </Box>
          </Box>
          <Corosel />
        </Box>
      </Container>
    </Box>
  )
}
