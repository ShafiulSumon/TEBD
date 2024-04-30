import TransparentCard from "../components/TransparentCard";
import installation from "../images/installation.png";
import testing from "../images/test.png";
import service from "../images/service.png";
import replace from "../images/replace.png";
import otherService from "../images/customer.png";

function Home() {
    return (
        <div className="bg-slate-200">
            <div className="top-photo w-full bg-[url('images/bg.jpg')] bg-no-repeat bg-cover bg-center">
                <div className="text-center p-80 text-white text-6xl font-semibold">WE SOLVE YOUR PROBLEMS</div>
            </div>
            <div>
                <h1 className="text-center text-2xl font-bold mt-10">
                    We offer a range of services through the complete electro-mechanical asset lifecycle including:
                </h1>  
                <div className="flex flex-row justify-around m-16">
                    <TransparentCard 
                        className="basis-1/4"
                        title={"Industrial Installation and Fabrication"} 
                        image={installation}
                    />
                    <TransparentCard 
                        className="basis-1/4"
                        title={"Testing & Commissioning"} 
                        image={testing}
                    />
                    <TransparentCard
                        className="basis-1/4"
                         title={"Maintenance and Servicing"}
                        image={service}
                    />
                    <TransparentCard 
                        className="basis-1/4"
                        title={"Replace and responsibly dispose of existing electro-mechanical asset."} 
                        image={replace}
                    />
                </div>
                
                <div className="other-service-css flex flex-row p-10">
                    <div className="basis-1/5"></div>
                    <div className="basis-1/5">
                        <img src={otherService} alt="photo" width={300} height={200}/>
                    </div>
                    <div className="basis-2/5">
                        <h2 className="text-bold text-5xl text-yellow-500">Other Services</h2>
                        <ul className="text-2xl text-white mt-5">
                            <li>Free initial consultancy</li>
                            <li>Fault finding(inspection & tesging + defect repair)</li>
                            <li>Fixed electrical testing</li>
                            <li>Generator servicing</li>
                        </ul>
                    </div>
                    <div className="basis-1/5"></div>
                </div>

            </div>
        </div>
    );
}

export default Home;