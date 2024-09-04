import Frame3 from '../../assets/Frame3.png'
import CustomFrame from '../../shared/CustomFrame';
import Process from '../../assets/Process.png'
import Process2 from '../../assets/Process2.png'
import CustomProcess from '../shared-components/CustomProcess';
function OurProcess() {
    const processDetails = [
        {
            title: '1. Search for your favorite house in your location',
            details: "Explore a wide range of homes tailored to your preferences, right in your desired neighborhood. Our listings feature detailed descriptions, high-quality images, and virtual tours to help you find the perfect match. Whether you're looking for modern apartments, cozy cottages, or spacious family homes, your dream property is just a click away!"
        },
        {
            title: '2. Make a visit appointment with one of our agents',
            details: "Schedule a personalized tour with our expert agents at your convenience. Choose your preferred date and time, and our team will ensure a seamless viewing experience, guiding you through every detail of the property. Whether it's your first visit or a follow-up, we're here to help you make the best decision for your future home."
        },
        {
            title: '3. Get your dream house in a month, or less',
            details: "With our efficient process and dedicated team, we streamline every step of the home-buying journey. From browsing to closing, we work tirelessly to ensure you move into your perfect home quickly and smoothly—often within just 30 days or less."
        }
    ]

    return (
        <div data-aos="fade-in" className="lg:mt-40 container mx-auto">
            <div className="text-center">
                <CustomFrame title="Our Process" img={Frame3} />
                <p className='text-5xl font-normal my-4 text-[#14161C]'>Find your dream house as <br /> easy as 1, 2, 3</p>
                <p className='text-[16px] font-normal mt-5 text-[#464851]'>Discover a perfect blend of comfort and luxury with our curated selection of homes tailored to your lifestyle. <br /> Start your journey to a new beginning today!</p>
            </div>
            <div className="mt-6 grid w-full lg:grid-cols-2  gap-20">
                <div className=' mt-10'>
                    {processDetails?.map(process =>
                        <div>
                            <CustomProcess title={process?.title} details={process?.details} />
                        </div>
                    )

                    }
                </div>
                <div className='relative mt-5 pb-20'>
                    <img src={Process} className='rounded-3xl' alt='us' />
                    <img src={Process2} className='rounded-3xl absolute w-[42%] bottom-0 right-0 lg:right-32' alt='us' />
                </div>
            </div>
        </div>
    );
}
export default OurProcess;