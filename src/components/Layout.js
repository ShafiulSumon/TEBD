import { Link, Outlet } from "react-router-dom";

function Layout() {

    const itemsStyle = "px-10 hover:text-blue-500 font-thin hover:border-b-2 border-blue-500 hover:cursor-pointer";

    return (
        <div>
            <div>
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <Link to="/products">Products</Link>
                </div>
                <div>
                    <Link to="/contact">Contact</Link>
                </div>
                <div>
                    <Link to="/about">About</Link>
                </div>
            </div>
            {/* <Outlet /> */}
        </div>
        // <div>
        //     <div className="flex flex-row items-center justify-end w-2/3">
        //         <div className={itemsStyle}>
        //             <Link to="/">Home</Link>
        //         </div>
        //         <div className={itemsStyle}>
        //             <Link to="/products">Products</Link>
        //         </div>
        //         <div className={itemsStyle}>
        //             <Link to="/contact">Contact</Link>
        //         </div>
        //         <div className={itemsStyle}>
        //             <Link to="/about">About</Link>
        //         </div>
        //     </div>
        //     <Outlet />
        // </div>
    );
}

export default Layout;