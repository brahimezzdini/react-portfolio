import React from 'react'
import {HomeSection,  HomeInformation,   HomeTitle,  HomeInfo, HomeDesc, HomeButton,  } from './style.js'

const Home=()=> {
      return (
            <HomeSection> 
                  <HomeInformation>
                        <HomeTitle>BRAHIM EZZDINI </HomeTitle>
                        <HomeInfo  >Web Developer</HomeInfo>
                        <HomeDesc  >
                              Iam a   Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                        </HomeDesc> 
                        <HomeButton  >Let's Begin</HomeButton>
                  </HomeInformation> 
            </HomeSection>
      )
}
export default Home;