import Navbars from "./Navbar"
import { ReactNode } from "react"


interface NavbarInterface  {
    children:ReactNode
}


const Layout = ({children}:NavbarInterface) => {
  return (
    <>
      <Navbars/>
      <div className="container">{children}</div>
    </>
  )
}

export default Layout
