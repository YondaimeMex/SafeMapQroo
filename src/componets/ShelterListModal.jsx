import { u } from "framer-motion/client";
import { getOneShelters } from "../api/Requests/shelter/GetOneShelterHook";
import Modal from "react-modal";
import ShelterList from "./ShelterList";


export const ShelterListModal = ({ list, select }) => {



    return (
        <div className="">
            <Modal
                isOpen={Boolean(id)}
                onRequestClose={() => setId(null)}
                contentLabel="Información del refugio"
                className="bg-white p-6 rounded-lg max-w-md mx-auto mt-20 shadow-lg outline-none"
                overlayClassName="fixed inset-0 bg-black/40 bg-opacity-40 flex items-center justify-center ">
                <ShelterList shelters={list} selected={select} />
                <button
                    onClick={() => setId(null)}
                    className="mt-6 bg-pink-800 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Cerrar
                </button>
            </Modal>
        </div>
    );
};
