import React, { useContext, useEffect, useState } from 'react'
import {
  Box,
  Container,
  Typography,
  makeStyles,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  IconButton,
} from '@material-ui/core'
import Page from 'src/component/Page'
import { BiCopy } from 'react-icons/bi'
import GalleryImage from 'src/component/GalleryImage'
import { useWeb3React } from '@web3-react/core'
import { UserContext } from 'src/context/User'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast } from 'react-toastify'
import { mintAddress, ACTIVE_NETWORK } from 'src/constants'
import RezwanPodABI from 'src/constants/ABI/RezwanPodABI.json'
import { getWeb3Obj, getContract, swichNetworkHandler } from 'src/utils'
import ButtonCircularProgress from 'src/component/ButtonCircularProgress'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  deatailimage: {
    width: '100%',
    display: 'flex',
    padding: '50px 0',
    position: 'relative',
    // background: 'rgba(12, 12, 13, 0.91)',
    textAlign: 'center',
    marginBottom: '25px !important',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
    },
    '& img': {
      filter: ' drop-shadow(rgba(0, 0, 0, 0.25) 0px 20px 20px)',
      maxHeight: '100%',
      borderRadius: '10px',
      maxWidth: '100%',
    },
  },

  Padding_Top: {
    paddingTop: '50px',
    backgroundColor: '#fff',
  },
  dialogBox: {
    padding: '30px',
  },
  walletPage: {
    '& h4': {
      fontSize: '50px',
      fontWeight: '600',
      color: '#300760',
      marginBottom: '30px',
      '& span': {
        color: '#f30066',
      },
      [theme.breakpoints.down('lg')]: {
        fontSize: '40px',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '30px',
      },
    },
    '& p': {
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: '27px',
      color: '#7f7f7f',

      '& span': {
        color: '#ec0066',
        cursor: 'pointer',
      },
    },
  },
  paper: {
    overflowY: 'unset',
  },
  customizedButton: {
    position: 'absolute',
    top: '-42px',
    right: '-9px',
    color: '#fff',
  },
  walletBox: {
    background: '#FFFFFF',
    boxShadow: ' 0px 4px 8px rgba(0, 0, 0, 0.12)',
    borderRadius: '25px',
    padding: '30px',
    textAlign: 'center',
    marginBottom: '50px',
    transition: '02s',
    cursor: 'pointer',
    border: '1px solid transparent',
    '&:hover': {
      border: '1px solid #f30065',
    },
    '& p': {
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: '27px',
      color: '#fafafa',
      textOverflow: 'ellipsis',
      maxWidth: '90%',
      overflow: 'hidden',
      position: 'relative',
    },
  },
  copy: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: ' 0px 4px 8px rgb(0 0 0 / 12%)',
    backgroundColor: '#fff',
    position: 'absolute',
    // right: "10%",
    cursor: 'pointer',
    padding: '0px 10px',
    borderRadius: '50px',
    bottom: '-26px',
    [theme.breakpoints.down('xs')]: {
      right: '10px',
      width: '90%',
    },
    '& svg': {
      fontSize: '30px',
    },
  },
  walletdiv: {
    background: '#FFFFFF',
    boxShadow: ' 0px 4px 8px rgba(0, 0, 0, 0.12)',
    borderRadius: '10px',
    padding: '20px 15px',
    position: 'relative',
    backgroundColor: '#dedede',
    border: '1px solid transparent',
    overflow: 'hidden',
    '& svg': {
      position: 'absolute',
      right: '24px',
      fontSize: '80px',
      top: '9px',
      color: '#3c076a40',
      transform: 'rotate(-20deg)',
    },
    '& h6': {
      color: '#DB0909',
    },
    '&:hover': {
      '& .wallet_box': {
        opacity: '1',
        top: '30%',
        right: '-60px',
      },
      '& .wallet_box:first-child': {
        opacity: '1',
        top: '30%',
        right: '-60px',
      },
    },
  },
  box: {
    height: '150px',
    width: '150px',
    borderRadius: '50%',
    backgroundColor: 'rgb(251 16 56 / 66%)',
    position: 'absolute',
    top: '100%',
    right: '-150px',
    transition: '0.5s all',
  },

  boxheading1: {
    display: ' inline-block',
    padding: '10px',
    borderRadius: '5px',
    marginTop: '20px',
    color: '#fafafa',
    fontWeight: '600',
  },

  dialoginputbox: {
    width: '393px',
    height: '35px',
    border: '2px solid #00ffff',
    paddingLeft: '10px',
    backgroundColor: 'rgb(235 235 235)',
    borderRadius: '8px',
    // boxShadow: "2px 5px 2px #888888ab",

    '@media (max-width: 900px)': {
      width: '291px',
    },
  },
  relfectionBox: {
    textAlign: 'center',
    color: '#fff',
    // display: 'inline-block',
    flesWarp: 'warp',
    minWidth: '90px',
    boxShadow: 'rgb(0 0 0 / 13%) 0px 5px 15px',
    border: '1px solid #ccc',
    padding: '40px 0px',
    // width: '100%',
    borderRadius: '12px',
    margin: '50px 5px 10px 5px',
    transition: ' 02s',
    background: '#ffffff1c',
    '&:hover': {
      transform: 'translateY(-10px)',
    },
    '& label': {
      fontSize: '15px',
      paddingBottom: 0,
      color: '#00ffff',
    },
    '& p': {
      color: 'white',
    },
  },
  claimButton: {
    background: 'aqua',
    color: '#fff',
    borderRadius: '6px',
    border: '1px solid aqua',
  },
  lockerBox: {
    textAlign: 'center',
    '& img': {
      width: '100%',
      maxWidth: '600px',
    },
    '& h1': {
      fontSize: '90px',
      color: '#fff',
      // fontWeight: 700,
      // fontStyle: 'italic',
    },
  },
}))

