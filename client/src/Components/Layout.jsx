import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <div className="min-h-screen bg-gray-900 text-white">
    <Navbar />
    <main className="flex-1 pt-20">
      <Outlet />
    </main>
  </div>
);

export default Layout;
