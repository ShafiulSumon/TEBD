import Logo from "../images/logo.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../components/Layout';
import Home from "../pages/Home";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import About from "../pages/About";
import PageNotFound from "../pages/PageNotFound";

function Header() {

    return (
        <div className="flex flex-row justify-between w-full bg-white px-5 text-blue-400">
            <div className="text-2xl font-bold">Web App</div>
            {/* <img src={Logo} alt="Trust Engineering BD" width={228} height={30} className="pl-10"/> */}

            {/* <div className="flex flex-row items-center justify-end w-2/3">
                <div className={itemsStyle}>Home</div>
                <div className={itemsStyle}>Producs</div>
                <div className={itemsStyle}>Contact</div>
                <div className={itemsStyle}>About Us</div>
            </div> */}

            <BrowserRouter>
                <Routes>
                    <Route path='/' Component={Layout}>
                        <Route path="/" Component={Home}/>
                        <Route path="/products" Component={Products}/>
                        <Route path="/contact" Component={Contact}/>
                        <Route path="/about" Component={About}/>
                        <Route path="*" Component={PageNotFound}/>
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
    );
    
}

export default Header;
