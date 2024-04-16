import TransparentCard from "../components/TransparentCard";
import installation from "../images/installation.png";

function Home() {
    return (
        <div>
            <div className="top-photo w-full bg-[url('images/bg.jpg')] bg-no-repeat bg-cover bg-center">
                <div className="text-center p-80 text-white text-6xl font-semibold">WE SOLVE YOUR PROBLEMS</div>
            </div>
            <div>
                <h1 className="text-center text-xl">
                    We offer a range of services through the complete electro-mechanical asset lifecycle including:
                </h1>  
                <div className="text-center text-xs">
                    <TransparentCard 
                        title={"Industrial Installation and Fabrication"} 
                        image={installation}
                    />
                    <TransparentCard 
                        title={"Testing & Commissioning"} 
                        image={installation}
                    />
                    <TransparentCard title={"Maintenance and Servicing"} image={installation}/>
                    <TransparentCard title={"Replace and responsibly dispose of existing electro-mechanical asset."} image={installation}/>
                </div>
            </div>
        </div>
    );
}

export default Home;