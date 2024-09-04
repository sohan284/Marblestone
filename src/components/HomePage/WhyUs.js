
import whyUs from '../../assets/WhyUs.png'
import Frame2 from '../../assets/Frame2.png'
import CustomFrame from '../../shared/CustomFrame';
import { Icon } from '@mui/material';
import mapPin1 from '../../assets/MapPin.png'
import mapPin2 from '../../assets/MapPin2.png'
import mapPin3 from '../../assets/MapPin3.png'
function WhyUs() {



    return (
        <div data-aos="fade-in" className="lg:mt-96 container mx-auto">
            <div className="flex justify-center">
                <div className="mt-6 grid w-full lg:grid-cols-2  gap-20">
                    <div className='lg:mt-[120px] mt-10'>
                        <div>
                            <CustomFrame title="Why Us?" img={Frame2} />
                            <p className='text-5xl font-normal my-4 text-[#14161C]'>Innovation defines our  <br /> real estate</p>
                            <p className="text-[#464851] text-[16px] font-normal">
                                Choose us for your real estate needs and experience unparalleled access to comprehensive listings and cutting-edge tools designed to simplify your property search. Our expert insights and user-friendly platform ensure a seamless journey from discovery to purchase.</p>
                            <div className="mt-6">
                                <div className='flex my-2'>
                                    <Icon>check_circle</Icon> <p className='ml-2 text-[14px]'>PropTech: Digital platforms, AI, and blockchain transforming property management and transactions</p>
                                </div>
                                <div className='flex  my-2'>
                                    <Icon>check_circle</Icon> <p className='ml-2 text-[14px]'>Sustainability: Eco-friendly construction and smart buildings for energy efficiency.</p>
                                </div>
                                <div className='flex my-2'>
                                    <Icon>check_circle</Icon> <p className='ml-2 text-[14px]'>Virtual Tours: 3D and VR technology for immersive property viewing experiences.</p>
                                </div>
                                <div className='flex my-2'>
                                    <Icon>check_circle</Icon> <p className='ml-2 text-[14px]'>Co-Living Spaces: Shared living environments catering to urban professionals and students.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative lg:mt-16'>
                        <img src={whyUs} className='rounded-3xl lg:ml-12' alt='us' />
                        <div className='bg-[#ffffff] px-4 py-3 shadow-lg inline-flex rounded-lg absolute top-28 right-0'>
                            <img className='bg-[#A4A6B0] rounded-full p-1 mr-1.5' src={mapPin1} alt='user' />
                            <p className='font-medium text-[14px] text-[#040404]'>2,553 sqtf</p>
                        </div>
                        <div className='bg-[#ffffff] px-4 py-3 shadow-lg inline-flex rounded-xl absolute top-44 left-0 '>
                            <img className='bg-[#A4A6B0] rounded-full p-1 mr-1.5' src={mapPin2} alt='user' />
                            <p className='font-medium text-[14px] text-[#040404]'>2 bathrooms</p>
                        </div>
                        <div className='bg-[#ffffff] px-4 py-3 shadow-lg inline-flex rounded-xl absolute lg:bottom-20 bottom-10 lg:left-28 '>
                            <img className='bg-[#A4A6B0] rounded-full p-1 mr-1.5' src={mapPin3} alt='user' />
                            <p className='font-medium text-[14px] text-[#040404]'>4 Parking zones</p>
                        </div>
                        <div className='bg-[#ffffff] px-4 py-3 shadow-lg inline-flex rounded-xl absolute lg:bottom-16 bottom-3 right-0 lg:right-28 '>
                            <img className='bg-[#A4A6B0] rounded-full p-1 mr-1.5' src={mapPin3} alt='user' />
                            <p className='font-medium text-[14px] text-[#040404]'>4 bedrooms</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default WhyUs;