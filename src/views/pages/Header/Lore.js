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
  imageBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& img': {
      width: '100%',
      maxWidth: '600px',
    },
  },
}))
const accordianDataFAQ = [
  {
    heading: 'MOONRIVER',
    details: `The moon planet Moonriver, home to the Moonriver apes is a relatively small planet made up
    of mountain ranges and rivers that run for miles across the moon's surface. The apes that
    inhabit this planet are inquisitive and curious in nature always looking for the next big
    adventure to go off and enjoy themselves on. they are a strange species who adopt different
    pastimes and cultures from their neighbouring planets. although these apes love to have fun
    and try new things, their race has a distinct passion for travel. these apes have recently
    discovered a new technology which will allow them to travel through the galaxy at light
    speeds in their new ships. This technological advancement comes at the same time as their
    recent discovery of races similar to them in nature after viewing a nearby planet when trialing
    their new space crafts. these apes have now set their sights on discovering their beginnings
    and finding any life forms which may be related by blood and re uniting with potential lost
    relatives.
    `,
    image: '/images/lore/loreMoonriver.png',
  },
  {
    heading: 'POLKADOT',
    details: `These alien species of apes known as the Polkadot apes are the closest relatives to the
    Moonriver apes. At some point in time the descendants of an unknown race of apes
    separated across the galaxy creating two advanced alien species. the polkadots are an
    entirely female species who have advanced intellect and are peaceful in nature. This ape
    society are well versed in galactic travel and are great diplomats in there solar system
    maintaining peace while documenting the history of their race in cryptic writings stored in
    their ancient library on their home planets capital city named polkatropolis. As much as this
    species travels the galaxy they are yet to encounter fellow apes from their bloodline. These
    apes yearn to learn about their past and discover and document the time line of their
    species. In their search for this information the species have sent out thousands of
    messages into the darkness of space in the hopes of contact with their lost relatives.`,
    image: '/images/lore/lorePolkadot.png',
  },

  {
    heading: 'KUSAMA',
    details: `The Kusama apes are a fascinating species of apes who originate from a jungle planet in the
    far regions of galaxy. Their planet is coverd in a thick rainforest with a vast variety of alien
    flora and fauna the most advance of which are these mutated species of apes. Not much is
    known about these apes and their origin but it is rumored that these apes evolved from an
    early generation of apes who were left stranded on the planet after crash landing thousands
    of years ago. The kusama apes live in villages of treehouses through the upper canopy of
    the dense forest to avoid the alien predators which roam the forest floor below. although
    these apes are flightless they have still retained their advanced agility through years of
    adaptations, allowing them to travel swiftly through their tropical habitat.`,
    image: '/images/lore/kusama.png',
  },
  {
    heading: 'MOONBEAM',
    details: `These corrupted apes inhabit a multiple of Moons across their galaxy. Their immense greed
    and cruelty to other alien species has become the legacy of their species to their brutal
    conquest of any moon they discover. These apes have discovered a way of harvesting each
    moons lunar energy and absorbing its power to gain life, strength and telekinetic powers.
    these powers have come at a cost to their species though causing intense mutations and
    corrupted genes, the lunar radiation from the lunar power they absorb has caused horns to
    grow from their skull, their skin to become thin and fragile resulting in their mouths and skin
    to rip from fighting and grinning at their own corruption, their teeth have become misshapen
    and their fur to dawn a purple colour and glow. These apes are an unknown evil in their
    galaxy for now but their sights have been set on a new Moon to conquer and only time will
    tell how long they will remain unknown`,
    image: '/images/lore/mooneam.png',
  },
  {
    heading: 'ROME',
    details: `Planet Rome, the home planet of an ancient civilisation known to the galaxy as the Romans.
    Ruled by the great emperor Octavius, the society of Rome has immense military strength
    and have a long history or war and conflict within their solar system. Their gruesome tactics
    in combat and heart and skill of their warriors has lead to multiple successful conquests and
    glory for their ruler. Rumors around the galaxy suggest that new born Romans are sent to
    the Jungle lands of the planet, those who survive and return to the capital city Athenus as
    adolescents are deemed worthy and will grow up to become the perfect warrior to protect the
    planet from any threats with their lives.`,
    image: '/images/lore/rome.png',
  },
  {
    heading: 'ASTAR',
    details: `The astars, native species to the planet astar are a highly intelligent species of ape woe's
    planet thrives from controlling the imports and exports within their solar system. their society
    hierarchy is symbolized by their attire, the most successful among they have worked their
    way up the ranks of their community through through multiple successful business
    transactions. the colorful suits you may see on these apes are only worn by the most
    successful traders on the planet, these apes are in control of the trade floors, and all blue
    suit apes must report to them the blue suit-wearing apes are the accountants of the trading
    floors who ensure all figures are in order and monitor stocks and trades for the planet.
    Finally, the shirt and tie-wearing apes are the lowest ranking apes on the planet and making
    trades for the planet these apes work every day to make successful trades in order to one
    day wear a blue suit. The the planet has had a long history of peaceful trading however,
    greed and jealousy has led to corruption in their past with some trades being deliberately
    mishandled by the species for monetary gain. tension in the solar system is at an all time
    high as some of the solar systems inhabitance are growing weary of these ape's business
    methods and shady activities. it is only a matter of time before one more bad trade begins an
    intergalactic conflict of colossal scale.`,
    image: '/images/lore/astar.png',
  },
  {
    heading: 'HUCKLEBERRY',
    details: `The Huckleberry apes come from an ocean planet which has become fully submerged in
    water after years of climate damage heating up the atmosphere, these apes adapted to
    these climate changes and managed to build floating landmasses and boats to migrate to
    ocean life before the planet was fully submerged approximately 4000 years ago. These apes
    now rely on fishing to provide for their sustenance. Not all apes survived the drastic changes
    to the landscape and those left behind either perished or mutated into an amphibious
    species of ape. When the huckleberry apes first encountered these mutants they began
    fighting and deliberately fishing for the scaled apes as a means of eradicating them.
    However after years of unsuccessful attempts to eliminate them they realised what these
    amphibious beings could do for them and so began welcoming them to their community`,
    image: '/images/lore/hucklerry.png',
  },
  {
    heading: 'SUSHI',
    details: ` These apes are wise and acknowledge that threats within their galaxy may jeopardize their way of life.`,
    image: '/images/lore/sushi.png',
  },
  {
    heading: 'RMRK',
    details: `The apes of planet RMRK are a technologically advance society whose community is
    entirely dependent on their connection with technology. This civilization has learnt how to
    harness the powers of technology with their exceptional intelligence, so much so that they
    have developed artificial immortality. The wealthy among them have been able to upload
    their consciousness to their global network allowing life after death. The RMRK’s gaming
    based culture has kept the planet at peace by resolving conflicts and disputes amongst its
    nations in virtual battles of tactics, whits, and skill broadcast to the entire planet.`,
    image: '/images/lore/rmrk.png',
  },
  {
    heading: 'ZENLINK',
    details: `This Devout religious species of ape are known as the Zen links and inhabit a small planet
    much similar to earth. Their religious garb signifies their status in their region and dictates
    roles and responsibilities for the Zen temple. these apes begin their religious journey as a
    yellow cloak and work their way to the orange cloak before ascending to the highest honor
    for a monk, being the red cloak. Apes who wear the red cloak are the elders of the
    community, they are the wisest and most devout monks from their society and are branded
    with the Zenlink tattoo on their forehead. Other distinctive attributes these apes have are
    their shaved heads religious red marks prayer beads and glasses for reading sacred texts.
    these apes pray, read scripture and meditate for their entire lives in the hopes to ascend
    from their world to a higher plane of existence where they believe they will be one with their
    creator and be gifted with eternal peace and life by their ape gods side.`,
    image: '/images/lore/lore.png',
  },
]
export default function Lore() {
  const classes = useStyles()
  return (
    <Box className={classes.parentBox}>
      <Container>
        <Box>
          <Box className={classes.headingBox}>
            <Typography variant="h2">LORE</Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item lg={12} xs={12}>
              <Box className={classes.accordianBox}>
                {accordianDataFAQ &&
                  accordianDataFAQ.map((data, index) => {
                    return (
                      <>
                        <Grid container spacing={1} key={index}>
                          <Grid item lg={12} xs={12}>
                            <Box className={classes.imageBox}>
                              <img src={data.image} />
                            </Box>
                          </Grid>
                          <Grid item lg={12} xs={12}>
                            <Accordion>
                              <AccordionSummary
                                expandIcon={
                                  <ExpandMoreIcon
                                    style={{
                                      color: '#00ffff',
                                      textAlign: 'center',
                                    }}
                                  />
                                }
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                              >
                                <Typography className={classes.heading}>
                                  {data?.heading}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography
                                  className={classes.detailsAccordian}
                                >
                                  {data.details}
                                </Typography>
                              </AccordionDetails>
                            </Accordion>
                          </Grid>
                        </Grid>
                      </>
                    )
                  })}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}
