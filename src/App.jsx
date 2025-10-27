import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './comp/Home';
import Layout from './Layout';
import Coaches from './comp/Coaches';
import Classes from './comp/Classes';
import { Analytics } from "@vercel/analytics/react"
import AdminLogin from './comp/admin/AdminLogin';
import AdminDashboard from './comp/admin/AdminDashboard';
function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,   // هنا حاطين الـ Layout فيه Footer و Outlet
      children: [
        { index: true, element: <Home /> },
        { path: "/coaches", element: <Coaches /> },
        { path: "/classes", element: <Classes /> },
                { path: "/admin-login", element: <AdminLogin /> },
      { path: "/admin-dashboard", element: <AdminDashboard /> },
      ],
    },
  ]);

  return     <>
      <RouterProvider router={router} />
      <Analytics />   {/* ✅ هنا هيتسجل الترافيك */}
    </>
}

export default App;
