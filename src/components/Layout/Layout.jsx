 import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"


export const Layout = () => {
  return (
    <>
    <div className="min-h-screen bg-[#030712] text-white">

      <Navbar />

      <main >
        <Outlet />
      </main>

      <Footer />

    </div>
  
  </>
  )
}