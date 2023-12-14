function Footer() {

    const version = "1.0.0";
    const year = 2023;

    return (
        <div className="w-full text-center bg-sky-950 text-white p-3 mt-auto">
            <h2>{version} © {year}. All rights reserved by Trust Engineering BD</h2>
        </div>
    );
}

export default Footer;