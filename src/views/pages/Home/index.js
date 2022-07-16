import React, { useRef, useState } from 'react'
import { Box } from '@material-ui/core'
import Page from 'src/component/Page'
import Banner from './Banner'
import WhatTechnologies from './WhatTechnologies'
import PublicMint from './PublicMint'
import Team from './Team'
import Corosel from './Corosel'
import FAQ from '../Header/FAQ'
import WhyUs from '../Header/WhyUs'
import Lore from '../Header/Lore'
import ApexChart from './ApexChart'
import Roadmap from './Roadmap'

function Home(props) {
  const refs = {
    home: useRef(null),
    about: useRef(null),
    features: useRef(null),
    faq: useRef(null),
    roadmap: useRef(null),
    contact: useRef(null),
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  const [nftPriceCurrent, setNFTPriceCurrent] = useState('')
  return (
    <Page title="Become part of our NFT revolution!">
      <Box buttonClick={scrollToTop}>
        <Banner />
        <div ref={refs.home} id="section4">
          <WhatTechnologies
            setNFTPriceCurrent={(data) => setNFTPriceCurrent(data)}
          />
        </div>

        <ApexChart nftPriceCurrent={nftPriceCurrent} />

        {/* <PublicMint /> */}
        <Corosel />
        <div ref={refs.home} id="section2">
          <WhyUs />
        </div>
        <div ref={refs.home} id="section3">
          <Team />
        </div>

        <div ref={refs.home} id="section5">
          <Roadmap />
        </div>
        <div ref={refs.home} id="section1">
          <FAQ />
        </div>
        <div ref={refs.home} id="section0">
          <Lore />
        </div>
      </Box>
    </Page>
  )
}
export default Home
