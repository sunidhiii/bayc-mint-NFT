import React, { useEffect, useState, useContext } from 'react'
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
  withStyles,
  TextField,
  Slider,
  IconButton,
} from '@material-ui/core'
import { useWeb3React } from '@web3-react/core'
import { mintAddress, ACTIVE_NETWORK } from 'src/constants'
import NFTPunksABI from 'src/constants/ABI/NFTPunksABI.json'
import {
  getWeb3Obj,
  getContract,
  swichNetworkHandler,
  getWeb3ContractObject,
} from 'src/utils'
import { UserContext } from 'src/context/User'
import { toast } from 'react-toastify'
import moment from 'moment'
import ButtonCircularProgress from 'src/component/ButtonCircularProgress'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  bannerBox: {
    position: 'relative',
    background: 'transparent',
    // height: "90vh",
    // padding: '80px 0',
    overflow: 'hidden',
    zIndex: ' 1',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
    },
    '@media(max-width:960px)': {
      padding: '0',
    },
  },

  bannerimages: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
    '& figure': {
      height: 'auto',
      marginLeft: '20px',
      marginBottom: '20px',
      overflow: 'hidden',
      [theme.breakpoints.down('xs')]: {
        width: '150px',
        overflow: 'inherit',
      },
      '& img': {
        transition: '02s',
        [theme.breakpoints.down('xs')]: {
          width: '100%',
        },
      },

      '&:hover': {
        '& img': {
          transform: 'scale(1.1)',
          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        },
      },
    },
  },
  gridflex: {
    display: 'flex',
    alignItems: 'center',
    height: '70vh',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
    },
  },
  marginleft: {
    marginLeft: '10px !important',
  },
  gridflex: {
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.down('md')]: {
      height: 'auto',
    },
  },
  textbox: {
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    '& h1': {
      fontSize: '50px',
      fontWeight: '600',
      color: '#ead7d2',
      [theme.breakpoints.down('lg')]: {
        fontSize: '50px',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '30px',
      },
    },
    '& p': {
      fontSize: '16px',
      marginTop: '20px',
      color: '#fff ',
    },
    '@media(max-width:960px)': {
      marginTop: '-60px',
    },
  },
  image2: {
    marginLeft: '-20px !important',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '0px !important',
    },
  },
  buttonright: {
    marginLeft: '10px !important',
    minWidth: '150px',
  },
  minth1: {
    fontFamily: 'Italianno',
    fontSize: '80px !important',
    fontWeight: '100px !important',
    lineHeight: '80px',
  },

  buttonBox: {
    background: '#2E2A2A',
    padding: '23px',
  },

  buttonsection: {
    marginTop: '25px',
    borderRadius: '10px',
  },

  mint: {
    background: '#00ffff',
    borderRadius: '120px',
    fontWeight: '900',
    fontStyle: 'italic',
    // WebkitTextStrokeWidth: '1px',
    // WebkitTextStrokeColor: 'black',
    // border: "1px solid #FFFFFF;",
    '@media(max-width:960px)': {
      marginTop: '-12px',
    },
  },

  mainsecion: {
    background: '#2E2A2A',
    padding: '0px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: '10px',
  },

  quantityinput: {
    padding: '1px',
    color: '#fff',
    fontSize: '22px',
    width: '43px',
    height: '23px',
    background: '#2e2a2a',
    border: 'none',
  },

  amount: {
    margin: '80px 17px 40px 17px',
    borderRadius: '3px',
    '& label': {
      color: '#fff',
    },
  },
  quantity: {
    maxWidth: '100%',
    display: 'flex',
    height: '57px',
    border: '3px solid #00ffff',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '20px',

    '& input': {
      textAlign: 'center',
      backgroundColor: 'transparent',
      color: '#fff',
      border: 'none',
      fontSize: '20px',
      minWidth: '20px',
      maxWidth: '50px',
      fontWeight: 'bolder',
      '&:focus-visible': {
        outline: 'none',
      },
      '&::placeholder': {
        color: '#fff',
      },
    },

    '& button': {
      fontSize: '30px',
      // paddingTop: "20px",
      color: '#fff',
      '&:first-child': {
        color: '#00ffff;',
        borderRadius: '20px',
        fontSize: '70px',
      },
      '&:last-child': {
        color: '#00ffff',
        borderRadius: '20px',
        fontSize: '45px',
      },
    },
    textbox: {
      paddingLeft: '50px',
      [theme.breakpoints.down('sm')]: {
        paddingLeft: '0px',
      },
      '& h1': {
        fontSize: '50px',
        fontWeight: '600',
        color: '#fff',
        [theme.breakpoints.down('lg')]: {
          fontSize: '50px',
        },
        [theme.breakpoints.down('xs')]: {
          fontSize: '30px',
        },
      },
      '& p': {
        fontSize: '14px',
        marginTop: '20px',
        color: '#fff ',
      },
    },
    '@media(max-width:770px)': {
      height: '42px',
    },
    '@media(max-width:370px)': {
      width: '50%',
    },
  },

  buttonsectionamount: {
    marginLeft: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '@media (max-width: 767px)': {
      marginTop: '0px',
      marginLeft: '5px',
      // padding: "34px",
    },
  },
  boxsec: {
    marginBottom: '45px',
    marginTop: '45px',
    '@media(max-width:770px)': {
      margin: '45px 9px 0px -7px',
    },
  },
  textsec: {
    '@media(max-width:960px)': {
      marginTop: '-40px',
    },
  },
  newgrid: {
    '@media(max-width:960px)': {
      marginTop: '-20px',
    },
  },
  subBoxHading: {
    textAlign: 'center',
    fontWeight: 'bolder',
    letterSpacing: '2px',
  },
  amuountTag: {
    '& h4': {
      color: '#fff',
    },
  },
}))

