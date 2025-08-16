import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <div className="min-h-screen bg-gray-900 text-white">
    <Navbar />
    {/*Remove Backgrounds later*/}
    <main className="flex-1 pt-30 pb-10 px-10 bg-amber-200">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
