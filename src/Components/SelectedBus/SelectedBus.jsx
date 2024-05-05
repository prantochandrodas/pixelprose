import { useLoaderData } from "react-router-dom";
import steering from '../../assets/selectedBus/1655284.png';
import { useState } from "react";
import SelectedBusForm from "../SelectedBusForm/SelectedBusForm";
import SelectedBusModal from "../SelectedBusModal/SelectedBusModal";
import { useQuery } from "react-query";

const SelectedBus = () => {
    const selectedBus = useLoaderData();
    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeatClick = (seat) => {
        if (selectedSeats.includes(seat)) {
            setSelectedSeats(selectedSeats.filter(selectedSeat => selectedSeat !== seat));
        } else {
            setSelectedSeats([...selectedSeats, seat]);
        }
    };

    const [showModal, setShowModal] = useState(false);



    return (
        <div className="w-[90%]  lg:flex md:flex mx-auto mt-20 justify-center">
            <SelectedBusForm setShowModal={setShowModal} selectedBus={selectedBus} />
            <div className="w-[800px] mb-10">
                <div className="w-[400px] lg:ml-5 border border-gray-400">
                    <div className="p-4 flex justify-between">
                        <h1 className="font-[500]">Door</h1>
                        <img src={steering} className="w-[40px]" alt="" />
                    </div>
                    <div className="p-4">
                        <div className="flex justify-between my-3">
                            <div className="flex items-center gap-[5px]">
                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[0]) ?
                                        <button className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[0]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[0]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[0])}>{selectedBus.seat[0]}</div>
                                }

                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[1]) ?
                                        <button className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[1]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[1]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[1])}>{selectedBus.seat[1]}</div>
                                }
                            </div>
                            <div className="flex items-center gap-[5px]">
                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[2]) ?
                                        <button className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[2]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[2]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[2])}>{selectedBus.seat[2]}</div>
                                }

                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[3]) ?
                                        <button className={`w-[40px] h-[60px]  flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[3]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[3]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[3])}>{selectedBus.seat[3]}</div>
                                }
                            </div>
                        </div>
                        <div className="flex justify-between my-3">
                            <div className="flex items-center gap-[5px]">
                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[4]) ?
                                        <button className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[4]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[4]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[4])}>{selectedBus.seat[4]}</div>
                                }

                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[5]) ?
                                        <button className={`w-[40px] h-[60px] flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[5]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[5]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[5])}>{selectedBus.seat[5]}</div>
                                }
                            </div>
                            <div className="flex items-center gap-[5px]">
                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[6]) ?
                                        <button className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[6]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[6]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[6])}>{selectedBus.seat[6]}</div>
                                }

                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[7]) ?
                                        <button className={`w-[40px] h-[60px] flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[7]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[7]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[7])}>{selectedBus.seat[7]}</div>
                                }
                            </div>
                        </div>
                        <div className="flex justify-between my-3">
                            <div className="flex items-center gap-[5px]">
                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[8]) ?
                                        <button className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[8]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[8]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[8])}>{selectedBus.seat[8]}</div>
                                }

                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[9]) ?
                                        <button className={`w-[40px] h-[60px] flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[9]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[9]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[9])}>{selectedBus.seat[9]}</div>
                                }
                            </div>
                            <div className="flex items-center gap-[5px]">
                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[10]) ?
                                        <button className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[10]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[10]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[10])}>{selectedBus.seat[10]}</div>
                                }

                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[11]) ?
                                        <button className={`w-[40px] h-[60px] flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[11]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[11]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[11])}>{selectedBus.seat[11]}</div>
                                }
                            </div>
                        </div>
                        <div className="flex justify-between my-3">
                            <div className="flex items-center gap-[5px]">
                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[12]) ?
                                        <button className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[12]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[12]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[12])}>{selectedBus.seat[12]}</div>
                                }

                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[13]) ?
                                        <button className={`w-[40px] h-[60px] flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[13]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[13]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[13])}>{selectedBus.seat[13]}</div>
                                }
                            </div>
                            <div className="flex items-center gap-[5px]">
                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[14]) ?
                                        <button className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[14]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[14]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[14])}>{selectedBus.seat[14]}</div>
                                }

                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[15]) ?
                                        <button className={`w-[40px] h-[60px] flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[15]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[15]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[15])}>{selectedBus.seat[15]}</div>
                                }
                            </div>
                        </div>
                        <div className="flex justify-between my-3">
                            <div className="flex items-center gap-[5px]">
                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[16]) ?
                                        <button className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[16]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[16]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[16])}>{selectedBus.seat[16]}</div>
                                }

                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[17]) ?
                                        <button className={`w-[40px] h-[60px]  flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[17]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[17]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[17])}>{selectedBus.seat[17]}</div>
                                }
                            </div>
                            <div className="flex items-center gap-[5px]">
                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[18]) ?
                                        <button className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[18]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[18]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[18])}>{selectedBus.seat[18]}</div>
                                }

                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[19]) ?
                                        <button className={`w-[40px] h-[60px] flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[19]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[19]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[19])}>{selectedBus.seat[19]}</div>
                                }
                            </div>
                        </div>
                        <div className="flex justify-between my-3">
                            <div className="flex items-center gap-[5px]">
                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[20]) ?
                                        <button className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[20]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[20]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[20])}>{selectedBus.seat[20]}</div>
                                }

                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[21]) ?
                                        <button className={`w-[40px] h-[60px] flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[21]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[21]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[21])}>{selectedBus.seat[21]}</div>
                                }
                            </div>
                            <div className="flex items-center gap-[5px]">
                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[22]) ?
                                        <button className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[22]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[22]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[22])}>{selectedBus.seat[22]}</div>
                                }

                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[23]) ?
                                        <button className={`w-[40px] h-[60px] flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[23]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[23]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[23])}>{selectedBus.seat[23]}</div>
                                }
                            </div>
                        </div>
                        <div className="flex justify-between my-3">
                            <div className="flex items-center gap-[5px]">
                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[24]) ?
                                        <button className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[24]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[24]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[24])}>{selectedBus.seat[24]}</div>
                                }

                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[25]) ?
                                        <button className={`w-[40px] h-[60px] flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[25]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[25]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[25])}>{selectedBus.seat[25]}</div>
                                }
                            </div>
                            <div className="flex items-center gap-[5px]">
                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[26]) ?
                                        <button className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[26]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[26]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[26])}>{selectedBus.seat[26]}</div>
                                }

                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[27]) ?
                                        <button className={`w-[40px] h-[60px]  flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[27]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[27]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[27])}>{selectedBus.seat[27]}</div>
                                }
                            </div>
                        </div>
                        <div className="flex justify-between my-3">
                            <div className="flex items-center gap-[5px]">
                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[28]) ?
                                        <button className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[28]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[28]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[28])}>{selectedBus.seat[28]}</div>
                                }

                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[29]) ?
                                        <button className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[29]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[29]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[29])}>{selectedBus.seat[29]}</div>
                                }
                            </div>
                            <div className="flex items-center gap-[5px]">
                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[30]) ?
                                        <button className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[30]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[30]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[30])}>{selectedBus.seat[30]}</div>
                                }

                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[31]) ?
                                        <button className={`w-[40px] h-[60px] flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[31]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[31]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[31])}>{selectedBus.seat[31]}</div>
                                }
                            </div>
                        </div>
                        <div className="flex justify-between my-3">
                            <div className="flex items-center gap-[5px]">
                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[32]) ?
                                        <button className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[32]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[32]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[32])}>{selectedBus.seat[32]}</div>
                                }

                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[33]) ?
                                        <button className={`w-[40px] h-[60px] flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[33]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[33]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[33])}>{selectedBus.seat[33]}</div>
                                }
                            </div>
                            <div className="flex items-center gap-[5px]">
                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[34]) ?
                                        <button className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[34]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[34]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[34])}>{selectedBus.seat[34]}</div>
                                }

                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[35]) ?
                                        <button className={`w-[40px] h-[60px] flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[35]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[35]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[35])}>{selectedBus.seat[35]}</div>
                                }
                            </div>
                        </div>
                        <div className="flex justify-between my-3">
                            <div className="flex items-center gap-[5px]">
                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[36]) ?
                                        <button className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[36]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[36]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[36])}>{selectedBus.seat[36]}</div>
                                }

                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[37]) ?
                                        <button className={`w-[40px] h-[60px] flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[37]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[37]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[37])}>{selectedBus.seat[37]}</div>
                                }
                            </div>
                            <div className="flex items-center gap-[5px]">
                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[38]) ?
                                        <button className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[38]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[38]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[38])}>{selectedBus.seat[38]}</div>
                                }

                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[39]) ?
                                        <button className={`w-[40px] h-[60px] flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[39]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px] flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[39]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[39])}>{selectedBus.seat[39]}</div>
                                }
                            </div>
                        </div>
                        <div className="flex justify-center my-3">
                            <div className="flex items-center justify-around  gap-[35px]">
                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[40]) ?
                                        <button className={`w-[40px] h-[60px]  flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[40]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px]  flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[40]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[40])}>{selectedBus.seat[40]}</div>
                                }
                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[41]) ?
                                        <button className={`w-[40px] h-[60px]  flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[41]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px]  flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[41]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[41])}>{selectedBus.seat[41]}</div>
                                }
                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[42]) ?
                                        <button className={`w-[40px] h-[60px]  flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[42]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px]  flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[42]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[42])}>{selectedBus.seat[42]}</div>
                                }
                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[43]) ?
                                        <button className={`w-[40px] h-[60px]  flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[43]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px]  flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[43]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[43])}>{selectedBus.seat[43]}</div>
                                }
                                {
                                    selectedBus.bookedSeats.includes(selectedBus.seat[44]) ?
                                        <button className={`w-[40px] h-[60px]  flex items-center justify-center border border-gray-400 bg-red-600 text-white flex flex-col`} disabled>{selectedBus.seat[44]} <span className="text-[10px]">booked</span></button> :
                                        <div className={`w-[40px] h-[60px]  flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[44]) ? 'bg-green-400 text-white' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[44])}>{selectedBus.seat[44]}</div>
                                }
                            </div>
                        </div>

                    </div>
                </div>
                {showModal && <SelectedBusModal  selectedSeats={selectedSeats} selectedBus={selectedBus} onClose={() => setShowModal(false)} />}

            </div>
        </div>

    );
};

export default SelectedBus;