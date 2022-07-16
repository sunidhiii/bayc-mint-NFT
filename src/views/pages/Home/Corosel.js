import React from 'react'
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
  withStyles,
  TextField,
} from '@material-ui/core'
import Slider from 'react-slick'
import {} from 'react-feather'
import NFTCard from 'src/component/NFTCard'
const useStyles = makeStyles((theme) => ({
  bannerBox: {
    padding: '80px 0px',
  },
}))
const collectionCardData = [
  {
    no: 1,
    image: '/images/carasel/15.png',
  },
  {
    no: 2,
    image: '/images/carasel/58.png',
  },
  {
    no: 3,
    image: '/images/carasel/66.png',
  },
  {
    no: 4,
    image: '/images/carasel/73.png',
  },
  {
    no: 5,
    image: '/images/carasel/86.png',
  },
  {
    no: 6,
    image: '/images/carasel/145.png',
  },
  {
    no: 7,
    image: '/images/carasel/170.png',
  },
  {
    no: 8,
    image: '/images/carasel/214.png',
  },
  {
    no: 9,
    image: '/images/carasel/215.png',
  },
  {
    no: 10,
    image: '/images/carasel/229.png',
  },
]
export default function Corosel() {
  const classes = useStyles()
  const settings = {
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    className: 'recomended',
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: '20px',
          autoplay: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: '20px',
          autoplay: true,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '20px',
          autoplay: true,
        },
      },
    ],
  }
  return (
    <Box className={classes.bannerBox}>
      <Container>
        <Grid container spacing={4} width="100%">
          <Slider
            {...settings}
            // className="roadmapslider"
            style={{ width: '100%' }}
          >
            {collectionCardData.map((data, i) => {
              return (
                <Grid
                  item
                  lg={12}
                  sm={12}
                  xs={12}
                  md={12}
                  key={i}
                  className="walletSet"
                >
                  <NFTCard data={data} index={i} />
                </Grid>
              )
            })}
          </Slider>
        </Grid>
      </Container>
    </Box>
  )
}
