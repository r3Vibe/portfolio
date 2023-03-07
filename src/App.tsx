import Layout from "./components/Layout/Layout";
import AdminLayout from "./components/AdminLayout/AdminLayout";
import SiteRoutes from "./routes/SiteRoutes";
import { useTypedSelector } from "./hooks/TypedReduxHooks";

function App() {
  const userRole = useTypedSelector((state) => state.auth.userData.role);
  const isLoggedIn = useTypedSelector((state) => state.auth.isLoggedIn);
  if(userRole === "admin" && isLoggedIn) {
    return (
      <AdminLayout>
        <SiteRoutes />
      </AdminLayout>
    ) 
  }else{
    return (
      <Layout>
        <SiteRoutes />
      </Layout>
    ) 
  }
}

export default App
