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
import Login from "../pages/auth/Login";
import RouteHelper from "./RouteHelper";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";


const SiteRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RouteHelper/>}>
        <Route index element={<Home/>}></Route>
      </Route>
      <Route path="/admin" element={<RouteHelper giveAccess="adminOnly" />}>
        <Route path="dashboard" element={<Dashnoard />} />
        <Route path="personal-details" element={<PersonalDetails />} />
        <Route path="educational-details" element={<EduvationalDetails />} />
        <Route path="skills" element={<Skills />} />
        <Route path="languages" element={<Languages />} />
        <Route path="frameworks" element={<Frameworks />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="/auth" element={<RouteHelper giveAccess="redirectIfAuth"/>}>
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default SiteRoutes
