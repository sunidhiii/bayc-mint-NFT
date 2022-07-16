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
  memberBox: {
    textAlign: 'center',
    width: '100%',
    '& img': {
      width: '90%',
    },
  },
}))
export default function MemberCard({ data, index }) {
  const classes = useStyles()
  return (
    <Box className={classes.memberBox} key={index}>
      <img src={data?.image} alt="" />
    </Box>
  )
}
