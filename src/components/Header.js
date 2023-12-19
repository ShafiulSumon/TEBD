import Logo from "../images/logo.png";
import getAppInfo from "../Utils/AppName";

const AppName = getAppInfo().appName;

function Header() {

    return (
        <div className="flex flex-row justify-between w-full bg-white px-5 text-blue-400">
            <div className="text-2xl font-bold">{AppName}</div>
            {/* <img src={Logo} alt={AppName} width={228} height={30} className="pl-10"/> */}

            {/* <div className="flex flex-row items-center justify-end w-2/3">
                <div className={itemsStyle}>Home</div>
                <div className={itemsStyle}>Producs</div>
                <div className={itemsStyle}>Contact</div>
                <div className={itemsStyle}>About Us</div>
            </div> */}

            {/* <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/products" element={<Products/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="*" element={<PageNotFound/>}/>
                    </Route>
                    <Route path='/' Component={Layout}>
                        <Route path="/" Component={Home}/>
                        <Route path="/products" Component={Products}/>
                        <Route path="/contact" Component={Contact}/>
                        <Route path="/about" Component={About}/>
                        <Route path="*" Component={PageNotFound}/>
                    </Route>
                </Routes>
            </BrowserRouter> */}

        </div>
    );
    
}

export default Header;
