import { Route, Routes } from "react-router-dom";

//admin pages only for loggedin admin users
import Dashnoard from "../pages/admin/Dashnoard";
import PersonalDetails from "../pages/admin/PersonalDetails";
import EduvationalDetails from "../pages/admin/EduvationalDetails";
import Skills from "../pages/admin/Skills";
import Languages from "../pages/admin/Languages";
import Frameworks from "../pages/admin/Frameworks";
import Projects from "../pages/admin/Projects";
import Contacts from "../pages/admin/Contacts";
import Profile from "../pages/admin/Profile";


//login page for admin
import Login from "../pages/admin/Login";


const SiteRoutes = () => {
  return (
    <Routes>
        <Route path="/admin/dashboard" element={<Dashnoard/>}/>
        <Route path="/admin/personal-details" element={<PersonalDetails/>}/>
        <Route path="/admin/educational-details" element={<EduvationalDetails/>}/>
        <Route path="/admin/skills" element={<Skills/>}/>
        <Route path="/admin/languages" element={<Languages/>}/>
        <Route path="/admin/frameworks" element={<Frameworks/>}/>
        <Route path="/admin/projects" element={<Projects/>}/>
        <Route path="/admin/contacts" element={<Contacts/>}/>
        <Route path="/admin/profile" element={<Profile/>}/>
        <Route path="/auth/login" element={<Login/>}/>
    </Routes>
  )
}

export default SiteRoutes
