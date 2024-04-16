import getAppInfo from "../Utils/AppName";

const AppName = getAppInfo().appName;
const version = getAppInfo().version;
const year = getAppInfo().year;

function Footer() {


    return (
        <div className="footer-bg-color w-full text-center bg-sky-950 text-gray-400 p-3 mt-auto">
            <h2>{version} © {year}. All rights reserved by {AppName}</h2>
        </div>
    );
}

export default Footer;