import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import Footer from './Footer'
import TopBar from './TopBar'

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#000",
    backgroundImage: 'url(images/background/bg.jpg)',
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    width: '100%',
  },
  MainLayout: {
    minHeight: 'calc(100vh - 415px)',
  },
}))

const MainLayout = ({ children }) => {
  const classes = useStyles()
  const history = useHistory()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className={classes.root}>
      <TopBar />
      <div
        style={
          history.location.pathname !== '/'
            ? { display: 'block' }
            : { display: 'none' }
        }
      ></div>

      <div className={classes.MainLayout}>{children}</div>
      <Footer />
    </div>
  )
}

export default MainLayout
