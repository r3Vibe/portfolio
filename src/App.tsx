import Layout from "./components/Layout/Layout";
import AdminLayout from "./components/AdminLayout/AdminLayout";
import SiteRoutes from "./routes/SiteRoutes";


function App() {
  const userRole:string = "admin";
  if(userRole === "user") {
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
