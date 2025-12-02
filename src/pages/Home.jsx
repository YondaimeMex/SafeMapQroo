import { div } from "framer-motion/client";
import MapView from "../componets/MapView";
const Home = () => {

    return(
        <>
            <MapView variant="full"/>
            <footer className="bg-pink-950 border-t border-white/10 py-2 text-center text-white/70 text-xs">
                Información preventiva · Quintana Roo · Protección Civil
            </footer>
        </>
            
        
)}

export default Home