import { createBrowserRouter } from "react-router-dom";
import Appointment from "../components/appointment/Appointment";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Root from "../layout/Root";
import About from "../pages/about/About";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import Services from "../pages/services/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
