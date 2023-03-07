import Navbars from "../common/Navbar";
import { ReactNode } from "react";
import Footer from "../common/Footer";
import style from "./layout.module.css";

interface NavbarInterface  {
    children:ReactNode
}


const Layout = ({children}:NavbarInterface) => {
  return (
    <>
      <Navbars title="Portfolio"/>
      <div className={style.wrapper}>{children}</div>
      <Footer/>
    </>
  )
}

export default Layout
