import InfoShelterView from "../../componets/InfoShelterView";
import MapView from "../../componets/MapView";
import SheltersState from "../../componets/SheltersState";
import "leaflet/dist/leaflet.css";

const HomeDashboard = () =>{

    return(
        <>
        <div>
            <SheltersState/>
        </div>
        <div className="flex m-15">
            <section className="shadow-2xl rounded-lg overflow-y-auto h-[400px] border-3 border-rose-700 p-4">
                <InfoShelterView/>
            </section>
            <section className="ml-6 shadow-2xl rounded-lg  overflow-y-auto h-[400px] w-[500px]">
                <MapView variant="small"/>
            </section>
        </div>
        
    


        </>
    )
};

export default HomeDashboard;