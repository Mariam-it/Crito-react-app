import React from 'react'
import ShowcaseSection from '../ShowcaseSection/ShowcaseSection'
import Brands from '../Brands/Brands'
import Features from '../Feauters/Feauters'
import AboutCompany from '../AboutCompany/AboutCompany'
import OurService from '../OurService/OurService'
import ChooseUs from '../ChooseUs/ChooseUs'
import ProjectStudies from '../ProjectStudies/ProjectStudies'
import Team from '../Team/Team'
import Testimonal from '../Testimonal/Testimonal'
import Article from '../Article/Article'
import SignUp from '../SignUp/SignUp'

function Home() {
  return (
    <div>
        <ShowcaseSection/>
        <Brands/>
        <Features/>
        <AboutCompany/>
        <OurService/>
        <ChooseUs/>
        <ProjectStudies/>
        <Team/>
        <Testimonal/>
        <Article/>
        <SignUp/>

    </div>
  )
}

export default Home