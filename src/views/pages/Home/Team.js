import React from 'react'
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
} from '@material-ui/core'
import MemberCard from 'src/component/MemberCard'
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: 'transaprent',
    color: '#fff',
    minHeight: '600px',
    padding: '20px 0px',
  },
  headingBox: {
    textAlign: 'center',
    '& h3': {
      // fontWeight: '600',
      marginTop: '20px',
    },
    '& h2': {
      // fontWeight: '900',
    },
  },
  teamContentBox: {
    marginTop: '80px',
  },
}))

const memberCardDetails = [
  {
    name: 'APEX',
    image: 'images/team/APEX.jpg',
    position: 'Founder/Director',
  },
  {
    name: 'CEASER',
    image: 'images/team/caeser.png',
    position: 'Creative Director',
  },
  {
    name: 'CHIRAG',
    image: 'images/team/neeam.png',
    position: 'Web Dev',
  },
  {
    name: 'SUNIDHI',
    image: 'images/team/NEYTIRI.png',
    position: 'Smart Contract Dev',
  },
]
export default function () {
  const classes = useStyles()
  return (
    <Container>
      <Box className={classes.mainContainer}>
        <Box className={classes.headingBox}>
          <Typography variant="h2">TEAM</Typography>
          <Box style={{ padding: '0px 45px' }}>
            <Typography variant="h3">
              {' '}
              Our team consist of 4 individuals with expertise across a
              multitude of different areas. We are highly motivated and eager to
              bring our knowledge and skills to the project in order to create
              something great for our growing community.
            </Typography>
          </Box>
        </Box>
        <Box className={classes.teamContentBox}>
          <Grid container spacing={2}>
            {memberCardDetails &&
              memberCardDetails.map((data, index) => {
                return (
                  <Grid item lg={3} md={3} sm={6} xs={12}>
                    <MemberCard data={data} index={index} />
                  </Grid>
                )
              })}
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
