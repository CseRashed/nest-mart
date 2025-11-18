import React from 'react'
import Banner from '../../Components/Banner/Banner'
import FeaturedCategory from '../../Components/FeatutredCategory/FeaturedCategory'
import SubBanner from '../../Components/SubBanner/SubBanner'
import HomeProducts from '../../Components/HomeProduct/HomeProducts'

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <FeaturedCategory></FeaturedCategory>
      <SubBanner></SubBanner>
      <HomeProducts></HomeProducts>
    </div>
  )
}
