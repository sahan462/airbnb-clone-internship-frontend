import {Outlet} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export const Layout = () => {
    return(
        <div className="flex flex-col min-h-screen bg-cover bg-center">
            <Navbar/>
            <div className="flex grow w-full md:px-24">
                <div className="w-full">
                    <Outlet />
                </div>
            </div>            
            <Footer></Footer>
        </div>
    )
}

