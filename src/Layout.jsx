import {Outlet} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export const Layout = () => {
    return(
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex grow w-full xl:px-20 lg:px-20 md:px-12 sm:px-2 py-12">
                <div className="w-full">
                    <Outlet />
                </div>
            </div>            
            <Footer></Footer>
        </div>
    )
}

