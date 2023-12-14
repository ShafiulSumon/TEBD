import Logo from "../images/logo.png";

function Header() {

    const itemsStyle = "px-10 hover:text-blue-500 font-thin hover:border-b-2 border-blue-500 hover:cursor-pointer";

    return (
        <div className="flex flex-row justify-between w-full bg-white px-5 text-blue-400">
            {/* <div className="text-2xl font-bold">Trust Engineering BD</div> */}
            <img src={Logo} alt="Trust Engineering BD" width={228} height={30} className="pl-10"/>

            <div className="flex flex-row items-center justify-end w-2/3">
                <div className={itemsStyle}>Home</div>
                <div className={itemsStyle}>Producs</div>
                <div className={itemsStyle}>Contact</div>
                <div className={itemsStyle}>About Us</div>
            </div>
        </div>
    );
    
}

export default Header;