// const handleChange = (event) => {
//     setState({ ...state, [event.target.name]: event.target.checked });
//   };

export default function BestSeller({ setNFTPriceCurrent }) {
  const classes = useStyles()
  const history = useHistory()
  const { library, account, chainId } = useWeb3React()
  const user = useContext(UserContext)
  const [numberofnft, setNumberofnft] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [nftPrice, setNFTPrice] = useState('')
  const [totalSupply, setTotalSupply] = useState('')
  const [maxSupply, setMaxSupply] = useState('')
  const [mintBtntTxt, setMintBtnTxt] = useState('MINT NOW')
  const nftMintHandlerBlockChain = async () => {
    if (chainId === ACTIVE_NETWORK) {
      if (parseFloat(user?.yourWalletBalance) > 0) {
        if (
          parseFloat(user?.yourWalletBalance) >=
          parseFloat(numberofnft) * parseFloat(nftPrice)
        ) {
          if (
            parseInt(totalSupply) + parseInt(numberofnft) <=
            parseInt(maxSupply)
          ) {
            try {
              setIsLoading(true)
              setMintBtnTxt('MINTING...')
              const web3 = await getWeb3Obj()
              const contractObj = getContract(
                mintAddress,
                NFTPunksABI,
                library,
                account,
              )
              const amountToBeSend =
                parseFloat(numberofnft) * parseFloat(nftPrice)
              const mintFun = await contractObj.mint(numberofnft, {
                value: web3.utils.toWei(amountToBeSend.toString()),
              })
              await mintFun.wait()
              setIsLoading(false)
              setMintBtnTxt('MINT NOW')
              getBasicNFtDetailsHandler()
              user.getParticularWalletDetqails()
              history.push('/wallet')
              toast.success('Your NFT has been minted successfully.')
            } catch (error) {
              console.log(error)
              toast.error(error.message)
              setIsLoading(false)
              setMintBtnTxt('MINT NOW')
            }
          } else {
            toast.error('All NFTs have been minted')
          }
        } else {
          toast.error('Your wallet balance is insufficient')
        }
      } else {
        toast.error('Your wallet balance is too low.')
      }
    } else {
      user.swichNetworkHandler()
    }
  }
  const getBasicNFtDetailsHandler = async () => {
    const web3 = await getWeb3Obj()
    try {
      const contractObj = await getWeb3ContractObject(NFTPunksABI, mintAddress)
      // console.log('contractObj----', contractObj)
      // const currentRate = await contractObj.methods.currentRate().call()
      // console.log('currentRate', web3.utils.fromWei(currentRate))
      const getNFTPriceFun = await contractObj.methods.getNFTPrice().call()
      const totalSupplyFun = await contractObj.methods.totalSupply().call()
      const MAX_SUPPLYFun = await contractObj.methods.MAX_SUPPLY().call()
      setTotalSupply(totalSupplyFun.toString())
      setMaxSupply(MAX_SUPPLYFun.toString())
      setNFTPrice(web3.utils.fromWei(getNFTPriceFun))
      setNFTPriceCurrent(web3.utils.fromWei(getNFTPriceFun))
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getBasicNFtDetailsHandler()
  }, [])

  return (
    <Box className={classes.bannerBox}>
      <Container maxWidth="lg">
        <Grid
          style={{ marginBottom: '20px' }}
          container
          spacing={5}
          alignItems="flex-start"
          className={classes.gridflex}
        >
          {/* <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box className="bannerimageBox">
              <img
                src="images/banner.png"
                // className="banner1"
                style={{ width: '100%' }}
                alt="banner image"
              />
            </Box>
          </Grid> */}
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            className={`${classes.textsec} wow bounceInUp`}
          >
            <Box className={classes.textbox} mb={5}>
              <Box className={classes.amount}>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={12}>
                    <Box>
                      <Grid container spacing={4} alignItems="center">
                        <Grid item xs={6} lg={6}>
                          <Box>
                            <label className={classes.subBoxHading}>
                              <i>AMOUNT</i>
                            </label>
                            <Box className={classes.quantity}>
                              <Box
                                className={classes.amuountTag}
                                width="100%"
                                textAlign="center"
                              >
                                <Typography variant="h4">{`${Number(
                                  parseFloat(nftPrice) * parseInt(numberofnft),
                                ).toFixed(2)} MOVR`}</Typography>
                              </Box>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6} lg={6}>
                          <Box>
                            <label className={classes.subBoxHading}>
                              <i>QUANTITY</i>
                            </label>
                            <Box className={classes.quantity}>
                              <Button
                                variant="outline"
                                color="secondary"
                                size="small"
                                onClick={() => {
                                  if (numberofnft > 1) {
                                    setNumberofnft(numberofnft - 1)
                                  }
                                }}
                                disabled={isLoading}
                              >
                                -
                              </Button>
                              <input
                                style={{ width: '100%' }}
                                type="text"
                                placeholder={numberofnft}
                                readOnly
                              />
                              <Button
                                variant="outline"
                                color="secondary"
                                size="small"
                                onClick={() => {
                                  if (numberofnft < 11) {
                                    setNumberofnft(numberofnft + 1)
                                  }
                                }}
                                disabled={isLoading}
                              >
                                +
                              </Button>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box className={classes.boxsec}>
                {account ? (
                  <Button
                    className={classes.mint}
                    variant="contained"
                    size="large"
                    color="secondary"
                    fullWidth
                    onClick={() => {
                      nftMintHandlerBlockChain()
                    }}
                    disabled={isLoading}
                  >
                    {mintBtntTxt} {isLoading && <ButtonCircularProgress />}
                  </Button>
                ) : (
                  <Button
                    className={classes.mint}
                    variant="contained"
                    size="large"
                    color="secondary"
                    fullWidth
                    onClick={() => user.connectWallet()}
                  >
                    CONNECT WALLET
                  </Button>
                )}
              </Box>
              <Grid container>
                <Grid item lg={12} xs={12}>
                  <Slider value={totalSupply} />
                </Grid>
              </Grid>
            </Box>
            <Box textAlign="center" mt={3}>
              <Typography
                style={{ color: '#FFFFFF', fontWeight: '900' }}
                variant="h3"
                className="text-white"
              >
                <i>{`${totalSupply} OF ${maxSupply} APES MINTED`}</i>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">{/* <PublicMint user={user} /> */}</Container>
    </Box>
  )
}
