import { Outlet } from "react-router-dom"
import SideBar from "./sidebar"

const Dashboard = () => {
  return (
    <div>
      <div>
          <div>
              <SideBar />
          </div>        
          <div className="bg-white fixed left-[250px] py-6 px-4 font-[sans-serif]">
          <Outlet />
        </div>
      </div>
        
    </div>
  )
}

export default Dashboard
