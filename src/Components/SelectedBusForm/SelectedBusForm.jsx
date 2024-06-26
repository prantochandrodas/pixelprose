


const SelectedBusForm = ({selectedBus,setShowModal}) => {
   
    return (
        <div>
            <div className=" p-10 w-[350px] md:w-[300px] md:mr-4 lg:w-[350px] h-[400px] sticky top-0  border border-gray-300 my-10">
                <div>
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="date" className="text-sm font-semibold text-gray-500">Date</label>
                        <input name="date" type="date" value={selectedBus.date} className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />

                    </div>
                    <div className="flex flex-col space-y-1 my-4">
                        <label htmlFor="email" className="text-sm font-semibold text-gray-500">Destination</label>
                        <select name="destination" id="destination" className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200">
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
                        <button onClick={()=>setShowModal(true)} className='text-white lg:w-[200px] md:w-[200px] w-[260px] h-[40px] bg-[#0245ab] lg:ml-[20px] md:ml-[20px]'>Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectedBusForm;