import React from 'react'
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
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
  heading: {
    color: '#fff',
    fontSize: '22px',
    fontWeight: '600',
    letterSpacing: '1px',
  },
  detailsAccordian: {
    color: '#fff',
    fontSize: '18px',
    fontWeight: '400',
    letterSpacing: '1px',
    textAlign: 'center',
  },
  accordianBox: {
    marginTop: '20px',
  },
}))
const accordianDataFAQ = [
  {
    heading: 'WHEN IS THE OFFICIAL LAUNCH?',
    details: `As we mainly focus on delivering the best possible product we don’t stress for a fixed date,however end of July early August.`,
  },
  {
    heading: 'WHAT WILL THE MINT COST BE?',
    details: `The cost structure will follow our bonding curve graph increasing in 0.38 increments until 7000 have been minted then for the final 777 each NFT will cost 8 MOVR. Note that 5% of all mint transactions will be redistributed to holders and as a result those who have minted early as the cost rises will prosper more - so than those who mint closer towards sellout.
    `,
  },
  {
    heading: 'HOW MANY TRAITS ARE THERE?',
    details: `Each MBAYC NFT is unique, generated with an alogrithm using over 140+ different traits across 7 different layers per NFT. This includes 4 different rarity category's common, rare, super rare and legendary`,
  },
  {
    heading: 'HOW DO I CHECK RANKINGS?',
    details: `You can check out our rarity on our discord in Check Rank`,
  },
  {
    heading: 'MARKETPLACE?',
    details: `We will be listed on Moonbeans Marketplace.`,
  },
  {
    heading: 'HOW CAN I STAY UP TO DATE?',
    details: `To stay up to date follow our Twitter
    @Moonriverbayc or to be involved in decisions, games and a thriving community as it grows and makes history join our discord.`,
  },
]
export default function FAQ() {
  const classes = useStyles()
  return (
    <Box className={classes.parentBox}>
      <Container>
        <Box>
          <Box className={classes.headingBox}>
            <Typography variant="h2">FAQ</Typography>
          </Box>
          <Box className={classes.accordianBox}>
            {accordianDataFAQ &&
              accordianDataFAQ.map((data, index) => {
                return (
                  <Accordion>
                    <AccordionSummary
                      expandIcon={
                        <ExpandMoreIcon style={{ color: '#00ffff' }} />
                      }
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.heading}>
                        {data?.heading}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className={classes.detailsAccordian}>
                        {data.details}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                )
              })}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
