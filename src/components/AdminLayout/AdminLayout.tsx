import Sidebar from "../common/Sidebar"
import { ReactNode } from "react"
import style from "../Layout/layout.module.css";


interface layout{
    children:ReactNode
}

const AdminLayout = ({children}:layout) => {
  return (
    <>
      <Sidebar title="Admin Panel"/>
      <div className={style.colored}>
        {children}
      </div>
    </>
  )
}

export default AdminLayout
