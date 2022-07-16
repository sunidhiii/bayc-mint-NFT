import React from 'react'
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
} from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  bannerBox: {
    position: 'relative',
    // backgroundImage: "url(./images/banner/bg.png)",
    // backgroundRepeat: "no-repeat",
    // background: "linear-gradient(0deg, #060606 0%, rgba(0, 0, 0, 0) 139.5%)",
    // backgroundSize: "cover",
    padding: '10px 0px 0px',
    zIndex: ' 1',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
      '@media (max-width: 768px)': {
        padding: '10px 0px 60px',
      },
    },
  },

  gridflex: {
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.down('md')]: {
      height: 'auto',
    },
  },
  marginleft: {
    marginLeft: '10px !important',
  },
  textbox: {
    textAlign: 'center',
    '& h1': {
      fontSize: '45px',
      // fontWeight: '600',
      color: '#FFFFFF',
      [theme.breakpoints.down('lg')]: {},
      [theme.breakpoints.down('xs')]: {
        fontSize: '30px',
      },
    },
    '& p': {
      fontWeight: '300',
      fontSize: '20px',
      marginTop: '20px',
      color: '#cecece',
    },
  },
}))

export default function BestSeller() {
  const classes = useStyles()

  return (
    <Box className={classes.bannerBox}>
      <Container maxWidth="lg" p={0}>
        <Grid container alignItems="left">
          <Box>
            <Box>
              <img src="/images/home/banner.png" alt="" width="100%" />
            </Box>
          </Box>
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            sm={12}
            className={classes.gridflex}
          >
            <Box className={classes.textbox} style={{ textAlign: 'center' }}>
              <Typography variant="h1">MOONRIVER BAYC</Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ color: '#fff' }}
              >
                {' '}
                MBAYC is an exclusive collection of 7777 premium NFTs on the Moonriver blockchain with blue chip potential. No two of these digital eye-catching pieces of art are alike. Each being uniquely generated from over 140+ never seen before traits, our traits have specific rarities to ensure there is a clear ranking of these NFTs and distinct differences in value for the marketplace. MBAYC is inspired by its Ethereum counterpart but is not affiliated with Yuga Labs.
              </Typography>

              <Typography
                variant="body1"
                align="center"
                style={{ color: '#fff' }}
              >
               MBAYC is the first ape derivative on the MOVR blockchain and prides itself on being a community ran and community focused project, together we will make history on the MOVR blockchain.
              </Typography>
              {/* <Box mt={6} align="left">
                <Button
                  style={{ marginRight: '10px' }}
                  variant="contained"
                  size="large"
                  color="secondary"
                  target="_blank"
                  href="https://thedefiantsnft.com/"
                >
                  LEARN MORE ABOUT US
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  color="secondary"
                  component={Link}
                  to="/gallery"
                >
                  GALLERY
                </Button>
              </Box> */}
            </Box>
          </Grid>
          {/* <Grid item xs={12} md={6}>
            <Box className="bannerimageBox">
              <img
                src="images/img1.jpeg"
                className="banner1"
                alt="banner image"
              />
              <img
                src="images/img2.jpeg"
                className="banner2"
                alt="banner image"
              />
              <img
                src="images/img3.jpeg"
                className="banner3"
                alt="banner image"
              />
            
            </Box>
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  )
}
