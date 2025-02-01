import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";


export const Approute = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    }
])
