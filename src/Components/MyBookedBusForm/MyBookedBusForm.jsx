import { Link } from "react-router-dom";


const MyBookedBusForm = ({selectedBus}) => {

    return (
        <div>
            <div className=" p-10 lg:w-[350px] md:w-[300px] h-[450px] mr-4 sticky top-0  border border-gray-300 my-10">
                <div>
                    <h1 className="font-[500] text-center my-4">Pay to Confirm or it can be canceled</h1>
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
                    <div className="flex flex-col space-y-1 my-4">
                        <label htmlFor="email" className="text-sm font-semibold text-gray-500">Price</label>
                        <input type="text" value={selectedBus.price} className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                    </div>

                </div>
            </div>  
        </div>
    );
};

export default MyBookedBusForm;