function Wallet(props) {
  const user = useContext(UserContext)
  const history = useHistory()
  const [nftList, setUserNFTlist] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isWhitelistLoading, setIsWhitelistLoading] = useState(false)
  const [isUpdatingWithdrwal, setIsUpdatingWithdrwal] = useState(false)
  const [userBalance, setUserBalance] = useState(0)
  useEffect(() => {
    if (user?.userNFTList) {
      setIsLoading(user?.userNFtLoading)
      setUserNFTlist(user?.userNFTList)
    }
  }, [user?.userNFTList, user?.userNFtLoading])

  const [open, setOpen] = React.useState(false)
  const [remove, setRemove] = React.useState(false)
  const [addressStr, setAddressStr] = useState('')
  const handleClose = () => {
    setOpen(false)
  }
  const handleRemove = () => {
    setRemove(false)
  }
  const classes = useStyles()
  const { account, chainId, library } = useWeb3React()
  const addToWhitelistHandler = async () => {
    if (chainId === ACTIVE_NETWORK) {
      if (addressStr && addressStr !== '') {
        const web3 = await getWeb3Obj()
        const addList = addressStr.split(',')
        console.log('addList', addList)
        for (var i = 0; i < addList.length; i++) {
          const dataRes = web3.utils.isAddress(addList[i])
          console.log('dataRes', dataRes)
          if (!dataRes) {
            break
          }
        }
        if (i === addList.length) {
          setIsWhitelistLoading(true)
          try {
            const contract = await getContract(
              mintAddress,
              RezwanPodABI,
              library,
              account,
            )
            const res = await contract.addToWhitelist(addList, {
              from: account,
            })
            await res.wait()
            setIsUpdatingWithdrwal(false)
            toast.success('Success')
            setIsWhitelistLoading(false)
            setOpen(false)
            setAddressStr()
          } catch (error) {
            toast.error(error.message)
            console.log('ERROR', error)
            setIsWhitelistLoading(false)
          }
        } else {
          toast.error(
            `Please enter valid address, ${i + 1} number address is wrong `,
          )
        }
      } else {
        toast.error('Please enter address')
      }
    } else {
      swichNetworkHandler()
    }
  }
  const withdrawHandler = async () => {
    if (chainId === ACTIVE_NETWORK) {
      setIsUpdatingWithdrwal(true)
      try {
        const contract = await getContract(
          mintAddress,
          RezwanPodABI,
          library,
          account,
        )
        console.log('contractObj----', contract)
        const res = await contract.withdrawAll({
          from: account,
        })
        await res.wait()
        setIsUpdatingWithdrwal(false)
        toast.success('Addresses has been whitelisted successfully')
        getContractBalance()
      } catch (error) {
        setIsUpdatingWithdrwal(false)
        toast.error(error.message)
        console.log('ERROR', error)
      }
    } else {
      swichNetworkHandler()
    }
  }
  const getContractBalance = async () => {
    const web3 = await getWeb3Obj()
    const bal = await web3.eth.getBalance(mintAddress)
    let balance = await web3.utils.fromWei(bal)
    setUserBalance(balance)
  }
  const removeFromWhitelistHandler = async () => {
    if (chainId === ACTIVE_NETWORK) {
      if (addressStr && addressStr !== '') {
        const web3 = await getWeb3Obj()
        const addList = addressStr.split(',')
        console.log('addList', addList)
        for (var i = 0; i < addList.length; i++) {
          const dataRes = web3.utils.isAddress(addList[i])
          console.log('dataRes', dataRes)
          if (!dataRes) {
            break
          }
        }
        if (i === addList.length) {
          setIsWhitelistLoading(true)
          try {
            const contract = await getContract(
              mintAddress,
              RezwanPodABI,
              library,
              account,
            )
            const res = await contract.removeFromWhitelist(addList, {
              from: account,
            })
            await res.wait()
            setIsUpdatingWithdrwal(false)
            toast.success('Address has been removed successfully')
            setIsWhitelistLoading(false)
            setRemove(false)
            setAddressStr()
          } catch (error) {
            toast.error(error.message)
            console.log('ERROR', error)
            setIsWhitelistLoading(false)
          }
        } else {
          toast.error(
            `Please enter valid address, ${i + 1} number address is wrong `,
          )
        }
      } else {
        toast.error('Please enter address')
      }
    } else {
      swichNetworkHandler()
    }
  }

  useEffect(() => {
    getContractBalance()
  }, [])
  useEffect(() => {
    if (!account) {
      history.push('/')
    }
  }, [account])

  return (
    <Page title="The Defiants - Become part of our NFT revolution!">
      <Box>
        <Grid container spacing={1}>
          <Grid item lg={12} xs={12}>
            <Box className={classes.lockerBox}>
              <Typography variant="h1">THE VAULT</Typography>
              <img src="/images/vault/vault.png" alt="" />
            </Box>
          </Grid>
        </Grid>
        <Box className={classes.deatailimage} mb={18}>
          <img
            src={`https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=${account}&choe=UTF-8`}
            alt=""
          />
          <Box className={classes.copy}>
            <Typography variant="body1" align="center">
              {account}
            </Typography>
            <CopyToClipboard text={account}>
              <IconButton onClick={() => toast.success('Copied successfully')}>
                <BiCopy />
              </IconButton>
            </CopyToClipboard>
          </Box>
        </Box>

        <Container>
          <Grid container spacing={3} alignItems="center">
            {account &&
              user.adminWalletAddress.toLowerCase() ===
                account.toLowerCase() && (
                <Grid item xs={12} sm={6} md={6}>
                  <Box className={classes.walletdiv} mt={2}>
                    <Typography variant="h6" style={{ color: 'black' }}>
                      Balance
                    </Typography>
                    <Typography variant="h1">{userBalance}</Typography>
                    {/* <GiWallet /> */}
                    <Box className={`${classes.box} wallet_box`}></Box>
                  </Box>
                </Grid>
              )}
          </Grid>

          {/* <Typography
            variant="h3"
            align="center"
            style={
              user?.adminWalletAddress === account
                ? { color: '#00ffff' }
                : { color: '#00ffff', marginTop: '42px' }
            }
          >
            ***All NFTs will be displayed once the admin stores their
            Metadata***
          </Typography> */}
          <Grid container spacing={1}>
            <Grid item lg={4} sm={4} md={4} xs={12}>
              <Box className={classes.relfectionBox}>
                <Typography
                  variant="h4"
                  style={{ fontSize: '18px', fontWeight: '700' }}
                >
                  OWNED NFT:
                  <br /> {nftList ? nftList.length : 0}
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={4} sm={4} md={4} xs={12}>
              <Box className={classes.relfectionBox}>
                <Typography
                  variant="h4"
                  style={{ fontSize: '18px', fontWeight: '700' }}
                >
                  TOTAL EARNINGS:
                  <br />
                  {user?.totalReward} MOVR
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={4} sm={4} md={4} xs={12}>
              <Box
                className={classes.relfectionBox}
                // style={{ padding: '33px' }}
              >
                <Button className={classes.claimButton}>CLAIM</Button>
              </Box>
            </Grid>
          </Grid>

          <Box mt={5} mb={5}>
            <Grid container spacing={4}>
              {nftList &&
                nftList.map((data, i) => {
                  return (
                    <Grid item xs={6} sm={4} md={3} key={i}>
                      <GalleryImage data={data} index={i} />
                    </Grid>
                  )
                })}
              {!isLoading && nftList && nftList.length === 0 && (
                <Box width="100%" textAlign="center">
                  <Typography
                    variant="h3"
                    align="center"
                    style={{ color: '#ccc' }}
                  >
                    No data found!!
                  </Typography>
                </Box>
              )}
              {isLoading && (
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width="100%"
                >
                  <Typography
                    variant="h3"
                    align="center"
                    style={{ color: '#fff' }}
                  >
                    Loading...
                  </Typography>
                  <ButtonCircularProgress />
                </Box>
              )}
            </Grid>
          </Box>

          <Dialog
            open={open}
            // onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {/* {"Use Google's location service?"} */}
              {/* {"Connect Your Wallet?"} */}
            </DialogTitle>
            <DialogContent>
              <DialogContentText
                id="alert-dialog-description"
                style={{ maxWidth: '450px' }}
              >
                <label style={{ color: '#000' }} for="fname">
                  User Wallet Address{' '}
                </label>

                <input
                  className={classes.dialoginputbox}
                  type="text"
                  placeholder="0xx00000"
                  value={addressStr}
                  onChange={(e) => setAddressStr(e.target.value)}
                />
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              {/* <Button onClick={handleClose}>Disagree</Button> */}
              <Button
                style={{ color: '#000' }}
                onClick={handleClose}
                autoFocus
                disabled={isWhitelistLoading}
              >
                Cancel
              </Button>
              <Button
                style={{ marginLeft: '10px !important' }}
                onClick={addToWhitelistHandler}
                autoFocus
                disabled={addressStr === '' || isWhitelistLoading}
              >
                Add {isWhitelistLoading && <ButtonCircularProgress />}
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog
            open={remove}
            // onClose={handleRemove}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {/* {"Use Google's location service?"} */}
              {/* {"Connect Your Wallet?"} */}
            </DialogTitle>
            <DialogContent>
              <DialogContentText
                id="alert-dialog-description"
                style={{ maxWidth: '450px' }}
              >
                <label style={{ color: '#000' }} for="fname">
                  User Wallet Address{' '}
                </label>

                <input
                  className={classes.dialoginputbox}
                  type="text"
                  placeholder="0xx00000"
                  value={addressStr}
                  onChange={(e) => setAddressStr(e.target.value)}
                />
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              {/* <Button onClick={handleClose}>Disagree</Button> */}
              <Button
                style={{ color: '#000' }}
                onClick={handleRemove}
                autoFocus
                disabled={isWhitelistLoading}
              >
                Cancel
              </Button>
              <Button
                style={{ marginLeft: '10px !important' }}
                onClick={removeFromWhitelistHandler}
                autoFocus
                disabled={isWhitelistLoading || addressStr === ''}
              >
                Remove {isWhitelistLoading && <ButtonCircularProgress />}
              </Button>
            </DialogActions>
          </Dialog>
        </Container>
      </Box>
    </Page>
  )
}

export default Wallet
