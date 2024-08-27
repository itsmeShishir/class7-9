import { Header } from '../component/header'
import { Footers } from '../component/footer'
import { Outlet } from 'react-router-dom'

const MainPage = () => {
  return (
    <>
    <Header />
      <Outlet />
    <Footers />
    </>
  )
}

export default MainPage
