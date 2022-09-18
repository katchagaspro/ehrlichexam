import NavBar from './navigation/navbar'
import SubNavBar from './navigation/subnavbar'
import HomeCarousel from './home/carousel'
import Deals from './home/deals'

export default function Home() {
  return (
    <>
      <NavBar />
      <SubNavBar />
      <HomeCarousel />
      <Deals />
    </>
  )
}