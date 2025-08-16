import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import "../index.css";

const Layout = () => (
  <div className="min-h-screen flex flex-col text-white">
  <Navbar />

  <main className="relative flex-1 pt-30 pb-10 px-10 bg-gray-900 overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px] animate-grid"></div>

    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/10 to-transparent"></div>

    <div className="relative z-10">
      <Outlet />
    </div>
  </main>
  
  <Footer />
</div>
);

export default Layout;
