import MapView from "../../componets/MapView";
import SheltersState from "../../componets/SheltersState";
import Shelter from "./Shelter";
import "leaflet/dist/leaflet.css";

const HomeDashboard = () =>{

    return(
        <>
        <div>
            <SheltersState/>
        </div>

        <div className="flex m-15">
            <section>
                <Shelter/>
            </section>
            <section className="shadow-2xl rounded-lg m-7 h-[500px] w-[500px]">
                <MapView variant="small"/>
            </section>
        </div>
        
    


        </>
    )
};

export default HomeDashboard;