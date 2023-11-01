import { Outlet } from "react-router-dom";
import Navbar from "../components/header/navbar/Navbar";

const Root = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-5 md:px-10 lg:px-20 font-inter">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
