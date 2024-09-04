
import man from '../../assets/man.png'
import phone from '../../assets/phone.png'
import CustomButton from '../../shared/CustomButton';
import Frame1 from '../../assets/Frame1.png'
import CustomFrame from '../../shared/CustomFrame';
function AboutUs() {



    return (
        <div data-aos="fade-in" className="lg:mt-48 container mx-auto">
            <div className="flex justify-center">
                <div className="mt-6 grid w-full lg:grid-cols-2  gap-20">
                    <div className='relative'>
                        <img src={man} className='rounded-xl' alt='man' />
                        <img className='absolute w-[50%] top-[61px] right-0 lg:right-5' alt='phone' src={phone} />
                    </div>
                    <div className='lg:mt-[120px] mt-10'>
                        <div>
                            <CustomFrame title="About Us" img={Frame1} />
                            <p className='text-5xl font-normal my-4 text-[#14161C]'>The heart of real <br /> estate innovation</p>
                            <p className="text-[#464851] text-[16px] font-normal">
                            At the heart of real estate innovation, we drive the industry forward with pioneering technology and cutting-edge solutions. Our commitment to advancing property search and transaction processes sets new standards for efficiency and user experience
                            </p>
                            <div className="w-28 mt-6">
                                <CustomButton title="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AboutUs;