import banner from '../../assets/banner/clideo_editor_7b7533750bca44d79ba128df30c6f144.mp4'
import '../../Styles/HomeBanner.css';
import { MdLocationPin } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";
const HomeBanner = () => {

    return (
        <div>
            <section className="home h-[600px] lg:px-10 lg:h-[75vh] md:h-[50vh] pt-10 p-[20px] md:pt-20 lg:pt-40" id="home">
                <video autoPlay loop muted playsInline src={banner} className='back-video'></video>

                <div className="content lg:pt-[50px] md:pt-0 pt-[100px]">
                    <h3 className="lg:text-4xl text-2xl text-white font-bold">Embark on the journey of discovery <br /> for every mile traveled is a step
                        <br />
                        for every mile traveled is a step</h3>
                    <p className='text-[12px] lg:text-[18px] mt-4 text-white'>Find yourself amidst the rhythm of the road, where each journey unveils new landscapes and stories waiting to be told. Let the bus be your vessel, carrying you through moments of wonder and discovery, as you traverse the paths less traveled</p>
                    <div className='bg-white p-4 mt-4 drop-shadow-lg'>
                        <h1 className='text-xl font-medium mb-4'>Find your ride</h1>
                        <form className='lg:flex md:flex  items-center'>
                            <div className='flex items-center mr-[20px] my-4 lg:my-0 md:my-0'>
                                <div className='text-gray-600 text-[26px] mr-2'>
                                    <MdLocationPin />
                                </div>
                                <select className='w-[260px] ps-2 rounded-md border border-[2px] border-black-400 lg:py-2.5 py-[5px] pe-10 shadow-md sm:text-sm' name="" id="">
                                    <option value="">select</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select>
                            </div>
                            <div className='flex items-center my-4 lg:my-0 md:my-0'>
                                <div className='text-gray-600 text-[26px] mr-2'>
                                <BiCalendar />
                                </div>
                               <input type="date" className='w-[260px] ps-2 rounded-md border border-[2px] border-black-400 lg:py-2.5 py-[5px] pe-10 shadow-md sm:text-sm' />
                            </div>

                            <div className='flex items-center my-4 lg:my-0 md:my-0 lg:ml-[30px]'>
                                <button className='text-white lg:w-[200px] md:w-[200px] w-[260px] h-[40px] bg-[#0245ab] lg:ml-[20px] md:ml-[20px] '>Search</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeBanner;