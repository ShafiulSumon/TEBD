import Logo from "../images/logo.png";
import getAppInfo from "../Utils/AppName";
import { NavLink } from "react-router-dom";

const AppName = getAppInfo().appName;

function Header() {
    const itemsStyle = "px-10 hover:text-sky-500 text-lg font-light hover:font-bold  hover:cursor-pointer";

    const linkStyle = (navInfo) => {
        if(navInfo.isActive) {
            // return "border-b-2 border-blue-500";
            return "text-orange-500 underline underline-offset-8";
        }
    }

    return (
        <div className="flex flex-row justify-between w-full bg-white px-5 text-sky-600 h-16 sticky top-0">
            {/* <div className="text-2xl font-bold my-auto">{AppName}</div> */}
            <img src={Logo} alt={AppName} width={420} className="pl-10 py-2"/>

            <div className="flex flex-row items-center justify-end w-2/3">
                <div className={itemsStyle}>
                    <NavLink className={linkStyle} to="/">Home</NavLink>
                </div>
                <div className={itemsStyle}>
                    <NavLink className={linkStyle} to="/products">Products</NavLink>
                </div>
                <div className={itemsStyle}>
                    <NavLink className={linkStyle} to="/contact">Contact</NavLink>
                </div>
                <div className={itemsStyle}>
                    <NavLink className={linkStyle} to="/about">About</NavLink>
                </div>
            </div>
        </div>
    );
    
}

export default Header;
