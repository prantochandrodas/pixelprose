import { useLoaderData } from "react-router-dom";
import steering from '../../assets/selectedBus/1655284.png';
import { useState } from "react";

const SelectedBus = () => {
    const selectedBus = useLoaderData();
    console.log(selectedBus)
    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeatClick = (seat) => {
      if (selectedSeats.includes(seat)) {
        setSelectedSeats(selectedSeats.filter(selectedSeat => selectedSeat !== seat));
      } else {
        setSelectedSeats([...selectedSeats, seat]);
      }
    };
    return (
        <div className="w-[90%]  lg:flex md:flex mx-auto mt-20 justify-center">

<div className=" p-10 w-[350px] h-[400px] sticky top-0  border border-gray-300 my-10">
                <form>
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="date" className="text-sm font-semibold text-gray-500">Date</label>
                        <input name="date" type="date" value={selectedBus.date} className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                        
                    </div>
                    <div className="flex flex-col space-y-1 my-4">
                        <label htmlFor="email" className="text-sm font-semibold text-gray-500">Destination</label>
                        <select name="destination" id="destination"  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200">
                            <option value={selectedBus.destination}>{selectedBus.destination}</option>
                        
                        </select>
                        
                    </div>
                    <div className="flex flex-col space-y-1 my-4">
                        <label htmlFor="email" className="text-sm font-semibold text-gray-500">Bustype</label>
                        <select name="bustype" id="bustype" className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200">
                            <option value="">{selectedBus.bustype}</option>
                        </select>
                     
                    </div>

                    <div className='flex items-center my-4 lg:mt-4 lg:my-0 md:my-0 lg:ml-[30px] '>
                        <button className='text-white lg:w-[200px] md:w-[200px] w-[260px] h-[40px] bg-[#0245ab] lg:ml-[20px] md:ml-[20px] '>Search</button>
                    </div>
                </form>
            </div>

            <div className="w-[800px]">
                <div className="w-[400px] lg:ml-5 border border-gray-400">
                    <div className="p-4 flex justify-between">
                        <h1 className="font-[500]">Door</h1>
                        <img src={steering} className="w-[40px]" alt="" />
                    </div>
                    <div className="p-4">
                        <div className="flex justify-between my-3">
                            <div className="flex items-center gap-[5px]">
                                <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[0]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[0])}>{selectedBus.seat[0]}</div>
                                <div className={`w-[40px] h-[60px]  flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[1]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[1])}>{selectedBus.seat[1]}</div>
                            </div>
                            <div className="flex items-center gap-[5px]">
                                <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[2]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[2])}>{selectedBus.seat[2]}</div>
                                <div className={`w-[40px] h-[60px]  flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[3]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[3])}>{selectedBus.seat[3]}</div>
                            </div>
                        </div>
                        <div className="flex justify-between my-3">
                            <div className="flex items-center gap-[5px]">
                                <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[4]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[4])}>{selectedBus.seat[4]}</div>
                                <div className={`w-[40px] h-[60px]  flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[5]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[5])}>{selectedBus.seat[5]}</div>
                            </div>
                            <div className="flex items-center gap-[5px]">
                                <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[6]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[6])}>{selectedBus.seat[6]}</div>
                                <div className={`w-[40px] h-[60px]  flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[7]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[7])}>{selectedBus.seat[7]}</div>
                            </div>
                        </div>
                        <div className="flex justify-between my-3">
                            <div className="flex items-center gap-[5px]">
                                <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[8]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[8])}>{selectedBus.seat[8]}</div>
                                <div className={`w-[40px] h-[60px]  flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[9]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[9])}>{selectedBus.seat[9]}</div>
                            </div>
                            <div className="flex items-center gap-[5px]">
                                <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[10]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[10])}>{selectedBus.seat[10]}</div>
                                <div className={`w-[40px] h-[60px]  flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[11]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[11])}>{selectedBus.seat[11]}</div>
                            </div>
                        </div>
                        <div className="flex justify-between my-3">
                            <div className="flex items-center gap-[5px]">
                                <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[12]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[12])}>{selectedBus.seat[12]}</div>
                                <div className={`w-[40px] h-[60px]  flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[13]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[13])}>{selectedBus.seat[13]}</div>
                            </div>
                            <div className="flex items-center gap-[5px]">
                                <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[14]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[14])}>{selectedBus.seat[14]}</div>
                                <div className={`w-[40px] h-[60px]  flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[15]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[15])}>{selectedBus.seat[15]}</div>
                            </div>
                        </div>
                        <div className="flex justify-between my-3">
                            <div className="flex items-center gap-[5px]">
                                <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[16]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[16])}>{selectedBus.seat[16]}</div>
                                <div className={`w-[40px] h-[60px]  flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[17]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[17])}>{selectedBus.seat[17]}</div>
                            </div>
                            <div className="flex items-center gap-[5px]">
                                <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[18]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[18])}>{selectedBus.seat[18]}</div>
                                <div className={`w-[40px] h-[60px]  flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[19]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[19])}>{selectedBus.seat[19]}</div>
                            </div>
                        </div>
                        <div className="flex justify-between my-3">
                            <div className="flex items-center gap-[5px]">
                                <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[20]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[20])}>{selectedBus.seat[20]}</div>
                                <div className={`w-[40px] h-[60px]  flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[21]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[21])}>{selectedBus.seat[21]}</div>
                            </div>
                            <div className="flex items-center gap-[5px]">
                                <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[22]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[22])}>{selectedBus.seat[22]}</div>
                                <div className={`w-[40px] h-[60px]  flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[23]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[23])}>{selectedBus.seat[23]}</div>
                            </div>
                        </div>
                        <div className="flex justify-between my-3">
                            <div className="flex items-center gap-[5px]">
                                <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[24]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[24])}>{selectedBus.seat[24]}</div>
                                <div className={`w-[40px] h-[60px]  flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[25]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[25])}>{selectedBus.seat[25]}</div>
                            </div>
                            <div className="flex items-center gap-[5px]">
                                <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[26]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[26])}>{selectedBus.seat[26]}</div>
                                <div className={`w-[40px] h-[60px]  flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[27]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[27])}>{selectedBus.seat[27]}</div>
                            </div>
                        </div>
                        <div className="flex justify-between my-3">
                            <div className="flex items-center gap-[5px]">
                                <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[28]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[28])}>{selectedBus.seat[28]}</div>
                                <div className={`w-[40px] h-[60px]  flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[29]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[29])}>{selectedBus.seat[29]}</div>
                            </div>
                            <div className="flex items-center gap-[5px]">
                                <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[30]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[30])}>{selectedBus.seat[30]}</div>
                                <div className={`w-[40px] h-[60px]  flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[31]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[31])}>{selectedBus.seat[31]}</div>
                            </div>
                        </div>
                        <div className="flex justify-between my-3">
                            <div className="flex items-center gap-[5px]">
                                <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[32]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[32])}>{selectedBus.seat[32]}</div>
                                <div className={`w-[40px] h-[60px]  flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[33]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[33])}>{selectedBus.seat[33]}</div>
                            </div>
                            <div className="flex items-center gap-[5px]">
                                <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[34]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[34])}>{selectedBus.seat[34]}</div>
                                <div className={`w-[40px] h-[60px]  flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[35]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[35])}>{selectedBus.seat[35]}</div>
                            </div>
                        </div>
                        <div className="flex justify-between my-3">
                            <div className="flex items-center gap-[5px]">
                                <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[36]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[36])}>{selectedBus.seat[36]}</div>
                                <div className={`w-[40px] h-[60px]  flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[37]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[37])}>{selectedBus.seat[37]}</div>
                            </div>
                            <div className="flex items-center gap-[5px]">
                                <div className={`w-[40px] h-[60px] mr-2 flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[38]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[38])}>{selectedBus.seat[38]}</div>
                                <div className={`w-[40px] h-[60px]  flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[39]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[39])}>{selectedBus.seat[39]}</div>
                            </div>
                        </div>
                        <div className="flex  my-3">
                            <div className="flex items-center justify-around gap-[5px]">
                                <div className="w-[40px] h-[60px] mr-8 flex items-center justify-center border border-gray-400" onClick={() => handleSeatClick(selectedBus.seat[40])}>{selectedBus.seat[40]}</div>
                                <div className="w-[40px] h-[60px] mr-8 flex items-center justify-center border border-gray-400" onClick={() => handleSeatClick(selectedBus.seat[41])}>{selectedBus.seat[41]}</div>
                                <div className="w-[40px] h-[60px] mr-8 flex items-center justify-center border border-gray-400" onClick={() => handleSeatClick(selectedBus.seat[42])}>{selectedBus.seat[42]}</div>
                                <div className="w-[40px] h-[60px] mr-8 flex items-center justify-center border border-gray-400" onClick={() => handleSeatClick(selectedBus.seat[43])}>{selectedBus.seat[43]}</div>
                                <div className={`w-[40px] h-[60px]  flex items-center justify-center border border-gray-400 ${selectedSeats.includes(selectedBus.seat[44]) ? 'bg-green-400' : ''}`} onClick={() => handleSeatClick(selectedBus.seat[44])}>{selectedBus.seat[44]}</div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectedBus;